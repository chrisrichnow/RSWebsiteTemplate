'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"

export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-200">
            We Build the Systems
            <br />
            That Grow Your Business
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            Professional websites for electricians, plumbers, contractors, and
            service businesses across Houston.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-white text-black px-5 py-2.5 text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              Get a Free Strategy Call
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 text-white px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              See What We Do
            </a>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
