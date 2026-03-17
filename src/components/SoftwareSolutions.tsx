import { motion, type Variants } from "framer-motion"
import { MessageSquareMore, UserCheck, Mail, GitBranch } from "lucide-react"

const automations = [
  {
    icon: MessageSquareMore,
    title: "AI Chatbot Deployments",
    description:
      "Chatbots deployed on your website, app, or messaging platforms — answering questions and capturing leads around the clock.",
  },
  {
    icon: UserCheck,
    title: "Lead Qualification AI",
    description:
      "Automatically score and qualify inbound leads using AI, so your sales team only talks to prospects who are ready to buy.",
  },
  {
    icon: Mail,
    title: "Email & SMS Automation",
    description:
      "Intelligent follow-up sequences that nurture leads, re-engage past clients, and convert cold contacts — all on autopilot.",
  },
  {
    icon: GitBranch,
    title: "Process Workflow Bots",
    description:
      "Connect your tools, automate your processes, and eliminate manual data entry with multi-step AI workflows built for your exact business.",
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
              AI Automation
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              AI That Works
              <br />
              <span className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
                While You Sleep.
              </span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Stop trading hours for dollars. We build AI systems that handle
              your repetitive tasks, qualify your leads, and nurture your
              customers — freeing you to focus on what actually moves the needle.
            </p>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                Average 15+ hours saved per week per client
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                Deployments live within days, not months
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                Works with your existing tools and stack
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              Automate My Business
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
            {automations.map((a) => (
              <motion.div
                key={a.title}
                variants={itemVariants}
                className="rounded-xl border border-border bg-card p-5 hover:border-white/30 transition-colors duration-300"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                  <a.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
