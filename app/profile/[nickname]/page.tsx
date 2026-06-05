/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Link from "next/link"
import { Book, LineChart, Swords, Twitch, Youtube } from "lucide-react"

import ProfileAvatar from "@/components/profile-avatar"

import getProfile from "@/lib/actions/getProfile"
import getUsersEloChart from "@/lib/actions/getUsersEloChart"
import getUsersMatches from "@/lib/actions/getUsersMatches"
import { addRank, eloColor, timeFormat, timeSince } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import GeneralTab from "@/components/general-tab"
import MatchesTab from "@/components/matches-tab"
import StatsTab from "@/components/stats-tab"

type Params = {
  params: {
    nickname: string
  }
}

function DiscordIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 127.14 96.36" fill="currentColor" {...props}>
      <path d="M107.7,8.07A105.15,105.15,0,0,0,77.26,0a77.19,77.19,0,0,0-3.3,6.83A96.67,96.67,0,0,0,53.22,6.83,77.19,77.19,0,0,0,49.88,0,105.15,105.15,0,0,0,19.44,8.07C3.66,31.58-1.86,54.65,1,77.53A105.73,105.73,0,0,0,32,96.36a77.7,77.7,0,0,0,6.63-10.85,68.43,68.43,0,0,1-10.5-5c.88-.65,1.72-1.34,2.51-2.07a75.14,75.14,0,0,0,73,0c.79.73,1.63,1.42,2.51,2.07a68.43,68.43,0,0,1-10.5,5,77.7,77.7,0,0,0,6.63,10.85,105.73,105.73,0,0,0,31-18.83C129,54.65,122.92,31.58,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53S36.18,40.36,42.45,40.36,53.83,46,53.83,53,48.72,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.24,60,73.24,53S78.41,40.36,84.69,40.36,96.07,46,96.07,53,91,65.69,84.69,65.69Z"/>
    </svg>
  )
}

function ProfileHeader({
  nickname,
  userData,
}: {
  nickname: string
  userData: any
}) {
  return (
    <>
      <div className="flex items-center">
        {/* Avatar del jugador usando servicios alternativos (crafatar suele caerse) */}
        <ProfileAvatar uuid={userData.data.uuid} nickname={nickname} />
        <h1 className="flex items-center gap-3 text-2xl">
          {nickname}
          {userData.data.country && (
            <img
              src={`https://flagcdn.com/24x18/${userData.data.country.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/48x36/${userData.data.country.toLowerCase()}.png 2x`}
              alt={userData.data.country}
              height={18}
              width={24}
              className="rounded-sm"
              loading="lazy"
            />
          )}
        </h1>
        {userData.data.connections.youtube != null && (
          <Link
            href={`https://youtube.com/${userData.data.connections.youtube.name}`}
            target="_blank"
          >
            <Youtube className="ml-4 h-8 w-8 text-red-600" />
          </Link>
        )}
        {userData.data.connections.twitch != null && (
          <Link
            href={`https://twitch.tv/${userData.data.connections.twitch.name}`}
            target="_blank"
          >
            <Twitch className="ml-2 mt-1 h-7 w-7 text-purple-700" />
          </Link>
        )}
        {userData.data.connections.discord != null && (
          <div 
            className="ml-4 flex items-center gap-1.5 bg-[#5865F2]/10 text-[#5865F2] dark:text-[#8ea1ff] dark:bg-[#5865F2]/20 px-3 py-1 rounded-full text-xs font-bold border border-[#5865F2]/20 shadow-sm"
            title={`Discord: ${userData.data.connections.discord.name}`}
          >
            <DiscordIcon className="h-4 w-4" />
            <span>{userData.data.connections.discord.name}</span>
          </div>
        )}
      </div>
      <div className="mb-2 flex items-center pl-10 md:mb-6">
        <h2 className="text-gray-500">
          Rank: {!userData.data.eloRank ? "N/A" : `#${userData.data.eloRank}`}
        </h2>
        <h2 className="pl-4 text-gray-500">
          Elo:{" "}
          {!userData.data.eloRate
            ? "N/A"
            : [
              <span className={`${eloColor(userData.data.eloRate)}`}>
                {userData.data.eloRate} - {addRank(userData.data.eloRate)}
              </span>,
            ]}
        </h2>
      </div>
    </>
  )
}

export default async function ProfilePage({ params: { nickname } }: Params) {
  const userData = await getProfile(nickname)
  const eloMatches = await getUsersEloChart(userData.data.uuid, nickname)
  const matches = await getUsersMatches(userData.data.uuid, nickname)
  return (
    <section className="container grid items-center pb-8 pl-10 pt-6 md:py-10">
      <Tabs defaultValue="general">
        <div className="relative">
          <TabsList className="absolute right-0 top-4 hidden w-[200px] grid-cols-3 md:grid md:w-[300px]">
            <TabsTrigger value="general">
              <Book className="mr-1 h-4 w-4" />
              General
            </TabsTrigger>
            <TabsTrigger value="stats">
              <LineChart className="mr-1 h-4 w-4" />
              Stats
            </TabsTrigger>
            <TabsTrigger value="matches">
              <Swords className="mr-1 h-4 w-4" />
              Matches
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="general">
          <section className="container grid items-center p-0">
            <ProfileHeader nickname={nickname} userData={userData} />
            <TabsList className="mb-2 grid w-full grid-cols-3 md:hidden md:w-[300px]">
              <TabsTrigger value="general">
                <Book className="mr-1 h-4 w-4" />
                General
              </TabsTrigger>
              <TabsTrigger value="stats">
                <LineChart className="mr-1 h-4 w-4" />
                Stats
              </TabsTrigger>
              <TabsTrigger value="matches">
                <Swords className="mr-1 h-4 w-4" />
                Matches
              </TabsTrigger>
            </TabsList>
            <GeneralTab userData={userData} matches={eloMatches} />
          </section>
        </TabsContent>
        <TabsContent value="stats">
          <ProfileHeader nickname={nickname} userData={userData} />
          <TabsList className="mb-2 grid w-full grid-cols-3 md:hidden md:w-[300px]">
            <TabsTrigger value="general">
              <Book className="mr-1 h-4 w-4" />
              General
            </TabsTrigger>
            <TabsTrigger value="stats">
              <LineChart className="mr-1 h-4 w-4" />
              Stats
            </TabsTrigger>
            <TabsTrigger value="matches">
              <Swords className="mr-1 h-4 w-4" />
              Matches
            </TabsTrigger>
          </TabsList>
          <StatsTab userData={userData} />
        </TabsContent>
        <TabsContent value="matches">
          <ProfileHeader nickname={nickname} userData={userData} />
          <TabsList className="mb-2 grid w-full grid-cols-3 md:hidden md:w-[300px]">
            <TabsTrigger value="general">
              <Book className="mr-1 h-4 w-4" />
              General
            </TabsTrigger>
            <TabsTrigger value="stats">
              <LineChart className="mr-1 h-4 w-4" />
              Stats
            </TabsTrigger>
            <TabsTrigger value="matches">
              <Swords className="mr-1 h-4 w-4" />
              Matches
            </TabsTrigger>
          </TabsList>
          <MatchesTab matches={matches} userData={userData} />
        </TabsContent>
      </Tabs>
    </section>
  )
}
