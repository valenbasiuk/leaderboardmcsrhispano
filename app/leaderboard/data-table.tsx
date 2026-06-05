"use client"

import * as React from "react"
import Link from "next/link"
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  })

  const filterValue = table.getColumn("nickname")?.getFilterValue() as string

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center">
        <Input
          placeholder="buscar jugador..."
          value={filterValue ?? ""}
          onChange={(event) =>
            table.getColumn("nickname")?.setFilterValue(event.target.value)
          }
          className="w-full md:max-w-sm rounded-full text-sm pl-4 focus-visible:ring-sky-400/50 aero-search text-foreground placeholder:text-muted-foreground"
        />
      </div>
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
                  el jugador no está en el top 150 😢 pero puedes ver su perfil{" "}
                  <Link
                    href={`/profile/${filterValue}`}
                    className="text-sky-500 font-bold underline hover:text-sky-400"
                    prefetch={false}
                  >
                    aquí
                  </Link>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
