import { motion, type Variants } from "framer-motion"
import { Palette, Search, Smartphone, Rocket } from "lucide-react"

const features = [
  {
    icon: Palette,
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-400",
    title: "Custom Web Design",
    description:
      "No templates, no drag-and-drop builders. Every site is hand-coded around your brand, your market, and your goals.",
  },
  {
    icon: Search,
    iconBg: "bg-green-500/15",
    iconColor: "text-green-400",
    title: "Google-Ready SEO",
    description:
      "On-page SEO is baked in from the start — so your site is ready to rank the moment it goes live.",
  },
  {
    icon: Smartphone,
    iconBg: "bg-orange-500/15",
    iconColor: "text-orange-400",
    title: "Mobile-First Build",
    description:
      "Over 70% of local searches happen on mobile. Every site we build looks and works perfectly on any device.",
  },
  {
    icon: Rocket,
    iconBg: "bg-purple-500/15",
    iconColor: "text-purple-400",
    title: "Fast Turnaround",
    description:
      "From kickoff to launch in 7–14 days. You get a real, professional website without the months-long wait.",
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

export function SoftwareSolutions() {
  return (
    <section id="solutions" className="py-24 px-6 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-400 mb-4">
              Web Development
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Your Business Deserves
              <br />
              <span className="bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
                a Website That Works.
              </span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Most service businesses lose customers every day because their
              online presence is outdated, missing, or impossible to find. We
              change that.
              <br /><br />
              We build clean, professional websites that are fast,
              mobile-friendly, and optimized to show up on Google — so when
              someone in your area searches for what you do, you're the one
              they call.
            </p>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                Custom design tailored to your brand and service area
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                Built for Google — on-page SEO included from day one
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                Delivered in 7–14 days, not months
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-blue-500 text-white px-6 py-3 text-sm font-semibold hover:bg-blue-600 transition-colors"
            >
              Get My Free Website Preview
            </a>
          </div>

          {/* Right: feature grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={itemVariants}
                className="rounded-xl border border-border bg-card p-5 hover:border-white/20 transition-colors duration-300"
              >
                <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg ${f.iconBg}`}>
                  <f.icon className={`h-5 w-5 ${f.iconColor}`} />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
