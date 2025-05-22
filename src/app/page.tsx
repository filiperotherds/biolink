import Link from "next/link";
import { InteractiveProductView } from "@/components/interactive-product-view";
import { PartnersCarousel } from "@/components/partners-carousel";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center relative overflow-hidden gap-20">
        {/* Hero Section */}
        <section className="w-full max-w-5xl mx-auto px-4 pt-36 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
            Gestão inteligente de óleo usado, sem esforço e sem custo.
          </h1>
          <p className="text-xl md:text-xl font-light text-zinc-400 max-w-2xl mx-auto mb-8">
            Simplificamos o processo de coleta e reciclagem de óleo usado. Sua
            empresa em dia, sem complicações e sem custos.
          </p>
          <Link
            href="/cadastro"
            className="inline-flex h-[38px] items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Cadastre-se
          </Link>
        </section>

        {/* Partners Section */}
        <PartnersCarousel />

        <section className="flex justify-center w-full px-4">
          <div className="flex flex-row max-w-5xl w-full items-center justify-center gap-4">
            <div className="bg-white border border-zinc-200 md:h-[400px] w-[320px] rounded-2xl shadow-sm hover:shadow-lg hover:translate-y-[-16px] transition-all duration-300">

            </div>
            <div className="bg-white border border-zinc-200 md:h-[400px] w-[320px] rounded-2xl shadow-sm hover:shadow-lg hover:translate-y-[-16px] transition-all duration-300">
              
            </div>
            <div className="bg-white border border-zinc-200 md:h-[400px] w-[320px] rounded-2xl shadow-sm hover:shadow-lg hover:translate-y-[-16px] transition-all duration-300">
              
            </div>
          </div>
        </section>

        {/* Interactive Product View */}
        <InteractiveProductView />
      </main>
    </>
  );
}
