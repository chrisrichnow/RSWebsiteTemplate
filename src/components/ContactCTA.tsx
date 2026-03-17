import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function ContactCTA() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-white/[0.02]">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-muted-foreground mb-6">
            Let's Talk
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Tell us about your project or goals — we'll reach out within 24 hours
            with a free consultation and custom strategy.
          </p>

          {submitted ? (
            <div className="inline-flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-6 py-4 text-green-400 font-medium">
              Thanks! We'll be in touch within 24 hours.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors whitespace-nowrap"
              >
                Get Started
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-muted-foreground">
            No spam. No commitment. Just a free conversation.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
