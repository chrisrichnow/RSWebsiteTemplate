import { motion, type Variants } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Bot, Zap, TrendingUp, Database } from "lucide-react"

const services = [
  {
    icon: Bot,
    title: "AI Chatbots & Assistants",
    description:
      "Deploy intelligent AI agents that handle customer service, qualify leads, and close sales — 24/7, without lifting a finger.",
    bullets: ["Custom-trained on your business", "Website & WhatsApp integration", "Lead capture & qualification", "Handoff to human agents"],
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description:
      "Eliminate manual work and human error with custom automation pipelines built on Make, Zapier, n8n, and AI.",
    bullets: ["End-to-end process automation", "Multi-app integrations", "Smart decision logic", "Real-time error monitoring"],
  },
  {
    icon: TrendingUp,
    title: "Google Ads & LSA Management",
    description:
      "Data-driven PPC and Local Service Ads that put your business in front of buyers at the exact moment they're ready to convert.",
    bullets: ["Search, Display & YouTube", "Google Guaranteed LSA setup", "AI-optimized bidding", "Full ROI reporting"],
  },
  {
    icon: Database,
    title: "CRM & Custom Software",
    description:
      "CRM integrations, custom web apps, and bespoke software built around your exact workflow — no off-the-shelf compromises.",
    bullets: ["HubSpot, GHL, Salesforce", "Custom web & mobile apps", "API integrations", "SaaS product development"],
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
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-muted-foreground mb-4">
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
              <Card className="h-full bg-card border-border hover:border-white/30 transition-colors duration-300">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/10">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
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
