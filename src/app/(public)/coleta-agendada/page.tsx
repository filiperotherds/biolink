'use client';

import { CalendarCheck, MapPin, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PartnersCarousel } from "@/components/partners-carousel";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();

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
              <Button onClick={() => router.push('/signup')} size={'lg'}>Cadastre-se</Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-5xl flex justify-center">
                <PartnersCarousel />
             </div>
        </section>


        
      </main>

    </div>
  )
}
