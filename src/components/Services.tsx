import { motion, type Variants } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Monitor, MapPin, Target, Wrench } from "lucide-react"

const services = [
  {
    icon: Monitor,
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-400",
    title: "Website Design & Development",
    description:
      "Custom, conversion-focused websites built for service businesses. Mobile-first, fast-loading, and ready to rank on Google from day one.",
    bullets: ["Hand-coded, no page builders", "Mobile-first responsive design", "Fast load times & clean code", "Built to convert visitors to leads"],
  },
  {
    icon: MapPin,
    iconBg: "bg-green-500/15",
    iconColor: "text-green-400",
    title: "Local SEO & Google Presence",
    description:
      "Get found when customers search. We optimize your Google Business Profile, build local citations, and set up the technical foundation for long-term ranking.",
    bullets: ["Google Business Profile setup", "Local citation building", "On-page SEO from day one", "Technical SEO foundation"],
  },
  {
    icon: Target,
    iconBg: "bg-orange-500/15",
    iconColor: "text-orange-400",
    title: "Lead Generation Funnels",
    description:
      "Turn website visitors into booked appointments. We build landing pages, contact forms, and call-to-action flows designed to generate real, qualified leads.",
    bullets: ["High-converting landing pages", "Contact & booking forms", "CTA flow optimization", "Lead tracking & reporting"],
  },
  {
    icon: Wrench,
    iconBg: "bg-purple-500/15",
    iconColor: "text-purple-400",
    title: "Ongoing Support & Maintenance",
    description:
      "Your website should never be stale or broken. We handle updates, hosting, security, and performance so you can focus on running your business.",
    bullets: ["Regular content updates", "Security & uptime monitoring", "Performance optimization", "Priority support included"],
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
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
          <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-400 mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            One Agency. Every Growth Tool.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            We combine automation, lead generation, and custom software into
            a single, unified growth system for your business.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={cardVariants}>
              <Card className="h-full bg-card border-border hover:border-white/20 transition-colors duration-300">
                <CardHeader>
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${service.iconBg}`}>
                    <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400/60 flex-shrink-0" />
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
