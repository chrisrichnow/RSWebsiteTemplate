import { motion, type Variants } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

export function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex min-h-[500px] flex-col items-center justify-center px-4 py-16 text-center"
    >
      <motion.div variants={itemVariants} className="mb-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-[var(--muted-foreground)]">
          <Zap className="h-4 w-4 text-yellow-400" />
          Growth & Automation Agency
        </span>
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="mb-6 text-5xl font-bold tracking-tight md:text-7xl"
      >
        Automate Everything.
        <br />
        <span className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
          Generate More Leads.
        </span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="mb-8 max-w-2xl text-lg text-[var(--foreground)]/70"
      >
        From automation and custom software to Google Ads and lead generation
        — RichnowCompany is the all-in-one growth partner for businesses
        ready to scale.
      </motion.p>

      <motion.div variants={itemVariants} className="flex gap-4">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 text-sm font-semibold transition-colors"
        >
          Start Growing Today
          <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href="#services"
          className="inline-flex items-center gap-2 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 text-sm font-semibold transition-colors"
        >
          Explore Services
        </a>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-12 flex items-center gap-8 text-sm text-[var(--foreground)]/60"
      >
        <div>
          <div className="text-2xl font-bold text-[var(--foreground)]">50+</div>
          <div>Clients</div>
        </div>
        <div className="h-8 w-px bg-[var(--border)]" />
        <div>
          <div className="text-2xl font-bold text-[var(--foreground)]">200+</div>
          <div>Automations Built</div>
        </div>
        <div className="h-8 w-px bg-[var(--border)]" />
        <div>
          <div className="text-2xl font-bold text-[var(--foreground)]">10×</div>
          <div>Avg. Lead Volume</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
