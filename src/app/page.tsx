import Link from "next/link";
import { PartnersCarousel } from "@/components/partners-carousel";
import { Calendar, Clock, Clock2 } from "lucide-react";
import { Header } from "@/components/header";
import Footer from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import FeatureSection from "@/components/feature-section";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col items-center relative overflow-hidden gap-20">
        {/* Hero Section */}
        <section className="w-full max-w-5xl mx-auto px-4 pt-32 text-center relative z-10">
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
        </section>

        {/* Partners Section */}
        <PartnersCarousel />

        <section className="flex justify-center w-full px-4">
          <div className="flex flex-row max-w-5xl w-full items-center justify-center gap-4">
            <div className="group relative md:h-[400px] md:w-[300px] bg-white border border-zinc-200 rounded-2xl shadow-sm hover:shadow-lg hover:translate-y-[-16px] transition-all duration-300 cursor-pointer">
              <svg
                className="absolute right-0 top-4 text-zinc-300 group-hover:text-yellow-400"
                width="80"
                height="80"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="currentColor">
                  <polygon points="85,55 115,55 110,145 90,145" />

                  <g transform="rotate(60 100 100)">
                    <polygon points="85,55 115,55 110,145 90,145" />
                  </g>

                  <g transform="rotate(-60 100 100)">
                    <polygon points="85,55 115,55 110,145 90,145" />
                  </g>
                </g>
              </svg>
              <svg
                className="absolute bottom-0 right-0 rounded-br-xl text-zinc-400 group-hover:text-green-600"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  points="20,20 200,36 200,200 32,200"
                  fill="currentColor"
                />
              </svg>
              <div className="absolute top-8 left-8 space-y-2">
                <p className="text-sm text-zinc-400 font-light">
                  AGENDAMENTO E COLETA
                </p>
                <p className=" text-2xl font-bold">
                  Coleta <br /> <span className="">Sob Demanda</span>
                </p>
              </div>
              <div className="absolute w-full flex justify-end items-end bottom-0 space-y-4">
                <div className="relative h-60 w-4/5 border-t border-l rounded-tl-xl rounded-br-xl border-zinc-300 bg-white">
                  <div className="absolute top-6 left-6 w-full h-full flex flex-col items-start justify-start gap-3">
                    <div className="flex flex-row items-center justify-start gap-2">
                      <Calendar
                        size={18}
                        className="text-zinc-400"
                        strokeWidth={2.5}
                      />
                      <p className="text-sm text-zinc-400 font-medium">
                        Quinta-Feira
                      </p>
                    </div>
                    <p className="text-2xl font-bold">22 de maio</p>
                    <div className="flex flex-row items-center justify-start gap-2 pt-4">
                      <Clock
                        size={18}
                        className="text-zinc-400"
                        strokeWidth={2.5}
                      />
                      <p className="text-sm text-zinc-400 font-medium">
                        Horários Disponíveis
                      </p>
                    </div>
                    <div className="w-full flex flex-row items-center justify-start gap-2">
                      <div className="h-10 px-4 flex items-center justify-center border border-zinc-300 rounded-lg">
                        <p className="text-sm font-medium">08:00</p>
                      </div>
                      <div className="h-10 px-4 flex items-center justify-center border border-zinc-300 rounded-lg">
                        <p className="text-sm font-medium">09:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative md:h-[400px] md:w-[300px] bg-white border border-zinc-200 rounded-2xl shadow-sm hover:shadow-lg hover:translate-y-[-16px] transition-all duration-300 cursor-pointer">
              <svg
                className="absolute right-8 top-32 text-zinc-300 group-hover:text-green-600"
                width="80"
                height="80"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="rotate(45 100 100)">
                  <g fill="currentColor">
                    <g transform="translate(0,-40)">
                      <polygon points="94,100 108,100 115,36 83,44" />
                    </g>
                    <g transform="rotate(30 100 100) translate(0,-40)">
                      <polygon points="94,100 108,100 115,36 83,44" />
                    </g>
                    <g transform="rotate(-30 100 100) translate(0,-40)">
                      <polygon points="94,100 108,100 115,36 83,44" />
                    </g>
                  </g>
                </g>
              </svg>
              <svg
                className="absolute bottom-0 right-0 rounded-br-xl text-zinc-400 group-hover:text-yellow-400"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  points="20,100 200,80 200,200 32,200"
                  fill="currentColor"
                />
              </svg>
              <div className="absolute top-8 left-8 space-y-2">
                <p className="text-sm text-zinc-400 font-light">RECIPIENTES</p>
                <p className=" text-2xl font-bold">
                  Gestão do
                  <br />
                  Armazenamento
                </p>
              </div>
              <div className="absolute w-full flex flex-col items-start bottom-0 space-y-4">
                <div className="relative h-28 w-4/5 border-t border-r border-b rounded-tr-xl rounded-br-xl border-zinc-300 bg-white">
                  <div className="absolute w-full h-full flex flex-col items-start justify-between">
                    <div className="flex flex-row w-full pt-2 px-2 items-center justify-between">
                      <p className="text-sm font-semibold">Recipiente #37</p>
                      <div className="flex flex-row items-center gap-1 text-zinc-400">
                        <Clock2 size={16} />
                        <p className="text-xs font-semibold">16 dias</p>
                      </div>
                    </div>
                    <p className="text-xs text-zinc-400 px-2">
                      Bombona plástica homologada - 20 Litros
                    </p>
                    <div className="flex flex-row items-center justify-start pb-2 px-2">
                      <Badge>20 litros</Badge>
                    </div>
                  </div>
                </div>
                <div className="relative h-28 w-4/5 border-t border-r border-b rounded-tr-xl rounded-br-xl rounded-bl-xl border-zinc-300 bg-white">
                  <div className="absolute w-full h-full flex flex-col items-start justify-between">
                    <div className="flex flex-row w-full pt-2 px-2 items-center justify-between">
                      <p className="text-sm font-semibold">Recipiente #43</p>
                      <div className="flex flex-row items-center gap-1 text-zinc-400">
                        <Clock2 size={16} />
                        <p className="text-xs font-semibold">16 dias</p>
                      </div>
                    </div>
                    <p className="text-xs text-zinc-400 px-2">
                      Bombona plástica homologada - 20 Litros
                    </p>
                    <div className="flex flex-row items-center justify-start pb-2 px-2">
                      <Badge>20 litros</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-zinc-200 md:h-[400px] w-[320px] rounded-2xl shadow-sm hover:shadow-lg hover:translate-y-[-16px] transition-all duration-300">
              <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="currentColor">
                  <polygon points="60,40 88,35 92,165 62,160" />
                  <polygon points="112,30 140,38 135,162 107,155" />
                  <polygon points="35,70 165,65 158,90 45,95" />
                  <polygon points="43,110 163,105 153,130 38,135" />
                </g>
              </svg>
            </div>
          </div>
        </section>
        <FeatureSection/>
      </main>
      <Footer />
    </>
  );
}
