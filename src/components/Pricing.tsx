import { motion } from "framer-motion"
import PricingCard from "@/components/ui/pricing-card"

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-muted-foreground mb-4">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Pick the plan that fits your stage. Upgrade or cancel anytime — no
            lock-in contracts.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center"
        >
          <PricingCard />
        </motion.div>
      </div>
    </section>
  )
}
