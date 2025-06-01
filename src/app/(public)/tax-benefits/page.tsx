"use client"
import Image from "next/image"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Award,
  Clock,
  FileText,
  Globe,
  ShieldCheck,
  TrendingUp,
  User,
  Users,
  Building,
} from "lucide-react"

export default function BeneficiosFiscais() {
  const beneficios = [
    {
      icon: TrendingUp,
      title: "Redução de Impostos",
      description: "Incentivos fiscais para empresas que adotam práticas sustentáveis.",
      colorClass: "bg-green-100 text-green-700 border-green-700 hover:border-green-700",
    },
    {
      icon: Award,
      title: "Créditos Tributários",
      description: "Compense impostos com créditos gerados pela reciclagem correta.",
      colorClass: "bg-blue-100 text-blue-700 border-blue-700 hover:border-blue-700",
    },
    {
      icon: FileText,
      title: "Certificados Oficiais",
      description: "Documentação válida para comprovação junto à Receita Federal e órgãos ambientais.",
      colorClass: "bg-purple-100 text-purple-700 border-purple-700 hover:border-purple-700",
    },
    {
      icon: Building,
      title: "Incentivos Municipais e Estaduais",
      description: "Parcerias que ampliam as vantagens fiscais.",
      colorClass: "bg-orange-100 text-orange-700 border-orange-700 hover:border-orange-700",
    },
    {
      icon: Users,
      title: "Melhoria da Imagem Corporativa",
      description: "Valor agregado para clientes e investidores conscientes.",
      colorClass: "bg-teal-100 text-teal-700 border-teal-700 hover:border-teal-700",
    },
    {
      icon: Globe,
      title: "Acesso a Novos Mercados",
      description: "Empresas sustentáveis ganham preferência em licitações públicas e internacionais.",
      colorClass: "bg-indigo-100 text-indigo-700 border-indigo-700 hover:border-indigo-700",
    },
    {
      icon: ShieldCheck,
      title: "Conformidade Legal Simplificada",
      description: "Facilidade na adequação às normas ambientais e fiscais vigentes.",
      colorClass: "bg-yellow-100 text-yellow-700 border-yellow-700 hover:border-yellow-700",
    },
    {
      icon: Clock,
      title: "Redução de Burocracia",
      description: "Processos otimizados para obtenção dos benefícios fiscais sem complicações.",
      colorClass: "bg-pink-100 text-pink-700 border-pink-700 hover:border-pink-700",
    },
    {
      icon: User,
      title: "Engajamento e Retenção de Talentos",
      description: "Ações sustentáveis atraem e fidelizam profissionais alinhados aos valores da empresa.",
      colorClass: "bg-cyan-100 text-cyan-700 border-cyan-700 hover:border-cyan-700",
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Seção de cabeçalho com imagem e texto */}
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texto */}
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-green-100 text-green-800 cursor-default">
                Sustentabilidade & Economia
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Benefícios Fiscais para o Seu Negócio
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Aproveite incentivos e descontos fiscais enquanto contribui para um mundo mais sustentável.
              </p>
            </div>

            {/* Imagem */}
            <div className="relative lg:mt-6">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/fundo_como.jpg"
                  alt="Instalação sustentável da Biolink com energia renovável e processamento de materiais"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-green-100">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700">Operação Sustentável</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Grid de Benefícios */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Vantagens Exclusivas</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra todos os benefícios que sua empresa pode obter ao adotar práticas sustentáveis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficios.map((beneficio, index) => {
            const Icon = beneficio.icon
            const borderColor = beneficio.colorClass
              .split(" ")
              .find((c) => c.startsWith("text-"))
              ?.replace("text-", "border-") ?? "border-green-700"

            return (
              <Card
                key={index}
                className={`group border border-zinc-100 hover:border-2 hover:${borderColor} transition-all duration-300 shadow-lg bg-white/80 backdrop-blur-sm hover:-translate-y-1 cursor-default`}
              >
                <CardHeader className="pb-4">
                  <div
                    className={`${beneficio.colorClass} w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="group-hover:text-green-600 transition-colors">
                    {beneficio.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{beneficio.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Seção de CTA */}
      <section className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <Card className="border-0 shadow-lg bg-gradient-to-r from-green-500 to-blue-600 text-white">
          <CardContent className="py-12">
            <h3 className="text-2xl font-bold mb-4">Pronto para Começar?</h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como sua empresa pode se beneficiar fiscalmente enquanto
              contribui para um planeta mais sustentável.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                onClick={() => alert("Entraremos em contato em breve!")}
              >
                Falar com Especialista
              </button>
              <button
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
                onClick={() => alert("Download iniciado!")}
              >
                Baixar Documentação
              </button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
