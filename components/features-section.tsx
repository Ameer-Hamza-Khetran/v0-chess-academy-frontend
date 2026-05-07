"use client"

import { motion } from "framer-motion"
import { BookOpen, Users, Trophy, Video, Brain, Clock } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Structured Curriculum",
    description: "From beginner to grandmaster, follow a carefully crafted learning path.",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description: "Learn from titled players and international masters.",
  },
  {
    icon: Trophy,
    title: "Tournament Prep",
    description: "Get ready for competitive play with specialized training.",
  },
  {
    icon: Video,
    title: "Video Lessons",
    description: "High-quality video content with in-depth analysis.",
  },
  {
    icon: Brain,
    title: "Tactics Training",
    description: "Sharpen your skills with thousands of puzzles.",
  },
  {
    icon: Clock,
    title: "Learn at Your Pace",
    description: "Access lessons anytime, anywhere, on any device.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function FeaturesSection() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">
            Everything You Need to Excel
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Our comprehensive platform provides all the tools and resources for your chess journey.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
