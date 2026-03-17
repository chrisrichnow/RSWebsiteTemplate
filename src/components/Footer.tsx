export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Richnow<span className="text-white/60">Company</span>
          </span>
          <p className="mt-1 text-sm text-muted-foreground max-w-xs">
            Automation, lead generation, and software solutions for growing businesses.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#solutions" className="hover:text-foreground transition-colors">Solutions</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} RichnowCompany. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
