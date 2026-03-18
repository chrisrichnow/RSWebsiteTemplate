import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$499",
    billing: "one-time",
    bestFor: "Brand-new businesses that need a clean, professional online presence",
    features: [
      "3-page website (Home, About, Contact)",
      "Mobile-friendly design",
      "Contact form",
      "Basic on-page SEO",
      "30-day support",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$799",
    billing: "one-time",
    bestFor: "Established businesses ready to compete locally and generate leads",
    features: [
      "Everything in Starter",
      "5-page website",
      "Google Business Profile setup",
      "Local SEO optimization",
      "60-day support",
    ],
    cta: "Get Started",
    highlight: true,
    badge: "Most Popular ⭐",
  },
  {
    name: "Pro",
    price: "$1,299",
    billing: "one-time",
    bestFor: "Businesses serious about dominating their local market",
    features: [
      "Everything in Growth",
      "7+ page website",
      "Custom lead generation funnel",
      "Advanced on-page + local SEO",
      "90-day support + 1 revision round",
      "Monthly performance report",
    ],
    cta: "Let's Talk",
    highlight: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-400 mb-4">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Pick the plan that fits your stage. No lock-in contracts, no hidden fees.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.highlight
                  ? "border-blue-500/50 bg-blue-500/[0.07]"
                  : "border-border bg-card"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-block rounded-full bg-blue-500 text-white text-xs font-bold px-4 py-1 whitespace-nowrap">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-1 ${plan.highlight ? "text-blue-300" : ""}`}>
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.bestFor}</p>
                <div className="flex items-end gap-1">
                  <span className={`text-4xl font-bold ${plan.highlight ? "text-blue-300" : ""}`}>
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm mb-1">{plan.billing}</span>
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle className={`h-4 w-4 flex-shrink-0 mt-0.5 ${plan.highlight ? "text-blue-400" : "text-green-400"}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-colors ${
                  plan.highlight
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "border border-white/20 text-foreground hover:bg-white/10"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </motion.div>

        <p className="text-center mt-8 text-sm text-muted-foreground">
          Need ongoing help?{" "}
          <span className="text-blue-400 font-medium">
            Maintenance & hosting support starting at $79/mo
          </span>{" "}
          — add it to any plan.
        </p>
      </div>
    </section>
  )
}
