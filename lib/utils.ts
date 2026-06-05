import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function eloColor(elo?: number) {
  if (elo !== undefined) {
    return elo >= 0 && elo <= 599
      ? "text-gray-950"
      : elo >= 600 && elo <= 899
      ? "text-gray-500"
      : elo >= 900 && elo <= 1199
      ? "text-yellow-500"
      : elo >= 1200 && elo <= 1499
      ? "text-green-500"
      : elo >= 1500 && elo <= 1999
      ? "text-blue-400"
      : elo >= 2000
      ? "text-purple-500"
      : ""
  }
}

export function addRank(elo?: number) {
  if (elo !== undefined) {
    return elo >= 0 && elo <= 399
      ? "Coal I"
      : elo >= 400 && elo <= 499
      ? "Coal II"
      : elo >= 500 && elo <= 599
      ? "Coal III"
      : elo >= 600 && elo <= 699
      ? "Iron I"
      : elo >= 700 && elo <= 799
      ? "Iron II"
      : elo >= 800 && elo <= 899
      ? "Iron III"
      : elo >= 900 && elo <= 999
      ? "Gold I"
      : elo >= 1000 && elo <= 1099
      ? "Gold II"
      : elo >= 1100 && elo <= 1199
      ? "Gold III"
      : elo >= 1200 && elo <= 1299
      ? "Emerald I"
      : elo >= 1300 && elo <= 1399
      ? "Emerald II"
      : elo >= 1400 && elo <= 1499
      ? "Emerald III"
      : elo >= 1500 && elo <= 1649
      ? "Diamond I"
      : elo >= 1650 && elo <= 1799
      ? "Diamond II"
      : elo >= 1800 && elo <= 1999
      ? "Diamond III"
      : elo >= 2000
      ? "Netherite"
      : ""
  }
}

/**
 * Gets the rank name based on ELO with subdivisions (I, II, III)
 * Ranks:
 * - Coal I: 0-399, Coal II: 400-499, Coal III: 500-599
 * - Iron I: 600-699, Iron II: 700-799, Iron III: 800-899
 * - Gold I: 900-999, Gold II: 1000-1099, Gold III: 1100-1199
 * - Emerald I: 1200-1299, Emerald II: 1300-1399, Emerald III: 1400-1499
 * - Diamond I: 1500-1649, Diamond II: 1650-1799, Diamond III: 1800-1999
 * - Netherite: 2000+
 */
export function getRankName(elo?: number): string {
  if (elo === undefined) return ""
  
  // Coal
  if (elo >= 0 && elo <= 399) return "Coal I"
  if (elo >= 400 && elo <= 499) return "Coal II"
  if (elo >= 500 && elo <= 599) return "Coal III"
  
  // Iron
  if (elo >= 600 && elo <= 699) return "Iron I"
  if (elo >= 700 && elo <= 799) return "Iron II"
  if (elo >= 800 && elo <= 899) return "Iron III"
  
  // Gold
  if (elo >= 900 && elo <= 999) return "Gold I"
  if (elo >= 1000 && elo <= 1099) return "Gold II"
  if (elo >= 1100 && elo <= 1199) return "Gold III"
  
  // Emerald
  if (elo >= 1200 && elo <= 1299) return "Emerald I"
  if (elo >= 1300 && elo <= 1399) return "Emerald II"
  if (elo >= 1400 && elo <= 1499) return "Emerald III"
  
  // Diamond
  if (elo >= 1500 && elo <= 1649) return "Diamond I"
  if (elo >= 1650 && elo <= 1799) return "Diamond II"
  if (elo >= 1800 && elo <= 1999) return "Diamond III"
  
  // Netherite
  if (elo >= 2000) return "Netherite"
  
  return ""
}

/**
 * Gets the rank icon path based on ELO with subdivision support.
 * Each tier (I, II, III) maps to a specific PNG file.
 */
export function getRankIcon(elo?: number): string {
  if (elo === undefined) return ""

  // Coal
  if (elo >= 0 && elo <= 399) return "/range/coal_1.png"
  if (elo >= 400 && elo <= 499) return "/range/coal_2.png"
  if (elo >= 500 && elo <= 599) return "/range/coal_3.png"

  // Iron
  if (elo >= 600 && elo <= 699) return "/range/iron_1.png"
  if (elo >= 700 && elo <= 799) return "/range/iron_2.png"
  if (elo >= 800 && elo <= 899) return "/range/iron_3.png"

  // Gold
  if (elo >= 900 && elo <= 999) return "/range/gold_1.png"
  if (elo >= 1000 && elo <= 1099) return "/range/gold_2.png"
  if (elo >= 1100 && elo <= 1199) return "/range/gold_3.png"

  // Emerald
  if (elo >= 1200 && elo <= 1299) return "/range/emerald_1.png"
  if (elo >= 1300 && elo <= 1399) return "/range/emerald_2.png"
  if (elo >= 1400 && elo <= 1499) return "/range/emerald_3.png"

  // Diamond
  if (elo >= 1500 && elo <= 1649) return "/range/diamond_1.png"
  if (elo >= 1650 && elo <= 1799) return "/range/diamond_2.png"
  if (elo >= 1800 && elo <= 1999) return "/range/diamond_3.png"

  // Netherite (single tier)
  if (elo >= 2000) return "/range/netherite.png"

  return ""
}

export function timeFormat(time: number | undefined) {
  if (time === undefined) {
    return
  }
  const runTime = new Date(time)
  return runTime.toISOString().substr(14, 8)
}

export function timeSince(timestamp: number): string {
  const now = Date.now() / 1000 // Current timestamp in seconds
  const diff = now - timestamp

  const seconds = Math.floor(diff)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (seconds < 60) {
    return "moments ago"
  } else if (minutes < 60) {
    return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`
  } else if (hours < 24) {
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`
  } else {
    return days === 1 ? "1 day ago" : `${days} days ago`
  }
}

export function advancementLabel(advancement: string) {
  return advancement === "story.mine_stone"
    ? "Stone Age"
    : advancement === "story.upgrade_tools"
    ? "Getting an Upgrade"
    : advancement === "story.smelt_iron"
    ? "Acquire Hardware"
    : advancement === "story.obtain_armor"
    ? "Suit Up"
    : advancement === "story.lava_bucket"
    ? "Hot Stuff"
    : advancement === "story.iron_tools"
    ? "Isn't It Iron Pick"
    : advancement === "story.deflect_arrow"
    ? "Not Today, Thank You"
    : advancement === "story.form_obsidian"
    ? "Ice Bucket Challenge"
    : advancement === "story.mine_diamond"
    ? "Diamonds!"
    : advancement === "story.enter_the_nether"
    ? "We Need to Go Deeper"
    : advancement === "story.shiny_gear"
    ? "Cover me with diamonds"
    : advancement === "story.enchant_item"
    ? "enchanted an item"
    : advancement === "story.cure_zombie_villager"
    ? "Zombie Doctor"
    : advancement === "story.follow_ender_eye"
    ? "Eye Spy"
    : advancement === "story.enter_the_end"
    ? "The End?"
    : advancement === "nether.return_to_sender"
    ? "Return to Sender"
    : advancement === "nether.find_bastion"
    ? "Those Were the Days"
    : advancement === "nether.obtain_ancient_debris"
    ? "Hidden in the Depths"
    : advancement === "nether.find_fortress"
    ? "A Terrible Fortress"
    : advancement === "nether.obtain_crying_obsidian"
    ? "Who is Cutting Onions?"
    : advancement === "nether.distract_piglin"
    ? "Oh Shiny"
    : advancement === "nether.loot_bastion"
    ? "War Pigs"
    : advancement === "nether.obtain_blaze_rod"
    ? "Into Fire"
    : advancement === "end.root"
    ? "Enter the End"
    : advancement === "adventure.ol_betsy"
    ? "Ol' Betsy"
    : advancement === "adventure.sleep_in_bed"
    ? "Sweet Dreams"
    : advancement === "adventure.shoot_arrow"
    ? "Take Aim"
    : advancement === "adventure.kill_a_mob"
    ? "Monster Hunter"
    : advancement === "projectelo.timeline.blind_travel"
    ? "Blind Travel"
    : advancement === "projectelo.timeline.death"
    ? "Death Reset"
    : ""
}

export function nextMatchCheck(matches: any) {
  const currentUnixTimestamp = Math.floor(Date.now() / 1000) // Current time in Unix timestamp format

  if (!matches || matches.length === 0) {
    return null // Return null if the array is empty or undefined
  }

  for (let i = 0; i < matches.length; i++) {
    if (matches[i].state === "ACTIVE") {
      return
    }
  }

  let closestTimestamp = matches[matches.length - 1].startTime
  let closestDifference = Math.abs(currentUnixTimestamp - matches[0].startTime)

  for (const timestamp of matches) {
    const timestampDifference = Math.abs(
      currentUnixTimestamp - timestamp.startTime
    )
    if (timestampDifference < closestDifference) {
      closestTimestamp = timestamp.startTime
      closestDifference = timestampDifference
    }
  }

  return closestTimestamp
}
