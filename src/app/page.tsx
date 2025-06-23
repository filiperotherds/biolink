"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="relative h-screen flex flex-col items-center overflow-hidden bg-[linear-gradient(to_top_right,rgba(61,61,61,0.5),transparent),url('/ocean-background.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute -top-[460px] -left-[680px] h-[1600px] w-[1600px] border-3 border-primary rounded-[120px] rotate-45 z-0"></div>
      <section className="h-[calc(100%-96px)] w-full mt-24 max-w-7xl flex flex-row gap-4 z-10">
        <div className="flex-1 gap-8 h-full flex flex-col items-start justify-center">
          <div className="py-1 px-4 flex items-center justify-center border-2 border-primary rounded-md">
            <span className="text-primary text-sm font-semibold">
              Economia Circular
            </span>
          </div>

          <h1 className="text-7xl text-white font-bold">
            Inteligência <br /> Ambiental
          </h1>

          <p className="text-lg font-medium text-white max-w-2xl">
            A Biolink traduz a complexidade do ESG em crescimento e valor para o
            seu negócio. Transformamos obrigações ambientais em oportunidades
            competitivas e lucrativas.
          </p>

          <Link
            href="/about"
            className="group h-12 w-64 flex items-center justify-center bg-transparent border border-white hover:border-white/70 hover:bg-transparent rounded-lg transition-all cursor-pointer"
          >
            <span className="text-lg text-white font-semibold group-hover:text-white/70 transition-all">
              Saiba Mais
            </span>
          </Link>
        </div>
        <div className="flex-1 h-full">
          <div className="absolute right-24 top-24 lg:right-48 lg:top-48">
            <span className="top-0 left-0 text-[192px] font-black bg-gradient-to-b from-white via-[#aedbe2] to-[#166c8c] bg-clip-text text-transparent">
              ESG
            </span>
          </div>
        </div>
      </section>

      <section></section>
    </main>
  );
}
