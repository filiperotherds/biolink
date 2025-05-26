import Link from "next/link";
import { PartnersCarousel } from "@/components/partners-carousel";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import FeatureSection from "@/components/feature-section";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center relative overflow-hidden gap-20">
        {/* Hero Section */}
        <section className="w-full max-w-5xl h-screen mx-auto px-4 pt-36 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Gestão inteligente de óleo usado, sem esforço e sem custo.
          </h1>
          <p className="text-lg md:text-xl font-light text-zinc-400 max-w-2xl mx-auto mb-8">
            Simplificamos o processo de coleta e reciclagem de óleo usado. Sua
            empresa em dia, sem complicações e sem custos.
          </p>
          <Link
            href="/signup"
            className="inline-flex h-[38px] items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Cadastre-se
          </Link>

          <div className="absolute bottom-20">
            {/* Partners Carousel */}
            <PartnersCarousel />
          </div>
        </section>

        {/* Feature Section */}
        <FeatureSection/>
      </main>
      <Footer />
    </>
  );
}
