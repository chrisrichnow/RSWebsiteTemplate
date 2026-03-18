import { motion, type Variants } from "framer-motion"
import { CheckCircle } from "lucide-react"

const googleAdsFeatures = [
  "Search, Display & YouTube campaigns",
  "Deep keyword research & smart negative lists",
  "Conversion-focused ad copy & A/B testing",
  "Full conversion tracking & attribution",
  "Monthly performance reports & strategy calls",
  "Landing page audit & recommendations",
]

const lsaFeatures = [
  "Google Guaranteed & Screened badge setup",
  "Profile optimization for maximum local visibility",
  "Bid management & budget optimization",
  "Lead dispute & credit recovery management",
  "Review generation & response handling",
  "Competitor analysis & positioning reports",
]

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
}

export function LeadGen() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-muted-foreground mb-4">
            Lead Generation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            More Leads. Less Wasted Spend.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            We build the web presence. You handle the work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Google Ads */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-2xl border border-border bg-card p-8"
          >
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 rounded-lg bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-sm font-medium text-blue-400 mb-4">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                Google Ads
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Google Ads Management
              </h3>
              <p className="text-muted-foreground">
                We build and manage campaigns that reach your ideal customers at
                the exact moment they're searching — driving qualified traffic
                that converts into real business.
              </p>
            </div>
            <ul className="space-y-3">
              {googleAdsFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-white/10 transition-colors"
              >
                Launch a Campaign
              </a>
            </div>
          </motion.div>

          {/* LSA */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15 }}
            className="rounded-2xl border border-border bg-card p-8"
          >
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 rounded-lg bg-green-500/10 border border-green-500/20 px-3 py-1 text-sm font-medium text-green-400 mb-4">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                Local Service Ads
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Dominate Local Search
              </h3>
              <p className="text-muted-foreground">
                Local Service Ads appear above everything else in search — above
                regular ads, above maps. We handle your entire LSA presence so
                you capture every local lead before your competitors do.
              </p>
            </div>
            <ul className="space-y-3">
              {lsaFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-white/10 transition-colors"
              >
                Get to the Top of Local Search
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
