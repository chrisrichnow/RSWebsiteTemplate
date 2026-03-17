import { motion, type Variants } from "framer-motion"
import { Globe, Smartphone, Zap, LayoutDashboard } from "lucide-react"

const solutions = [
  {
    icon: Globe,
    title: "Web Applications",
    description:
      "Full-stack web apps built with modern frameworks — fast, secure, and designed to scale as your business grows.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "iOS and Android apps that deliver seamless experiences and keep your customers engaged on every device.",
  },
  {
    icon: Zap,
    title: "Business Automation",
    description:
      "Eliminate repetitive tasks with custom automation. Save hours every week and reduce costly manual errors.",
  },
  {
    icon: LayoutDashboard,
    title: "SaaS Platforms",
    description:
      "End-to-end SaaS product development — from MVP to production-ready platform with billing and user management.",
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
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-muted-foreground mb-4">
              Software Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Any Software.
              <br />
              <span className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
                Built for Your Business.
              </span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We don't use templates or off-the-shelf products. Every solution is
              engineered specifically for how your business operates — giving you
              a genuine competitive advantage.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              Discuss Your Project
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
            {solutions.map((s) => (
              <motion.div
                key={s.title}
                variants={itemVariants}
                className="rounded-xl border border-border bg-card p-5 hover:border-white/30 transition-colors duration-300"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                  <s.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
