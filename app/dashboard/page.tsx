"use client"

import { motion } from "framer-motion"
import { 
  BookOpen, 
  Trophy, 
  Clock, 
  TrendingUp, 
  Play, 
  Calendar,
  Target,
  Flame,
  ChevronRight,
  Settings,
  Bell,
  LogOut,
  User,
  BarChart3
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const stats = [
  { 
    label: "Current Rating", 
    value: "1,847", 
    change: "+52 this month",
    icon: TrendingUp,
    color: "text-emerald-500"
  },
  { 
    label: "Lessons Completed", 
    value: "124", 
    change: "8 this week",
    icon: BookOpen,
    color: "text-primary"
  },
  { 
    label: "Puzzles Solved", 
    value: "2,341", 
    change: "156 this week",
    icon: Target,
    color: "text-amber-500"
  },
  { 
    label: "Study Streak", 
    value: "23 days", 
    change: "Personal best!",
    icon: Flame,
    color: "text-rose-500"
  },
]

const recentLessons = [
  {
    title: "The Italian Game Masterclass",
    instructor: "GM Alexander Volkov",
    progress: 65,
    nextLesson: "The Giuoco Piano - Part 3",
    thumbnail: "Opening",
  },
  {
    title: "Rook Endgames Deep Dive",
    instructor: "GM Alexander Volkov",
    progress: 30,
    nextLesson: "Lucena Position",
    thumbnail: "Endgame",
  },
  {
    title: "King Safety & Attack",
    instructor: "GM Marcus Thompson",
    progress: 45,
    nextLesson: "Opposite Side Castling",
    thumbnail: "Middlegame",
  },
]

const upcomingSessions = [
  {
    title: "1-on-1 Session",
    trainer: "GM Alexander Volkov",
    date: "Today",
    time: "3:00 PM",
    type: "Private",
  },
  {
    title: "Group Tactics Class",
    trainer: "IM Sofia Martinez",
    date: "Tomorrow",
    time: "5:30 PM",
    type: "Group",
  },
  {
    title: "Opening Review",
    trainer: "GM Marcus Thompson",
    date: "Friday",
    time: "4:00 PM",
    type: "Private",
  },
]

const achievements = [
  { name: "First Blood", description: "Win your first puzzle", unlocked: true },
  { name: "Bookworm", description: "Complete 100 lessons", unlocked: true },
  { name: "Streaker", description: "20 day study streak", unlocked: true },
  { name: "Tactician", description: "Solve 1000 puzzles", unlocked: true },
  { name: "Scholar", description: "Complete a full course", unlocked: false },
  { name: "Master", description: "Reach 2000 rating", unlocked: false },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Dashboard Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-6 h-6 text-primary-foreground"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L8 6h8l-4-4z" />
                <path d="M8 6v2a4 4 0 0 0 8 0V6" />
                <path d="M6 12h12v2H6z" />
                <path d="M8 14v6H6v2h12v-2h-2v-6" />
              </svg>
            </div>
            <span className="font-serif text-xl font-semibold hidden sm:inline">
              Grandmaster
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">JD</span>
                  </div>
                  <span className="hidden sm:inline">John Doe</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/">
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">
            Welcome back, John
          </h1>
          <p className="text-muted-foreground">
            {"You're doing great! Keep up your study streak."}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    <span className="text-xs text-muted-foreground">{stat.change}</span>
                  </div>
                  <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Continue Learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl">Continue Learning</CardTitle>
                  <Link href="/lessons">
                    <Button variant="ghost" size="sm">
                      View All
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentLessons.map((lesson) => (
                    <div
                      key={lesson.title}
                      className="flex items-center gap-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer group"
                    >
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <span className="text-xs font-medium text-primary">{lesson.thumbnail}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold truncate group-hover:text-primary transition-colors">
                          {lesson.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{lesson.instructor}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Progress value={lesson.progress} className="h-1.5 flex-1" />
                          <span className="text-xs text-muted-foreground">{lesson.progress}%</span>
                        </div>
                      </div>
                      <div className="hidden sm:block text-right">
                        <p className="text-xs text-muted-foreground mb-1">Next:</p>
                        <p className="text-sm font-medium">{lesson.nextLesson}</p>
                      </div>
                      <Button size="icon" className="shrink-0 bg-primary text-primary-foreground hover:bg-primary/90">
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Rating Progress Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl">Rating Progress</CardTitle>
                  <Badge variant="secondary">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +52 this month
                  </Badge>
                </CardHeader>
                <CardContent>
                  <div className="h-48 flex items-end gap-2">
                    {[1720, 1735, 1750, 1768, 1785, 1795, 1810, 1825, 1832, 1840, 1845, 1847].map((rating, index) => {
                      const maxRating = 1850
                      const minRating = 1700
                      const height = ((rating - minRating) / (maxRating - minRating)) * 100
                      return (
                        <div key={index} className="flex-1 flex flex-col items-center gap-1">
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="w-full bg-primary/20 rounded-t-sm relative group cursor-pointer"
                          >
                            <div className="absolute inset-x-0 bottom-0 bg-primary rounded-t-sm transition-all group-hover:opacity-80" style={{ height: '100%' }} />
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-card px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
                              {rating}
                            </div>
                          </motion.div>
                          <span className="text-[10px] text-muted-foreground">
                            {index === 0 ? 'Jan' : index === 11 ? 'Dec' : ''}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Sessions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl">Upcoming Sessions</CardTitle>
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div
                      key={session.title}
                      className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm truncate">{session.title}</h4>
                        <p className="text-xs text-muted-foreground truncate">{session.trainer}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{session.date}</p>
                        <p className="text-xs text-muted-foreground">{session.time}</p>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    Schedule New Session
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl">Achievements</CardTitle>
                  <Trophy className="w-5 h-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-3">
                    {achievements.map((achievement) => (
                      <div
                        key={achievement.name}
                        className={`flex flex-col items-center p-3 rounded-lg text-center ${
                          achievement.unlocked
                            ? "bg-primary/10"
                            : "bg-muted/50 opacity-50"
                        }`}
                        title={achievement.description}
                      >
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                            achievement.unlocked
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          <Trophy className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-medium truncate w-full">
                          {achievement.name}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full mt-4" size="sm">
                    View All Achievements
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
                    <Target className="w-5 h-5" />
                    <span className="text-xs">Puzzles</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
                    <Play className="w-5 h-5" />
                    <span className="text-xs">Play Game</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
                    <BarChart3 className="w-5 h-5" />
                    <span className="text-xs">Analysis</span>
                  </Button>
                  <Link href="/trainers" className="contents">
                    <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
                      <User className="w-5 h-5" />
                      <span className="text-xs">Trainers</span>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}
