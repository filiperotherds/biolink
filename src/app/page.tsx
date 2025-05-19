import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { ThemeSection } from "@/components/theme-section"
import { InteractiveProductView } from "@/components/interactive-product-view"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen flex flex-col items-center relative overflow-hidden">
        {/* Hero Section */}
        <section className="w-full max-w-5xl mx-auto px-4 pt-32 pb-12 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">Streamline Your Workflow</h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
            The all-in-one platform that helps teams build better products, faster.
          </p>
          <Link
            href="#get-started"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Get Started
          </Link>
        </section>

        {/* Image Section with Semi-circle Background */}
        <section className="w-full relative">
          <div className="semi-circle-bg"></div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 py-12">
            <div className="w-full aspect-video relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=720&width=1280"
                alt="Platform dashboard"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Subtle transition to partners section */}
          <div className="h-16 mt-8">
            <div className="w-full h-full bg-gradient-to-b from-transparent to-zinc-100"></div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="w-full bg-zinc-100 py-24 relative z-10">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Trusted by innovative teams worldwide</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-16 bg-white/80 rounded-md flex items-center justify-center shadow-sm">
                  <span className="text-muted-foreground">Logo {i}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wave Transition between Partners and Theme Section */}
        <div className="w-full relative z-10" style={{ marginTop: "-1px" }}>
          <svg
            className="w-full h-24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,32L80,37.3C160,43,320,53,480,53.3C640,53,800,43,960,42.7C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
              style={{ fill: "#ffffff" }}
            ></path>
          </svg>
          <div className="absolute inset-0 bg-zinc-100" style={{ zIndex: -1 }}></div>
        </div>

        {/* Theme Section */}
        <ThemeSection />

        {/* Interactive Product View */}
        <InteractiveProductView />
      </main>
    </>
  )
}
