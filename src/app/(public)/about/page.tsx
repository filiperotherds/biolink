"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Recycle, Target, Eye, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";  // Importa o hook useRouter

export default function AboutPage() {
  const router = useRouter(); // Usando o useRouter para navegação programática

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <Recycle className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">biolink</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/beneficios" className="text-gray-600 hover:text-gray-900">Benefícios</Link>
              <Link href="/sobre" className="text-gray-900 font-medium">Sobre</Link>
              <Link href="/recursos" className="text-gray-600 hover:text-gray-900">Recursos</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/cadastro" className="text-gray-600 hover:text-gray-900">Cadastre-se</Link>
              <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg">Entrar</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Quem Somos */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">Quem Somos</h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                A Biolink é uma startup que acredita que pequenas atitudes geram grandes impactos. Conectamos empresas e instituições a um sistema inteligente e sustentável de coleta de óleo de cozinha usado, com logística gratuita, certificações ambientais e benefícios fiscais. Mais do que uma empresa de coleta, somos um elo entre responsabilidade e transformação. Com tecnologia, empatia e compromisso, transformamos resíduos em oportunidades para você, para sua empresa e para o planeta.
              </p>
            </div>
            <div className="w-full h-full flex items-center">
              <div className="relative aspect-[4/3] w-full max-w-[600px]">
                <Image
                  src="/quem-somos.jpg"
                  alt="Quem Somos"
                  fill
                  className="rounded-xl shadow-md object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="py-16 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border hover:border-green-500 cursor-pointer transition-all shadow-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Missão</h3>
                <p className="text-gray-600 leading-relaxed">
                  Facilitar a logística reversa do óleo usado com responsabilidade ambiental, incentivo à economia circular e valorização dos parceiros.
                </p>
              </CardContent>
            </Card>

            <Card className="border hover:border-blue-500 cursor-pointer transition-all shadow-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Visão</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ser referência nacional em soluções sustentáveis para o descarte de resíduos orgânicos, promovendo impacto positivo nas comunidades.
                </p>
              </CardContent>
            </Card>

            <Card className="border hover:border-purple-500 cursor-pointer transition-all shadow-sm">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Valores</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gray-100 text-gray-700">Sustentabilidade</Badge>
                  <Badge className="bg-gray-100 text-gray-700">Simplicidade</Badge>
                  <Badge className="bg-gray-100 text-gray-700">Conexão</Badge>
                  <Badge className="bg-gray-100 text-gray-700">Comprometimento</Badge>
                  <Badge className="bg-gray-100 text-gray-700">Ética</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Compromisso com o Meio Ambiente */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-green-100 text-green-700 mb-4">Sustentabilidade & Economia</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Compromisso com o meio ambiente</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                A cada litro de óleo reciclado, evitamos a contaminação de milhares de litros de água. Juntos, transformamos resíduos em responsabilidade.
              </p>
            </div>
            <div className="relative w-full">
              <Image
                src="/compromisso.jpg"
                alt="Compromisso com o meio ambiente"
                width={500}
                height={400}
                className="rounded-xl shadow-md w-full h-auto object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-3 py-1 rounded-md shadow">
                <span className="text-sm font-medium text-gray-900">Operação Sustentável</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action (gradiente azul/verde replicado) */}
      <section className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <Card className="border-0 shadow-lg bg-gradient-to-r from-green-500 to-blue-600 text-white">
          <CardContent className="py-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Pronto para fazer a diferença?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Junte-se a nós na construção de um futuro mais sustentável. Seja nosso parceiro e transforme seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                onClick={() => router.push("/signup")} // Redireciona para a página de login
              >
                Cadastre-se
              </button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

