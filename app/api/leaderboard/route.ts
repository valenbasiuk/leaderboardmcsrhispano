import { NextRequest, NextResponse } from "next/server"
import getHispanicLeaderboard from "@/lib/actions/getHispanicLeaderboard"

export async function GET(request: NextRequest) {
  const apiKey = request.headers.get("x-api-key")
  if (apiKey !== process.env.BOT_API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const runners = await getHispanicLeaderboard()
    return NextResponse.json({ status: "success", data: runners })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch leaderboard" }, { status: 500 })
  }
}
