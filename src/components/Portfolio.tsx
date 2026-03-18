import { motion, type Variants } from "framer-motion"
import { ArrowRight } from "lucide-react"

// ─── Individual site mockups ───────────────────────────────────────────────

function ElectricalMockup() {
  return (
    <div className="h-full bg-zinc-950 flex flex-col text-left select-none">
      <div className="bg-zinc-900 px-3 py-2 flex items-center justify-between shrink-0">
        <span className="text-yellow-400 font-bold text-[10px] tracking-tight">⚡ HOUSTON ELECTRIC</span>
        <div className="flex gap-3">
          {["Home", "Services", "Contact"].map((l) => (
            <span key={l} className="text-zinc-500 text-[8px]">{l}</span>
          ))}
        </div>
      </div>
      <div className="flex-1 bg-gradient-to-br from-zinc-900 to-zinc-950 px-4 py-3 flex flex-col justify-center">
        <div className="inline-block bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 text-[7px] px-2 py-0.5 rounded-full mb-2 w-fit">
          Licensed & Insured · Houston, TX
        </div>
        <div className="text-white font-bold text-base leading-tight mb-1">
          Reliable Electrical<br />
          <span className="text-yellow-400">Services</span> You Trust
        </div>
        <div className="text-zinc-500 text-[8px] mb-3">Panel upgrades · New installs · Repairs</div>
        <div className="bg-yellow-400 text-black text-[9px] font-bold px-3 py-1.5 rounded w-fit">
          Get a Free Quote →
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1 px-3 pb-3 shrink-0">
        {["Installation", "Repair", "Commercial"].map((s) => (
          <div key={s} className="bg-zinc-800 rounded-md px-1 py-2 text-center">
            <div className="text-yellow-400 text-[7px] font-semibold">{s}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function PlumbingMockup() {
  return (
    <div className="h-full flex flex-col text-left select-none">
      <div className="bg-white px-3 py-2 flex items-center justify-between shrink-0 border-b border-slate-100">
        <span className="text-blue-700 font-bold text-[10px]">💧 ClearFlow Plumbing</span>
        <div className="flex gap-3">
          {["Home", "Services", "Reviews"].map((l) => (
            <span key={l} className="text-slate-400 text-[8px]">{l}</span>
          ))}
        </div>
      </div>
      <div className="flex-1 bg-gradient-to-br from-blue-600 to-blue-800 px-4 py-3 flex flex-col justify-center">
        <div className="text-blue-200 text-[7px] mb-1.5">★★★★★ Rated · Available 24/7</div>
        <div className="text-white font-bold text-base leading-tight mb-1">
          Fast, Trusted<br />Plumbing Service
        </div>
        <div className="text-blue-200 text-[8px] mb-3">Houston & surrounding areas</div>
        <div className="bg-white text-blue-700 text-[9px] font-bold px-3 py-1.5 rounded w-fit">
          Call Now →
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1 px-3 pb-3 bg-slate-50 shrink-0 pt-2">
        {["Drain Cleaning", "Leak Repair", "Water Heaters", "Re-piping"].map((s) => (
          <div key={s} className="bg-white border border-slate-200 rounded-md px-2 py-1.5">
            <div className="text-blue-600 text-[7px] font-semibold">{s}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function HvacMockup() {
  return (
    <div className="h-full bg-slate-900 flex flex-col text-left select-none">
      <div className="bg-slate-800 px-3 py-2 flex items-center justify-between shrink-0">
        <span className="text-orange-400 font-bold text-[10px] tracking-tight">🔥 TEXAS HVAC</span>
        <div className="flex gap-3">
          {["Home", "Services", "Reviews"].map((l) => (
            <span key={l} className="text-slate-500 text-[8px]">{l}</span>
          ))}
        </div>
      </div>
      <div className="flex-1 bg-gradient-to-br from-orange-500 to-amber-600 px-4 py-3 flex flex-col justify-center">
        <div className="text-orange-100 text-[7px] mb-1.5">★★★★★ 200+ Google Reviews</div>
        <div className="text-white font-bold text-base leading-tight mb-1">
          Houston's #1<br />HVAC Experts
        </div>
        <div className="text-orange-100 text-[8px] mb-3">AC Repair · Install · Maintenance</div>
        <div className="bg-white text-orange-600 text-[9px] font-bold px-3 py-1.5 rounded w-fit">
          Schedule Service →
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1 px-3 pb-3 shrink-0">
        {["AC Repair", "Install", "Maintenance"].map((s) => (
          <div key={s} className="bg-slate-800 rounded-md px-1 py-2 text-center">
            <div className="text-orange-400 text-[7px] font-semibold">{s}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

function LandscapingMockup() {
  return (
    <div className="h-full flex flex-col text-left select-none">
      <div className="bg-green-800 px-3 py-2 flex items-center justify-between shrink-0">
        <span className="text-white font-bold text-[10px]">🌿 Green Scene</span>
        <div className="flex gap-3">
          {["Home", "Gallery", "Contact"].map((l) => (
            <span key={l} className="text-green-300 text-[8px]">{l}</span>
          ))}
        </div>
      </div>
      <div className="flex-1 bg-gradient-to-br from-green-600 to-teal-700 px-4 py-3 flex flex-col justify-center">
        <div className="text-green-200 text-[7px] mb-1.5">Serving Houston & Surrounding Areas</div>
        <div className="text-white font-bold text-base leading-tight mb-1">
          Lawn Care You<br />Can Count On
        </div>
        <div className="text-green-200 text-[8px] mb-3">Weekly · Bi-weekly · One-time</div>
        <div className="bg-white text-green-700 text-[9px] font-bold px-3 py-1.5 rounded w-fit">
          Free Estimate →
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1 px-3 pb-3 bg-green-50 shrink-0 pt-2">
        {["Lawn Mowing", "Landscaping", "Tree Trimming", "Irrigation"].map((s) => (
          <div key={s} className="bg-white border border-green-100 rounded-md px-2 py-1.5">
            <div className="text-green-700 text-[7px] font-semibold">{s}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Project data ──────────────────────────────────────────────────────────

const projects = [
  {
    name: "Houston Electric Pros",
    url: "houstonelectricpros.com",
    type: "Electrical Contractor",
    tags: ["5-Page Site", "Local SEO", "Lead Form"],
    accentColor: "group-hover:border-yellow-500/40",
    Mockup: ElectricalMockup,
  },
  {
    name: "Clear Flow Plumbing",
    url: "clearflowplumbing.com",
    type: "Plumbing Company",
    tags: ["3-Page Site", "Google Profile", "Mobile-First"],
    accentColor: "group-hover:border-blue-500/40",
    Mockup: PlumbingMockup,
  },
  {
    name: "Texas HVAC Solutions",
    url: "texashvacsolutions.com",
    type: "HVAC Contractor",
    tags: ["7-Page Site", "Lead Funnel", "SEO"],
    accentColor: "group-hover:border-orange-500/40",
    Mockup: HvacMockup,
  },
  {
    name: "Green Scene Landscaping",
    url: "greenscenelandscaping.com",
    type: "Landscaping Company",
    tags: ["5-Page Site", "Local SEO", "Gallery"],
    accentColor: "group-hover:border-green-500/40",
    Mockup: LandscapingMockup,
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } },
}

// ─── Component ────────────────────────────────────────────────────────────

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-400 mb-4">
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            The Kind of Sites We Build
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-lg">
            Every site is custom-built for a local service business — no templates,
            no shortcuts. Here's the quality and style you can expect.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={cardVariants}
              className={`group rounded-2xl overflow-hidden border border-border bg-card transition-all duration-300 ${project.accentColor}`}
            >
              {/* Browser chrome */}
              <div className="bg-zinc-800/70 px-3 py-2 flex items-center gap-2 shrink-0">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 bg-zinc-700/50 rounded text-[10px] text-zinc-400 px-2 py-0.5 truncate">
                  {project.url}
                </div>
              </div>

              {/* Site preview */}
              <div className="h-56 overflow-hidden">
                <project.Mockup />
              </div>

              {/* Card footer */}
              <div className="p-5 border-t border-border">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-sm text-foreground">{project.name}</h3>
                    <p className="text-xs text-muted-foreground">{project.type}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] bg-white/5 border border-border rounded-full px-2.5 py-0.5 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm mb-4">
            These are sample designs — more client work available on request.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
          >
            Your business could be next <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
