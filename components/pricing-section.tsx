"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Beginner",
    price: 19,
    description: "Perfect for those just starting their chess journey",
    features: [
      "Access to beginner video library",
      "Basic tactics trainer",
      "Community forum access",
      "Weekly group lessons",
      "Progress tracking",
    ],
    popular: false,
  },
  {
    name: "Club Player",
    price: 49,
    description: "For serious players looking to improve",
    features: [
      "Full video library access",
      "Advanced tactics & puzzles",
      "Opening repertoire builder",
      "Monthly 1-on-1 session",
      "Tournament preparation",
      "Game analysis tools",
      "Priority support",
    ],
    popular: true,
  },
  {
    name: "Master",
    price: 149,
    description: "Intensive training for competitive players",
    features: [
      "Everything in Club Player",
      "Weekly GM sessions",
      "Personalized study plan",
      "Unlimited game reviews",
      "Private Discord channel",
      "Tournament coaching",
      "Endgame mastery course",
      "Direct trainer messaging",
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section className="py-24 px-6" id="pricing">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">
            Invest in Your Game
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Choose the plan that matches your ambitions. All plans include a 7-day free trial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border ${
                plan.popular
                  ? "bg-primary/5 border-primary"
                  : "bg-card border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/dashboard" className="block">
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  Start Free Trial
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
