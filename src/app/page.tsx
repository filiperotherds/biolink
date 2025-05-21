import Image from "next/image";
import Link from "next/link";
import { ThemeSection } from "@/components/theme-section";
import { InteractiveProductView } from "@/components/interactive-product-view";
import { Header } from "@/components/header";
import { PartnersCarousel } from "@/components/partners-carousel";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center relative overflow-hidden">
        {/* Hero Section */}
        <section className="w-full max-w-5xl mx-auto px-4 pt-40 pb-12 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Gestão inteligente e sustentável para óleo usado
          </h1>
          <p className="text-xl md:text-xl font-light text-muted-foreground max-w-2xl mx-auto mb-8">
            Simplificamos o processo de coleta e reciclagem de óleo usado. Sua empresa em dia, sem complicações e sem custos.
          </p>
          <Link
            href="/cadastro"
            className="inline-flex h-[38px] items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Cadastre-se
          </Link>
        </section>

        {/* Partners Section */}
        <PartnersCarousel/>

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
          <div className="h-16">
            <div className="w-full h-full"></div>
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
          <div
            className="absolute inset-0 bg-zinc-100"
            style={{ zIndex: -1 }}
          ></div>
        </div>

        {/* Theme Section */}
        <ThemeSection />

        {/* Interactive Product View */}
        <InteractiveProductView />
      </main>
    </>
  );
}
