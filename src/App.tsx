import { Navbar } from "./components/Navbar"
import { SplineSceneBasic } from "./components/SplineDemo"
import { Services } from "./components/Services"
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

      {/* 1. 3D Hero (from components/1.txt) */}
      <section className="px-6 pt-8 pb-0">
        <div className="mx-auto max-w-7xl">
          <SplineSceneBasic />
        </div>
      </section>

      {/* 2. Services overview */}
      <Services />

      {/* 3. Software Solutions detail */}
      <SoftwareSolutions />

      {/* 4. Lead Generation detail */}
      <LeadGen />

      {/* 5. Animated Hero (from components/2.txt) */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <HeroSection />
        </div>
      </section>

      {/* 6. Pricing (from 5.txt) */}
      <Pricing />

      {/* 7. Contact CTA */}
      <ContactCTA />

      {/* 8. Footer */}
      <Footer />
    </div>
  )
}

export default App
