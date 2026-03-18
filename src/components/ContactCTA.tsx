import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Lock } from "lucide-react"

const serviceOptions = [
  "Electrical",
  "Plumbing",
  "HVAC",
  "Landscaping",
  "Cleaning",
  "Other",
]

export function ContactCTA() {
  const [form, setForm] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    service: "",
    hasWebsite: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch("https://formspree.io/f/xvzwvnby", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-white/[0.02]">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-400 mb-6">
            Let's Talk
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to Get Online?<br />Let's Build Something.
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Tell us about your business and we'll reach out within 24 hours
            with a free website preview — no commitment required.
          </p>

          {submitted ? (
            <div className="inline-flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-6 py-4 text-green-400 font-medium">
              Thanks! We'll be in touch within 24 hours.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <input
                  type="text"
                  name="business"
                  required
                  placeholder="Business Name"
                  value={form.business}
                  onChange={handleChange}
                  className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>
              <select
                name="service"
                required
                value={form.service}
                onChange={handleChange}
                className="rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                <option value="" disabled>What service do you offer?</option>
                {serviceOptions.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
              <div className="rounded-xl border border-border bg-card px-4 py-3">
                <p className="text-sm text-muted-foreground mb-3">Do you currently have a website?</p>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                    <input
                      type="radio"
                      name="hasWebsite"
                      value="Yes"
                      checked={form.hasWebsite === "Yes"}
                      onChange={handleChange}
                      className="accent-white"
                    />
                    Yes
                  </label>
                  <label className="flex items-center gap-2 text-sm text-foreground cursor-pointer">
                    <input
                      type="radio"
                      name="hasWebsite"
                      value="No"
                      checked={form.hasWebsite === "No"}
                      onChange={handleChange}
                      className="accent-white"
                    />
                    No
                  </label>
                </div>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 text-white px-6 py-3 text-sm font-semibold hover:bg-blue-600 transition-colors disabled:opacity-60 mt-1"
              >
                {submitting ? "Sending…" : "Send My Free Preview Request"}
                {!submitting && <ArrowRight className="h-4 w-4" />}
              </button>
            </form>
          )}

          <p className="mt-5 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <Lock className="h-3 w-3" />
            We don't spam. Your info is only used to reach out about your project.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
