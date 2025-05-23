'use client';

import Image from "next/image"
import Link from "next/link"
import { Leaf, BarChart3, Clock, Shield, CalendarCheck, MapPin, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PartnersCarousel } from "@/components/partners-carousel";



export default function Home() {
  return (
    <div className="flex w-screen min-h-screen flex-col">
      

      <main className="flex-1 w-full items-center justify-center gap-1">
        <section className="py-20 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto">
              Agende a coleta. A Biolink faz o resto.
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
              Simplificamos a gestão do óleo usado com coletas personalizadas para a rotina do seu negócio. Agende, acompanhe e receba tudo de forma gratuita e certificada.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white border-t">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-3 gap-10 text-left">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CalendarCheck className="text-green-600 w-6 h-6" />
                  <h3 className="text-xl font-semibold">Horários flexíveis</h3>
                </div>
                <p className="text-gray-600">
                  As coletas são realizadas de segunda a sábado, das 7h às 18h, com agendamento personalizado para sua operação.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="text-green-600 w-6 h-6" />
                  <h3 className="text-xl font-semibold">Regiões atendidas</h3>
                </div>
                <p className="text-gray-600">
                  Atendemos a regiao de Campinas-SP
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Smartphone className="text-green-600 w-6 h-6" />
                  <h3 className="text-xl font-semibold">Agende por WhatsApp</h3>
                </div>
                <p className="text-gray-600">
                  Agende sua coleta com facilidade pelo WhatsApp no número <strong>(19) 99873-6188</strong> ou diretamente pelo nosso sistema.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button className="bg-green-500 hover:bg-green-600 px-8 py-6 text-lg">Agendar agora</Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-5xl flex justify-center">
                <PartnersCarousel />
             </div>
        </section>


        <section className="py-20 bg-green-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Pronto para transformar sua gestão ambiental?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Junte-se a centenas de empresas que já estão economizando recursos e reduzindo seu impacto ambiental.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-500 hover:bg-green-600 px-8 py-6 text-lg">Cadastre-se</Button>
              
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
