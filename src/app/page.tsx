import Link from "next/link";
import { InteractiveProductView } from "@/components/interactive-product-view";
import { PartnersCarousel } from "@/components/partners-carousel";
import { Calendar, Clock } from "lucide-react";
import { Header } from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
    <Header/>
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
            <div className="group relative md:h-[400px] md:w-[300px] bg-white border border-zinc-200 rounded-2xl shadow-sm hover:shadow-lg hover:translate-y-[-16px] transition-all duration-300 cursor-pointer">
              <div className="absolute top-8 left-8 space-y-2">
                <p className="text-sm text-zinc-400 font-light">
                  AGENDAMENTO E COLETA
                </p>
                <p className=" text-2xl font-bold">
                  Coleta <br /> <span className="group-hover:text-green-600">Sob Demanda</span>
                </p>
              </div>
              <div className="absolute w-full flex justify-end items-end bottom-0 space-y-4">
                <div className="relative h-60 w-4/5 border-t border-l rounded-tl-xl border-zinc-300">
                  <div className="absolute top-6 left-6 w-full h-full flex flex-col items-start justify-start gap-3">
                    <div className="flex flex-row items-center justify-start gap-2">
                      <Calendar size={18} className="text-zinc-400" strokeWidth={2.5}/>
                      <p className="text-sm text-zinc-400 font-medium">
                        Quinta-Feira
                      </p>
                    </div>
                    <p className="text-2xl font-bold">
                      22 de maio
                    </p>
                    <div className="flex flex-row items-center justify-start gap-2 pt-4">
                      <Clock size={18} className="text-zinc-400" strokeWidth={2.5}/>
                      <p className="text-sm text-zinc-400 font-medium">
                        Horários Disponíveis
                      </p>
                    </div>
                    <div className="w-full flex flex-row items-center justify-start gap-2">
                      <div className="h-10 px-4 flex items-center justify-center border border-zinc-300 rounded-lg">
                        <p className="text-sm font-medium">
                          08:00
                        </p>
                      </div>
                      <div className="h-10 px-4 flex items-center justify-center border border-zinc-300 rounded-lg">
                        <p className="text-sm font-medium">
                          09:00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border border-zinc-200 md:h-[400px] w-[320px] rounded-2xl shadow-sm hover:shadow-lg hover:translate-y-[-16px] transition-all duration-300"></div>
            <div className="bg-white border border-zinc-200 md:h-[400px] w-[320px] rounded-2xl shadow-sm hover:shadow-lg hover:translate-y-[-16px] transition-all duration-300"></div>
          </div>
        </section>

        {/* Interactive Product View */}
        <InteractiveProductView />
      </main>
      <Footer/>
    </>
  );
}
