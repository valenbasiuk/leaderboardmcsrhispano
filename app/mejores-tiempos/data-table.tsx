"use client"

import * as React from "react"
import Link from "next/link"
import {
  ColumnDef,
  ColumnFiltersState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Input } from "@/components/ui/input"
import { Runner } from "@/app/leaderboard/columns"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { parseProfileToRunner } from "@/lib/actions/getHispanicTimeLeaderboard"

interface TimeDataTableProps {
  columns: ColumnDef<Runner, any>[]
  initialData: Runner[]
  allRunners: Runner[]
}

export function TimeDataTable({ columns, initialData, allRunners }: TimeDataTableProps) {
  const [resolvedRunners, setResolvedRunners] = React.useState<Runner[]>(initialData)
  const [isProgressiveLoading, setIsProgressiveLoading] = React.useState<boolean>(true)
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  
  // Toggle: season (seasonTime vs totalTime)
  const [isSeason, setIsSeason] = React.useState<boolean>(true) // true = temporada actual, false = histórico

  // Column visibility: hide "season" column when viewing current season, show in historical
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({
    season: false, // hidden by default (current season view)
  })

  // Sync column visibility with isSeason toggle
  React.useEffect(() => {
    setColumnVisibility((prev) => ({
      ...prev,
      season: !isSeason, // show season column only in historical mode
    }))
  }, [isSeason])

  // Progressive loading loop for remaining runners
  React.useEffect(() => {
    let isMounted = true;
    
    // Find runners that haven't been resolved yet
    const initialUuids = new Set(initialData.map(r => r.uuid));
    const pending = allRunners.filter(r => !initialUuids.has(r.uuid));
    
    if (pending.length === 0) {
      setIsProgressiveLoading(false);
      return;
    }

    const batchSize = 10;
    let currentIndex = 0;

    async function loadNextBatch() {
      if (!isMounted || currentIndex >= pending.length) {
        if (isMounted) setIsProgressiveLoading(false);
        return;
      }

      const batch = pending.slice(currentIndex, currentIndex + batchSize);
      currentIndex += batchSize;

      try {
        const promises = batch.map(async (runner) => {
          try {
            const res = await fetch(`/api/mcsr/users/${runner.uuid}`);
            if (!res.ok) return null;
            const json = await res.json();
            return parseProfileToRunner(runner, json.data);
          } catch (err) {
            console.warn(`Error client-side fetching profile for ${runner.nickname}:`, err);
            return null;
          }
        });

        const results = await Promise.all(promises);
        const newResolved = results.filter((r): r is Runner => r !== null);

        if (!isMounted) return;

        setResolvedRunners((prev) => {
          const merged = [...prev];
          for (const runner of newResolved) {
            if (!merged.some(m => m.uuid === runner.uuid)) {
              merged.push(runner);
            }
          }
          return merged;
        });

        // Small pause of 600ms between batches to be nice to proxy/rate-limiting
        setTimeout(loadNextBatch, 600);
      } catch (err) {
        console.error("Failed loading batch of times:", err);
        if (isMounted) {
          // Retry after 2 seconds on general failure
          setTimeout(loadNextBatch, 2000);
        }
      }
    }

    // Delay start of progressive loading slightly to let page paint first
    const timer = setTimeout(loadNextBatch, 1000);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [allRunners, initialData]);

  // Compute processed data based on toggle
  const processedData = React.useMemo(() => {
    // 1. Map selected time source
    let mapped = resolvedRunners.map((runner) => {
      const selectedTime = isSeason ? runner.seasonTime : runner.totalTime
      return {
        ...runner,
        time: selectedTime,
      }
    })

    // 2. Filter out runners without times in this category
    let filtered = mapped.filter((runner) => runner.time !== undefined && runner.time > 0)

    // 3. Sort ascending (fastest first)
    const sorted = filtered.sort((a, b) => {
      return (a.time || Infinity) - (b.time || Infinity)
    })

    // 4. Re-assign ranks
    return sorted.map((runner, index) => ({
      ...runner,
      rank: index + 1,
    }))
  }, [resolvedRunners, isSeason])

  const table = useReactTable({
    data: processedData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      columnFilters,
      columnVisibility,
    },
    meta: {
      isSeason,
    },
  })

  const filterValue = table.getColumn("nickname")?.getFilterValue() as string

  return (
    <div className="flex flex-col gap-6">
      {/* Progressive loading progress bar */}
      {isProgressiveLoading && (
        <div className="w-full flex flex-col gap-1.5 p-4 rounded-3xl aero-glass border border-white/5 animate-in fade-in duration-300">
          <div className="flex justify-between items-center text-xs font-bold text-emerald-400">
            <span className="flex items-center gap-1.5 lowercase">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              cargando tiempos de jugadores en segundo plano...
            </span>
            <span>
              {resolvedRunners.length} / {allRunners.length} jugadores ({Math.round((resolvedRunners.length / allRunners.length) * 100)}%)
            </span>
          </div>
          <div className="w-full h-1 bg-emerald-500/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500 ease-out" 
              style={{ width: `${Math.min(100, Math.round((resolvedRunners.length / allRunners.length) * 100))}%` }}
            />
          </div>
        </div>
      )}

      {/* Dynamic Controls Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Search */}
        <Input
          placeholder="buscar jugador..."
          value={filterValue ?? ""}
          onChange={(event) =>
            table.getColumn("nickname")?.setFilterValue(event.target.value)
          }
          className="w-full md:max-w-sm rounded-full text-sm pl-4 focus-visible:ring-sky-400/50 aero-search text-foreground placeholder:text-muted-foreground"
        />

        {/* Season Toggle */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex bg-emerald-500/5 dark:bg-emerald-950/10 backdrop-blur border border-white/10 rounded-full p-1 shadow-inner">
            <button
              onClick={() => setIsSeason(true)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all relative overflow-hidden active:scale-95 ${
                isSeason
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/10"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {isSeason && <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />}
              temporada actual
            </button>
            <button
              onClick={() => setIsSeason(false)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all relative overflow-hidden active:scale-95 ${
                !isSeason
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/10"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {!isSeason && <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent pointer-events-none" />}
              histórico
            </button>
          </div>
        </div>
      </div>

      {/* Main Table */}
      <div className="rounded-3xl overflow-hidden aero-glass">
        <Table>
          <TableHeader
            className="border-b border-white/20 dark:border-white/5"
            style={{ background: "linear-gradient(90deg, rgba(100,180,255,0.10), rgba(140,220,200,0.08))" }}
          >
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="hover:bg-transparent border-white/20 dark:border-white/5">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="text-foreground/70 dark:text-foreground/80 font-bold text-sm lowercase py-4 px-6 tracking-wider">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="border-white/12 dark:border-white/5 transition-colors duration-200 hover:bg-sky-100/30 dark:hover:bg-sky-900/15"
                  style={{ borderBottom: "1px solid rgba(100,180,255,0.10)" }}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="py-4 px-6 text-sm text-foreground">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow className="hover:bg-transparent">
                <TableCell
                  colSpan={columns.length}
                  className="h-32 text-center text-sm font-semibold text-muted-foreground p-6"
                >
                  {isProgressiveLoading
                    ? "cargando y buscando mejores tiempos registrados... ⏳"
                    : "no se encontraron tiempos registrados para esta categoría 😢"}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
