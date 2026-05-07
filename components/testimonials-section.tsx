"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Grandmaster Academy transformed my game. I went from 1200 to 1800 in just six months of training.",
    author: "Michael Chen",
    role: "Club Champion",
    rating: "1843 USCF",
  },
  {
    quote: "The personalized feedback from my trainer helped me identify weaknesses I never knew I had. Absolutely worth it.",
    author: "Sarah Williams",
    role: "Tournament Player",
    rating: "2100 FIDE",
  },
  {
    quote: "As a busy professional, the flexible scheduling and video lessons fit perfectly into my lifestyle.",
    author: "David Rodriguez",
    role: "Business Executive",
    rating: "1650 Chess.com",
  },
  {
    quote: "My daughter improved tremendously. The junior program is exceptional at keeping kids engaged while teaching real skills.",
    author: "Emma Thompson",
    role: "Parent",
    rating: "Daughter rated 1400",
  },
  {
    quote: "The opening repertoire course alone was worth the subscription. My opponents never know what hit them.",
    author: "James Park",
    role: "Online Player",
    rating: "2200 Lichess",
  },
  {
    quote: "Finally achieved my National Master title thanks to the GM-level training. Dreams do come true.",
    author: "Alexandra Novak",
    role: "National Master",
    rating: "2205 USCF",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">
            Stories from Our Students
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Join thousands of players who have elevated their game with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl border border-border relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
              <p className="text-foreground mb-6 leading-relaxed">
                {`"${testimonial.quote}"`}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {testimonial.author.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.rating}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
