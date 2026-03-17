import { motion, type Variants } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Code2, TrendingUp, MapPin } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Web apps, mobile apps, and automation tools built from scratch and tailored exactly to your business workflow.",
    bullets: ["Web & Mobile Apps", "Process Automation", "SaaS Platforms", "API Integrations"],
  },
  {
    icon: TrendingUp,
    title: "Google Ads Management",
    description:
      "Data-driven PPC campaigns that put your business in front of the right people and maximize your return on ad spend.",
    bullets: ["Search & Display Campaigns", "Keyword Research", "Conversion Tracking", "Monthly Reporting"],
  },
  {
    icon: MapPin,
    title: "Local Service Ads",
    description:
      "Verified Google LSA management to place your business at the very top of local search — above regular ads.",
    bullets: ["Google Guaranteed Badge", "Call Tracking", "Review Management", "Budget Optimization"],
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

export function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-muted-foreground mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Everything Your Business Needs
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            From building the software that runs your operations to the ads that
            fill your pipeline — we've got you covered.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={cardVariants}>
              <Card className="h-full bg-card border-border hover:border-white/30 transition-colors duration-300">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/60 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
