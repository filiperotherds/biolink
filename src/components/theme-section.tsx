"use client"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

export function ThemeSection() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  })

  return (
    <section ref={ref} className="w-full py-24 overflow-hidden bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
              Descarte seus <span className="text-primary">resíduos</span> com inteligência
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Nossa plataforma combina automação inteligente e análises avançadas para eliminar tarefas repetitivas e
              otimizar seus fluxos de trabalho. Liberte sua equipe para focar no que realmente importa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                Comece agora
              </button>
              <button className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium hover:bg-accent hover:text-accent-foreground">
                Saiba mais
              </button>
            </div>
          </div>
          <div
            className={`order-1 lg:order-2 transition-all duration-1000 transform ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="relative aspect-square max-w-md mx-auto lg:ml-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background rounded-full -z-10 blur-3xl transform scale-75 opacity-70"></div>
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/sapling_hands.png?height=600&width=600"
                  alt="Plataforma em ação"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}