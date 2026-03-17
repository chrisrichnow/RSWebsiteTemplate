import { motion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
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
          <Sparkles className="h-4 w-4" />
          Trusted by Growing Businesses
        </span>
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className="mb-6 text-5xl font-bold tracking-tight md:text-7xl"
      >
        Grow Your Business
        <br />
        <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
          with the Right Tech
        </span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="mb-8 max-w-2xl text-lg text-[var(--foreground)]/70"
      >
        From custom software development to Google Ads and Local Service Ads
        management — RichnowSolutions gives your business every tool it needs to
        scale.
      </motion.p>

      <motion.div variants={itemVariants} className="flex gap-4">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 text-sm font-medium transition-colors"
        >
          Get Started
          <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href="#pricing"
          className="inline-flex items-center gap-2 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 px-8 text-sm font-medium transition-colors"
        >
          View Pricing
        </a>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="mt-12 flex items-center gap-8 text-sm text-[var(--foreground)]/60"
      >
        <div>
          <div className="text-2xl font-bold text-[var(--foreground)]">
            50+
          </div>
          <div>Clients</div>
        </div>
        <div className="h-8 w-px bg-[var(--border)]" />
        <div>
          <div className="text-2xl font-bold text-[var(--foreground)]">100+</div>
          <div>Projects</div>
        </div>
        <div className="h-8 w-px bg-[var(--border)]" />
        <div>
          <div className="text-2xl font-bold text-[var(--foreground)]">
            3×
          </div>
          <div>Avg. ROI</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
