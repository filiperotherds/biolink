"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Shield,
  Award,
  TrendingUp,
  Leaf,
  BarChart3,
  Headphones,
  Gift,
  Droplets,
  Trash2,
  Recycle,
  Users,
  GraduationCap,
  Star,
} from "lucide-react"

export default function BenefitsSection() {
  const benefits = [
    { icon: Calendar, title: "Coleta gratuita e agendada", description: "Você escolhe o melhor dia, e nós buscamos o óleo usado no seu restaurante ou cozinha industrial." },
    { icon: Shield, title: "Gestão completa sem custo", description: "Fornecemos os recipientes, organizamos os dados e cuidamos de toda a logística sem cobrar nada." },
    { icon: Award, title: "Certificados de destinação", description: "Receba laudos e certificados para comprovar a destinação correta do óleo — ótimo para auditorias e transparência ESG." },
    { icon: TrendingUp, title: "Incentivos fiscais", description: "Empresas parceiras podem obter benefícios fiscais por colaborar com práticas sustentáveis." },
    { icon: Leaf, title: "Selo de sustentabilidade", description: "Mostre aos seus clientes que sua empresa apoia práticas ambientais. Oferecemos um selo personalizado para o seu estabelecimento." },
    { icon: BarChart3, title: "Portal de controle e histórico", description: "Acompanhe coletas, volume reciclado e histórico completo por um sistema simples e acessível." },
    { icon: Headphones, title: "Atendimento personalizado", description: "Equipe disponível para resolver dúvidas, agendar visitas e atender demandas especiais." },
    { icon: Gift, title: "Gameficação e recompensas", description: "Acumule pontos por boas práticas e troque por brindes, destaque nas redes sociais ou descontos com parceiros.", badge: "Em breve" },
  ]

  const environmentalImpacts = [
    { icon: Droplets, title: "Proteção da água", description: "1 litro de óleo descartado corretamente evita a contaminação de até 25 mil litros de água." },
    { icon: Trash2, title: "Redução de problemas urbanos", description: "Redução de pragas urbanas e entupimentos." },
    { icon: Recycle, title: "Reaproveitamento sustentável", description: "Reaproveitamento na indústria de biocombustíveis e sabões." },
  ]

  const socialProof = [
    { icon: Users, title: "+100 parceiros atendidos", description: "no primeiro ano" },
    { icon: GraduationCap, title: "Parcerias estratégicas", description: "com universidades e redes de fast-food" },
    { icon: Star, title: "Feedback positivo", description: "de empresas que reduziram custos e melhoraram sua imagem" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">biolink</span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-900 font-medium border-b-2 border-green-500 pb-4">Benefícios</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 pb-4">Sobre</a>
                <a href="#" className="text-gray-600 hover:text-gray-900 pb-4 flex items-center">
                  Recursos
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-gray-900">Cadastre-se</button>
              <Button className="bg-green-500 hover:bg-green-600 text-white">Entrar</Button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transformamos seu resíduo em <span className="text-green-500">impacto positivo</span>. Sem complicações.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Simplificamos o processo de coleta e reciclagem de óleo usado. Sua empresa em dia, sem complicações e sem custos.
          </p>
          <Button className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-3">
            Cadastre-se
          </Button>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Benefícios principais</h2>
            <p className="text-xl text-gray-600">Tudo que você precisa para uma gestão sustentável e eficiente</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card
                  key={index}
                  className="group border-0 shadow-sm hover:shadow-xl hover:scale-[1.015] transition-all duration-300 cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                          <Icon className="w-6 h-6 text-green-600 group-hover:text-green-700" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                            {benefit.title}
                          </h3>
                          {benefit.badge && (
                            <Badge variant="secondary" className="text-xs">
                              {benefit.badge}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Recycle className="w-8 h-8 text-green-500" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Impacto ambiental</h2>
            </div>
            <p className="text-xl text-gray-600">Cada ação conta para um futuro mais sustentável</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {environmentalImpacts.map((impact, index) => {
              const Icon = impact.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{impact.title}</h3>
                  <p className="text-gray-600">{impact.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

    </div>
  )
}
