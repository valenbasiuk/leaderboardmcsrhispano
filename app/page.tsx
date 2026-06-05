import { redirect } from "next/navigation"

export default function IndexPage() {
  // Redirect to leaderboard as the main page
  redirect("/leaderboard")
}
