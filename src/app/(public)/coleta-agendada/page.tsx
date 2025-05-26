"use client"

import { CalendarCheck, MapPin, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PartnersCarousel } from "@/components/partners-carousel"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  return (
    <div className="flex w-screen min-h-screen flex-col bg-white">
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="py-24 lg:py-32 text-center relative overflow-hidden bg-white">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
                Agende a coleta. <span className="text-green-600">A Biolink faz o resto.</span>
              </h1>
              <p className="mt-8 text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Simplificamos a gestão do óleo usado com coletas personalizadas para a rotina do seu negócio. Agende,
                acompanhe e receba tudo de forma gratuita e certificada.
              </p>
              <div className="mt-6">
                <Button
                  onClick={() => router.push("/signup")}
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 cursor-pointer"
                >
                  Cadastre-se
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-3 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl ring-1 ring-zinc-100 hover:ring-yellow-500 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-[1.015] cursor-pointer">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-400 uppercase tracking-wide group-hover:text-gray-500 transition-colors duration-300">
                      INFORMAÇÕES DE COLETA
                    </span>
                    <div className="p-2 bg-yellow-100 rounded-lg group-hover:bg-yellow-200 group-hover:scale-110 transition-all duration-300">
                      <CalendarCheck className="text-yellow-600 w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-yellow-600 transition-colors duration-300">
                    Horários flexíveis
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      As coletas são realizadas de segunda a sábado, das 7h às 18h, com agendamento personalizado para
                      sua operação.
                    </p>
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      <div className="p-3 bg-yellow-50 group-hover:bg-yellow-100 rounded-lg border border-yellow-200 transition-all duration-300">
                        <div className="text-sm text-gray-500 mb-1">Horário de funcionamento:</div>
                        <div className="text-lg font-semibold text-gray-900">Segunda a Sábado</div>
                        <div className="text-md text-gray-700">07:00 às 18:00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl ring-1 ring-zinc-100 hover:ring-blue-500 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-[1.015] cursor-pointer">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-400 uppercase tracking-wide group-hover:text-gray-500 transition-colors duration-300">
                      COBERTURA
                    </span>
                    <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
                      <MapPin className="text-blue-600 w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors duration-300">
                    Regiões atendidas
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      Atendemos a região de Campinas-SP
                    </p>
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 group-hover:bg-blue-100 text-blue-700 rounded-full text-sm font-medium border border-blue-200 transition-all duration-300">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        Campinas-SP
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl ring-1 ring-zinc-100 hover:ring-green-600 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-[1.015] cursor-pointer">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-gray-400 uppercase tracking-wide group-hover:text-gray-500 transition-colors duration-300">
                      CONTATO
                    </span>
                    <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
                      <Smartphone className="text-green-600 w-6 h-6 group-hover:animate-pulse" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-green-600 transition-colors duration-300">
                    Agende por WhatsApp
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      Agende sua coleta com facilidade pelo WhatsApp ou diretamente pelo nosso sistema.
                    </p>
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      <div className="p-3 bg-gray-50 group-hover:bg-green-50 rounded-lg border group-hover:border-green-200 transition-all duration-300">
                        <span className="text-lg font-bold text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                          (19) 99873-6188
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nossos Parceiros</h2>
              <p className="text-xl text-gray-600">Empresas que confiam na Biolink</p>
            </div>
            <div className="flex justify-center">
              <PartnersCarousel />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
