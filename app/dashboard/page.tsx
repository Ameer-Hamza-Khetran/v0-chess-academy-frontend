"use client"

import { motion } from "framer-motion"
import { 
  Trophy, 
  Clock, 
  TrendingUp, 
  Calendar,
  Settings,
  Bell,
  LogOut,
  User,
  CreditCard,
  CheckCircle2,
  XCircle,
  BookOpen,
  GraduationCap,
  Medal,
  FileText,
  ChevronRight,
  ExternalLink
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

// Student data
const studentInfo = {
  name: "John Doe",
  email: "john.doe@email.com",
  joinDate: "January 2024",
  plan: "Club Player",
}

// Ratings data
const ratings = {
  fide: {
    current: 1847,
    peak: 1892,
    lastUpdated: "December 2024",
    fideId: "12345678",
  },
  chesscom: {
    rapid: 1920,
    blitz: 1856,
    bullet: 1734,
    puzzles: 2145,
    username: "john_chess_master",
  },
}

// Fee details
const feeDetails = {
  plan: "Club Player",
  monthlyFee: 149,
  nextDueDate: "January 15, 2025",
  status: "Paid",
  paymentHistory: [
    { month: "December 2024", amount: 149, status: "Paid", date: "Dec 1, 2024" },
    { month: "November 2024", amount: 149, status: "Paid", date: "Nov 1, 2024" },
    { month: "October 2024", amount: 149, status: "Paid", date: "Oct 1, 2024" },
    { month: "September 2024", amount: 149, status: "Paid", date: "Sep 1, 2024" },
  ],
}

// Session data with topics
const sessions = [
  {
    sessionNumber: 24,
    date: "Dec 20, 2024",
    duration: "1.5 hours",
    trainer: "GM Alexander Volkov",
    topics: ["Rook Endgames - Lucena Position", "Philidor Defense in Endgames"],
  },
  {
    sessionNumber: 23,
    date: "Dec 18, 2024",
    duration: "1 hour",
    trainer: "GM Alexander Volkov",
    topics: ["Italian Game - Giuoco Piano Variation"],
  },
  {
    sessionNumber: 22,
    date: "Dec 15, 2024",
    duration: "1.5 hours",
    trainer: "IM Sofia Martinez",
    topics: ["Tactical Patterns - Pins and Skewers", "Double Attack Combinations"],
  },
  {
    sessionNumber: 21,
    date: "Dec 13, 2024",
    duration: "1 hour",
    trainer: "GM Alexander Volkov",
    topics: ["Sicilian Defense - Najdorf Variation Basics"],
  },
  {
    sessionNumber: 20,
    date: "Dec 10, 2024",
    duration: "1.5 hours",
    trainer: "GM Marcus Thompson",
    topics: ["Middlegame Planning", "Pawn Structure Analysis"],
  },
]

// Topics learned (organized by category)
const topicsLearned = {
  openings: [
    { name: "Italian Game - Giuoco Piano", sessions: [23, 18, 12] },
    { name: "Sicilian Defense - Najdorf Variation", sessions: [21, 19] },
    { name: "Queen's Gambit Declined", sessions: [17, 15, 10] },
    { name: "Ruy Lopez - Morphy Defense", sessions: [14, 8] },
    { name: "Caro-Kann Defense", sessions: [6, 4] },
  ],
  middlegame: [
    { name: "Pawn Structure Analysis", sessions: [20, 16] },
    { name: "Piece Coordination", sessions: [19, 13] },
    { name: "King Safety Principles", sessions: [11, 7] },
    { name: "Attack on the King", sessions: [9] },
  ],
  endgame: [
    { name: "Rook Endgames - Lucena Position", sessions: [24] },
    { name: "Philidor Defense in Endgames", sessions: [24] },
    { name: "King and Pawn Endgames", sessions: [16, 5] },
    { name: "Bishop vs Knight Endgames", sessions: [3] },
  ],
  tactics: [
    { name: "Pins and Skewers", sessions: [22] },
    { name: "Double Attack Combinations", sessions: [22, 15] },
    { name: "Discovered Attacks", sessions: [13, 9] },
    { name: "Back Rank Tactics", sessions: [7, 2] },
  ],
}

// Tournament participations
const tournaments = [
  {
    name: "City Chess Championship 2024",
    date: "November 2024",
    location: "Downtown Chess Club",
    format: "Classical",
    result: "3rd Place",
    score: "5.5/7",
    ratingChange: "+24",
    positive: true,
  },
  {
    name: "Rapid Open Tournament",
    date: "October 2024",
    location: "Online - Chess.com",
    format: "Rapid",
    result: "Top 20",
    score: "6/9",
    ratingChange: "+15",
    positive: true,
  },
  {
    name: "Club Monthly Blitz",
    date: "September 2024",
    location: "Academy Club Room",
    format: "Blitz",
    result: "2nd Place",
    score: "8/10",
    ratingChange: "+32",
    positive: true,
  },
  {
    name: "State Junior Championship",
    date: "August 2024",
    location: "State Convention Center",
    format: "Classical",
    result: "8th Place",
    score: "4.5/7",
    ratingChange: "-8",
    positive: false,
  },
]

// Progress reports
const progressReports = [
  {
    period: "Q4 2024",
    overallProgress: 85,
    strengths: ["Opening Preparation", "Tactical Vision"],
    areasToImprove: ["Time Management", "Endgame Technique"],
    trainerNotes: "Excellent progress in tactical awareness. Focus on converting advantages in the endgame.",
  },
  {
    period: "Q3 2024",
    overallProgress: 72,
    strengths: ["Calculation", "Pattern Recognition"],
    areasToImprove: ["Opening Repertoire", "Positional Understanding"],
    trainerNotes: "Good foundation in tactics. Need to expand opening knowledge and improve strategic play.",
  },
]

export default function DashboardPage() {
  const totalSessions = sessions.length > 0 ? sessions[0].sessionNumber : 0

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
                  <span className="hidden sm:inline">{studentInfo.name}</span>
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
            Student Dashboard
          </h1>
          <p className="text-muted-foreground">
            Welcome back, {studentInfo.name}. Member since {studentInfo.joinDate}.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center justify-between mb-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  <span className="text-xs text-muted-foreground">FIDE</span>
                </div>
                <p className="text-2xl md:text-3xl font-bold">{ratings.fide.current}</p>
                <p className="text-sm text-muted-foreground">FIDE Rating</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className="w-5 h-5 text-emerald-500" />
                  <span className="text-xs text-muted-foreground">Chess.com</span>
                </div>
                <p className="text-2xl md:text-3xl font-bold">{ratings.chesscom.rapid}</p>
                <p className="text-sm text-muted-foreground">Rapid Rating</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center justify-between mb-2">
                  <BookOpen className="w-5 h-5 text-amber-500" />
                  <span className="text-xs text-muted-foreground">Total</span>
                </div>
                <p className="text-2xl md:text-3xl font-bold">{totalSessions}</p>
                <p className="text-sm text-muted-foreground">Sessions Taken</p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center justify-between mb-2">
                  <Medal className="w-5 h-5 text-rose-500" />
                  <span className="text-xs text-muted-foreground">2024</span>
                </div>
                <p className="text-2xl md:text-3xl font-bold">{tournaments.length}</p>
                <p className="text-sm text-muted-foreground">Tournaments</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Ratings Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-primary" />
                    Ratings
                  </CardTitle>
                  <CardDescription>Your official chess ratings across platforms</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* FIDE Rating */}
                    <div className="p-4 bg-secondary/30 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold">FIDE Rating</h4>
                        <Badge variant="outline">Official</Badge>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Current Rating</span>
                          <span className="font-bold text-xl">{ratings.fide.current}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Peak Rating</span>
                          <span className="font-medium">{ratings.fide.peak}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">FIDE ID</span>
                          <span className="font-mono text-sm">{ratings.fide.fideId}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Last Updated</span>
                          <span className="text-sm">{ratings.fide.lastUpdated}</span>
                        </div>
                      </div>
                    </div>

                    {/* Chess.com Rating */}
                    <div className="p-4 bg-secondary/30 rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold">Chess.com</h4>
                        <a 
                          href={`https://chess.com/member/${ratings.chesscom.username}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline text-sm flex items-center gap-1"
                        >
                          @{ratings.chesscom.username}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Rapid</span>
                          <span className="font-bold">{ratings.chesscom.rapid}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Blitz</span>
                          <span className="font-medium">{ratings.chesscom.blitz}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Bullet</span>
                          <span className="font-medium">{ratings.chesscom.bullet}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Puzzles</span>
                          <span className="font-medium text-emerald-500">{ratings.chesscom.puzzles}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Sessions & Topics Learned */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    Sessions & Topics Learned
                  </CardTitle>
                  <CardDescription>
                    Total sessions: {totalSessions} | Topics covered in each session
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-20">Session</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Duration</TableHead>
                          <TableHead>Trainer</TableHead>
                          <TableHead>Topics Covered</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {sessions.map((session) => (
                          <TableRow key={session.sessionNumber}>
                            <TableCell className="font-medium">#{session.sessionNumber}</TableCell>
                            <TableCell>{session.date}</TableCell>
                            <TableCell>{session.duration}</TableCell>
                            <TableCell className="text-muted-foreground">{session.trainer}</TableCell>
                            <TableCell>
                              <div className="flex flex-wrap gap-1">
                                {session.topics.map((topic, idx) => (
                                  <Badge key={idx} variant="secondary" className="text-xs">
                                    {topic}
                                  </Badge>
                                ))}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  <Button variant="ghost" className="w-full mt-4" size="sm">
                    View All Sessions
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Topics by Category */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    Topics Learned by Category
                  </CardTitle>
                  <CardDescription>All topics covered, organized by chess phase</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(topicsLearned).map(([category, topics]) => (
                      <div key={category} className="space-y-3">
                        <h4 className="font-semibold capitalize text-primary">
                          {category}
                        </h4>
                        <div className="space-y-2">
                          {topics.map((topic, idx) => (
                            <div 
                              key={idx} 
                              className="flex items-center justify-between p-2 bg-secondary/20 rounded-lg text-sm"
                            >
                              <span>{topic.name}</span>
                              <span className="text-xs text-muted-foreground">
                                Session{topic.sessions.length > 1 ? 's' : ''}: {topic.sessions.join(', ')}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Tournament Participations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Medal className="w-5 h-5 text-primary" />
                    Tournament Participations
                  </CardTitle>
                  <CardDescription>Your competitive chess history</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {tournaments.map((tournament, index) => (
                      <div 
                        key={index}
                        className="p-4 bg-secondary/30 rounded-lg"
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h4 className="font-semibold">{tournament.name}</h4>
                              <Badge variant="outline" className="text-xs">
                                {tournament.format}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {tournament.location} | {tournament.date}
                            </p>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="text-center">
                              <p className="text-sm text-muted-foreground">Result</p>
                              <p className="font-semibold">{tournament.result}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-sm text-muted-foreground">Score</p>
                              <p className="font-medium">{tournament.score}</p>
                            </div>
                            <div className="text-center">
                              <p className="text-sm text-muted-foreground">Rating</p>
                              <p className={`font-semibold ${tournament.positive ? 'text-emerald-500' : 'text-rose-500'}`}>
                                {tournament.ratingChange}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Progress Reports */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    Progress Reports
                  </CardTitle>
                  <CardDescription>Quarterly assessments from your trainers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {progressReports.map((report, index) => (
                      <div 
                        key={index}
                        className="p-4 bg-secondary/30 rounded-lg"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-semibold">{report.period}</h4>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Overall Progress:</span>
                            <span className="font-bold text-primary">{report.overallProgress}%</span>
                          </div>
                        </div>
                        <Progress value={report.overallProgress} className="h-2 mb-4" />
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-sm font-medium text-emerald-500 mb-2">Strengths</p>
                            <div className="flex flex-wrap gap-1">
                              {report.strengths.map((s, i) => (
                                <Badge key={i} className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20">
                                  {s}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-amber-500 mb-2">Areas to Improve</p>
                            <div className="flex flex-wrap gap-1">
                              {report.areasToImprove.map((a, i) => (
                                <Badge key={i} className="bg-amber-500/10 text-amber-500 hover:bg-amber-500/20">
                                  {a}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="p-3 bg-background/50 rounded-lg">
                          <p className="text-sm text-muted-foreground italic">
                            &quot;{report.trainerNotes}&quot;
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Fee Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-primary" />
                    Fee Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Current Plan</span>
                      <Badge className="bg-primary text-primary-foreground">{feeDetails.plan}</Badge>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Monthly Fee</span>
                      <span className="font-bold text-xl">${feeDetails.monthlyFee}</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Next Due Date</span>
                      <span className="font-medium">{feeDetails.nextDueDate}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Status</span>
                      <Badge className="bg-emerald-500/10 text-emerald-500">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        {feeDetails.status}
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3 text-sm">Payment History</h4>
                    <div className="space-y-2">
                      {feeDetails.paymentHistory.map((payment, index) => (
                        <div 
                          key={index}
                          className="flex items-center justify-between p-2 bg-secondary/30 rounded-lg text-sm"
                        >
                          <div>
                            <p className="font-medium">{payment.month}</p>
                            <p className="text-xs text-muted-foreground">{payment.date}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">${payment.amount}</span>
                            {payment.status === "Paid" ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            ) : (
                              <XCircle className="w-4 h-4 text-rose-500" />
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    View Full Billing History
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Session Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Session Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-6 bg-primary/10 rounded-lg">
                    <p className="text-4xl font-bold text-primary">{totalSessions}</p>
                    <p className="text-muted-foreground">Total Sessions</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-secondary/30 rounded-lg">
                      <p className="text-2xl font-bold">
                        {Object.values(topicsLearned).flat().length}
                      </p>
                      <p className="text-xs text-muted-foreground">Topics Covered</p>
                    </div>
                    <div className="text-center p-4 bg-secondary/30 rounded-lg">
                      <p className="text-2xl font-bold">3</p>
                      <p className="text-xs text-muted-foreground">Trainers</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">This Month</span>
                      <span className="font-medium">5 sessions</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">This Quarter</span>
                      <span className="font-medium">14 sessions</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Average/Month</span>
                      <span className="font-medium">4.8 sessions</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Upcoming Session */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-primary" />
                    Next Session
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-4 bg-primary/10 rounded-lg text-center">
                    <p className="text-sm text-muted-foreground mb-1">Session #25</p>
                    <p className="text-lg font-semibold mb-2">December 22, 2024</p>
                    <p className="text-2xl font-bold text-primary mb-2">3:00 PM</p>
                    <p className="text-sm text-muted-foreground">with GM Alexander Volkov</p>
                  </div>
                  <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                    Join Session
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}
