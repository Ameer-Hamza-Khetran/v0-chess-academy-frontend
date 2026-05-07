"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Clock, BarChart, Lock, CheckCircle } from "lucide-react"
import Link from "next/link"

const categories = [
  { id: "all", label: "All Courses" },
  { id: "openings", label: "Openings" },
  { id: "middlegame", label: "Middlegame" },
  { id: "endgame", label: "Endgame" },
  { id: "tactics", label: "Tactics" },
]

const courses = [
  {
    id: 1,
    title: "The Italian Game Masterclass",
    instructor: "GM Alexander Volkov",
    category: "openings",
    level: "Intermediate",
    duration: "4h 30m",
    lessons: 24,
    progress: 65,
    locked: false,
    description: "Master the classical Italian Game with deep analysis of main lines and practical recommendations.",
  },
  {
    id: 2,
    title: "Attacking Chess Fundamentals",
    instructor: "GM Marcus Thompson",
    category: "middlegame",
    level: "Beginner",
    duration: "3h 15m",
    lessons: 18,
    progress: 100,
    locked: false,
    description: "Learn the essential attacking patterns that every chess player must know.",
  },
  {
    id: 3,
    title: "Rook Endgames Deep Dive",
    instructor: "GM Alexander Volkov",
    category: "endgame",
    level: "Advanced",
    duration: "6h 45m",
    lessons: 32,
    progress: 30,
    locked: false,
    description: "The most important endgame type explained with precision and practical examples.",
  },
  {
    id: 4,
    title: "Tactical Patterns Encyclopedia",
    instructor: "IM Sofia Martinez",
    category: "tactics",
    level: "All Levels",
    duration: "8h 20m",
    lessons: 50,
    progress: 0,
    locked: false,
    description: "Comprehensive coverage of all major tactical themes with 500+ puzzles.",
  },
  {
    id: 5,
    title: "The Sicilian Defense Complete",
    instructor: "IM Sofia Martinez",
    category: "openings",
    level: "Advanced",
    duration: "12h 00m",
    lessons: 64,
    progress: 0,
    locked: true,
    description: "Everything about the Sicilian Defense - from basics to cutting-edge theory.",
  },
  {
    id: 6,
    title: "Pawn Structure Mastery",
    instructor: "GM Alexander Volkov",
    category: "middlegame",
    level: "Intermediate",
    duration: "5h 30m",
    lessons: 28,
    progress: 0,
    locked: true,
    description: "Understand typical pawn structures and the plans that arise from them.",
  },
  {
    id: 7,
    title: "King Safety & Attack",
    instructor: "GM Marcus Thompson",
    category: "middlegame",
    level: "Intermediate",
    duration: "4h 00m",
    lessons: 22,
    progress: 45,
    locked: false,
    description: "Master the art of attacking the king while keeping your own king safe.",
  },
  {
    id: 8,
    title: "Essential Endgame Techniques",
    instructor: "WGM Anna Kowalski",
    category: "endgame",
    level: "Beginner",
    duration: "3h 00m",
    lessons: 16,
    progress: 0,
    locked: false,
    description: "The foundational endgame knowledge that every beginner needs to know.",
  },
]

function getLevelColor(level: string) {
  switch (level) {
    case "Beginner":
      return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
    case "Intermediate":
      return "bg-amber-500/10 text-amber-500 border-amber-500/20"
    case "Advanced":
      return "bg-rose-500/10 text-rose-500 border-rose-500/20"
    default:
      return "bg-primary/10 text-primary border-primary/20"
  }
}

export default function LessonsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Video Lesson Library
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Explore our comprehensive collection of courses taught by grandmasters 
              and titled players.
            </p>
          </motion.div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-secondary">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {courses
                    .filter((course) => category.id === "all" || course.category === category.id)
                    .map((course, index) => (
                      <motion.div
                        key={course.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className={`bg-card rounded-xl border border-border overflow-hidden group hover:border-primary/50 transition-all duration-300 ${
                          course.locked ? "opacity-75" : ""
                        }`}
                      >
                        <div className="aspect-video bg-secondary/50 relative overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            {course.locked ? (
                              <div className="w-14 h-14 bg-muted rounded-full flex items-center justify-center">
                                <Lock className="w-6 h-6 text-muted-foreground" />
                              </div>
                            ) : (
                              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Play className="w-6 h-6 text-primary-foreground ml-1" />
                              </div>
                            )}
                          </div>
                          {course.progress > 0 && !course.locked && (
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
                              <div 
                                className="h-full bg-primary transition-all duration-300"
                                style={{ width: `${course.progress}%` }}
                              />
                            </div>
                          )}
                          {course.progress === 100 && (
                            <div className="absolute top-3 right-3">
                              <CheckCircle className="w-6 h-6 text-emerald-500 fill-emerald-500" />
                            </div>
                          )}
                        </div>

                        <div className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className={getLevelColor(course.level)}>
                              {course.level}
                            </Badge>
                            {course.locked && (
                              <Badge variant="outline" className="bg-muted text-muted-foreground">
                                Pro
                              </Badge>
                            )}
                          </div>
                          
                          <h3 className="font-semibold mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                            {course.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            {course.instructor}
                          </p>

                          <p className="text-xs text-muted-foreground mb-4 line-clamp-2">
                            {course.description}
                          </p>

                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{course.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <BarChart className="w-3 h-3" />
                              <span>{course.lessons} lessons</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground mb-4">
              Want access to all courses and exclusive content?
            </p>
            <Link href="/pricing">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                View Pricing Plans
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
