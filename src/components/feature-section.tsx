import { BadgeCheck, CalendarFold, SquareDashedMousePointer } from "lucide-react"
import Image from "next/image"

const features = [
  {
    name: 'Agendamento flexível.',
    description:
      'Você escolhe o dia e o horário ideais. Nós levamos o recipiente e cuidamos de toda a logística, sem custos.',
    icon: <CalendarFold size={22} className="text-green-600"/>,
  },
  {
    name: 'Dashboard intuitivo.',
    description: 'Visualize em um painel claro o volume coletado, metas atingidas e o impacto ambiental gerado, tudo em tempo real.',
    icon: <SquareDashedMousePointer size={22} className="text-green-600"/>,
  },
  {
    name: 'Certificado digital.',
    description: 'Receba comprovantes oficiais de reciclagem para atender obrigações legais e aproveitar incentivos fiscais.',
    icon: <BadgeCheck size={22} className="text-green-600"/>,
  },
]

export default function FeatureSection() {
  return (
    <div className="overflow-hidden bg-white pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-green-600">Descarte Inteligente</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Simplifique o ciclo do seu óleo
              </p>
              <p className="mt-6 text-base text-gray-500">
                Transforme o descarte de óleo usado em um gesto de cuidado com o meio-ambiente. Na Biolink, você agenda, acompanha e comprova cada etapa de forma totalmente gratuita e sem complicações.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base text-gray-500 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <div className="absolute top-0 left-1">
                        {feature.icon}
                      </div>
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            alt="Product screenshot"
            src="/placeholder.svg"
            width={2432}
            height={1442}
            className="w-2xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-194 md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}