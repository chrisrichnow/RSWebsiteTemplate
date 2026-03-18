export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-8">
          <div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              Richnow<span className="text-white/60">Solutions</span>
            </span>
            <p className="mt-2 text-sm text-muted-foreground max-w-xs">
              Helping local service businesses get online, get found, and get clients.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a
              href="https://linkedin.com/in/chrisrichnow"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/chrisrichnow"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="border-t border-border/40 pt-6">
          <p className="text-sm text-muted-foreground text-center">
            © 2025 Richnow Solutions. All rights reserved. | Houston, TX
          </p>
        </div>
      </div>
    </footer>
  )
}
