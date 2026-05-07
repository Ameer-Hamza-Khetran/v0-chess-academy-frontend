"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Trophy, Users, BookOpen, MessageCircle } from "lucide-react"
import Link from "next/link"

const trainers = [
  {
    name: "GM Alexander Volkov",
    title: "Grandmaster",
    rating: "2654 FIDE",
    country: "Russia",
    specialty: "Positional Play & Endgames",
    students: 450,
    lessons: 1200,
    bio: "Former World Junior Champion and Russian Championship finalist. 20+ years of coaching experience at the highest level.",
    achievements: ["World Junior Champion 2005", "Russian Championship Finalist", "Olympic Team Member"],
  },
  {
    name: "IM Sofia Martinez",
    title: "International Master",
    rating: "2485 FIDE",
    country: "Spain",
    specialty: "Opening Theory & Tactics",
    students: 320,
    lessons: 890,
    bio: "Spanish Women's Champion and renowned opening theorist. Known for creative and aggressive playing style.",
    achievements: ["Spanish Women's Champion", "European Team Bronze", "FIDE Trainer"],
  },
  {
    name: "GM Marcus Thompson",
    title: "Grandmaster",
    rating: "2589 FIDE",
    country: "USA",
    specialty: "Attack & Calculation",
    students: 280,
    lessons: 750,
    bio: "US Championship contender and popular chess streamer. Expert in dynamic positions and tactical complications.",
    achievements: ["US Championship Top 5", "100k+ Twitch Followers", "Author of 3 Chess Books"],
  },
  {
    name: "WGM Anna Kowalski",
    title: "Woman Grandmaster",
    rating: "2412 FIDE",
    country: "Poland",
    specialty: "Junior Development",
    students: 520,
    lessons: 1500,
    bio: "Dedicated youth coach who has trained multiple national junior champions. Specializes in making chess fun for kids.",
    achievements: ["Polish Women's Champion", "FIDE Senior Trainer", "Youth Coach of the Year"],
  },
  {
    name: "IM David Chen",
    title: "International Master",
    rating: "2510 FIDE",
    country: "China",
    specialty: "Strategic Planning",
    students: 190,
    lessons: 420,
    bio: "Former Chinese national team member with deep understanding of the Chinese chess school methodology.",
    achievements: ["Asian Games Gold", "Chinese League Champion", "National Team Coach"],
  },
  {
    name: "FM Elena Petrova",
    title: "FIDE Master",
    rating: "2350 FIDE",
    country: "Ukraine",
    specialty: "Beginner & Intermediate",
    students: 680,
    lessons: 2100,
    bio: "Patient and encouraging teacher who excels at helping beginners build strong foundations.",
    achievements: ["Ukrainian Women's Top 10", "Chess in Schools Ambassador", "Online Teacher Award"],
  },
]

export default function TrainersPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Learn from the Best
            </h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Our team of titled players and experienced coaches are here to guide you 
              on your journey to chess mastery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <motion.div
                key={trainer.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border overflow-hidden group hover:border-primary/50 transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-secondary/50 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-3xl font-serif font-bold text-primary">
                        {trainer.name.split(" ").slice(1).map(n => n[0]).join("")}
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {trainer.title}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <span className="text-sm font-medium">{trainer.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{trainer.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{trainer.specialty}</p>
                  
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {trainer.bio}
                  </p>

                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{trainer.students} students</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <BookOpen className="w-4 h-4" />
                      <span>{trainer.lessons} lessons</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {trainer.achievements.slice(0, 2).map((achievement) => (
                      <Badge key={achievement} variant="outline" className="text-xs">
                        <Trophy className="w-3 h-3 mr-1" />
                        {achievement}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Link href="/dashboard" className="flex-1">
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        Book Session
                      </Button>
                    </Link>
                    <Button variant="outline" size="icon">
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
