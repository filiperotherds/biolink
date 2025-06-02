"use client"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, FileText, BarChart3, Award } from "lucide-react"

export default function Certificates() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <Image src="/logo.svg" alt="Biolink" width={120} height={40} className="h-10 w-auto" />
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">Benefícios</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Sobre</a>
              <div className="relative group">
                <a href="#" className="text-gray-900 font-medium flex items-center gap-1">
                  Recursos
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 8.5L2 4.5H10L6 8.5Z" fill="currentColor" />
                  </svg>
                </a>
              </div>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden md:flex">Cadastre-se</Button>
            <Button className="bg-green-500 hover:bg-green-600 text-white">Entrar</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-green-100 text-green-800 mb-6 hover:bg-green-200">
              Sustentabilidade & Conformidade
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Certificados Ambientais e Fiscais</h1>
            <p className="text-xl text-gray-600 mb-8">
              Na Biolink, acreditamos que sustentabilidade e responsabilidade devem ser reconhecidas. Por isso,
              oferecemos certificados oficiais que comprovam a destinação correta do óleo de cozinha usado, agregando
              valor ambiental e fiscal à sua empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Certificates */}
      <section className="py-16 bg-zinc-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tipos de Certificados Emitidos</h2>
            <p className="text-gray-600">
              Documentação completa para atender às exigências ambientais e fiscais da sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <FileText className="text-green-600 h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Certificado de Destinação Final de Resíduos (CDF)</h3>
                <p className="text-gray-600">
                  Documento oficial que comprova que o óleo coletado foi corretamente reciclado, atendendo às normas
                  ambientais vigentes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <CheckCircle className="text-green-600 h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Certificado de Logística Reversa</h3>
                <p className="text-gray-600">
                  Requisitado por órgãos ambientais em processos de licenciamento, comprova a participação da sua
                  empresa em programas de logística reversa.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <BarChart3 className="text-green-600 h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Relatório Anual de Coletas</h3>
                <p className="text-gray-600">
                  Documento que resume as quantidades e datas das coletas ao longo do ano, ideal para relatórios de
                  sustentabilidade e prestação de contas.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-8">
                <div className="bg-green-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                  <Award className="text-green-600 h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Declaração para Abatimento Fiscal</h3>
                <p className="text-gray-600">
                  Documentação que pode ser utilizada para obtenção de benefícios fiscais ou créditos de carbono,
                  conforme legislação aplicável.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Como Funciona a Emissão</h2>
            <p className="text-gray-600">Processo simples e automatizado para garantir sua conformidade ambiental</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {["Coleta e Reciclagem", "Geração Automática", "Disponibilização"].map((title, idx) => (
              <div className="text-center" key={title}>
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <span className="text-green-600 text-2xl font-bold">{idx + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-600">
                  {idx === 0
                    ? "Após a coleta e reciclagem do óleo usado, todos os dados são processados em nosso sistema."
                    : idx === 1
                    ? "O certificado é gerado automaticamente no sistema, com todas as informações necessárias."
                    : "O documento fica disponível na plataforma e também pode ser enviado por e-mail para sua conveniência."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-zinc-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefícios para sua empresa</h2>
            <p className="text-gray-600">Vantagens competitivas e conformidade legal com nossos certificados</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              ["Cumprimento da legislação ambiental", "Esteja em conformidade com as normas ambientais vigentes e evite multas e sanções."],
              ["Vantagens em processos de licenciamento", "Facilite a obtenção e renovação de licenças ambientais com documentação adequada."],
              ["Possibilidade de incentivos fiscais", "Aproveite benefícios fiscais disponíveis para empresas com práticas sustentáveis."],
              ["Fortalecimento da imagem sustentável", "Melhore a reputação da sua marca com comprovação oficial de práticas ambientais."],
            ].map(([title, desc]) => (
              <div className="flex gap-4" key={title}>
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (Estilo gradiente replicado) */}
      <section className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <Card className="border-0 shadow-lg bg-gradient-to-r from-green-500 to-blue-600 text-white">
          <CardContent className="py-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Pronto para obter seus certificados?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Junte-se a centenas de empresas que já estão em conformidade ambiental e aproveitando benefícios fiscais com a Biolink.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Cadastre-se
              </button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
