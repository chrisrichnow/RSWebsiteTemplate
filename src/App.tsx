import { Navbar } from "./components/Navbar"
import { SplineSceneBasic } from "./components/SplineDemo"
import { Services } from "./components/Services"
import { Portfolio } from "./components/Portfolio"
import { SoftwareSolutions } from "./components/SoftwareSolutions"
import { LeadGen } from "./components/LeadGen"
import { HeroSection } from "./components/ui/hero-section-shadcnui"
import { Pricing } from "./components/Pricing"
import { ContactCTA } from "./components/ContactCTA"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* 1. 3D Hero */}
      <section className="px-6 pt-8 pb-0">
        <div className="mx-auto max-w-7xl">
          <SplineSceneBasic />
        </div>
      </section>

      {/* 2. Services overview */}
      <Services />

      {/* 3. Portfolio showcase */}
      <Portfolio />

      {/* 4. Software Solutions detail */}
      <SoftwareSolutions />

      {/* 5. Lead Generation detail */}
      <LeadGen />

      {/* 6. Animated Hero */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <HeroSection />
        </div>
      </section>

      {/* 7. Pricing */}
      <Pricing />

      {/* 8. Contact CTA */}
      <ContactCTA />

      {/* 9. Footer */}
      <Footer />
    </div>
  )
}

export default App
