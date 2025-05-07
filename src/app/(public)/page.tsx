import { Squircle } from "@squircle-js/react";
import { ArchiveRestore, Droplets, Flame, MapPinned, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full mx-auto bg-secondary pt-16">
      <section className="flex flex-row items-center justify-center w-4/5 h-[calc(100vh-64px)] gap-8">
        <div className="flex-1/2 flex flex-col items-start justify-center gap-8">
            <p className="text-7xl font-black text-start text-zinc-800 leading-tight">
            Do Óleo Vegetal
            <br />
            ao Biodiesel.
            </p>
          <p className="text-sm font-semibold text-start text-zinc-600">
            Armazenamento, coleta, tratamento e entrega do material na usina. Garantimos a gestão do ciclo de vida completo do óleo vegetal usado, contribuindo para a preservação do meio ambiente e transformando resíduos em oportunidades. 
          </p>
          <Link href="/">
            <Squircle
              cornerRadius={8}
              cornerSmoothing={1}
              className="flex items-center justify-center px-6 h-12 bg-green text-white font-bold hover:bg-light-green transition-all duration-200"
              >
              Seja Parceiro
            </Squircle>
          </Link>
        </div>
        <div className="flex-1/2 flex flex-col items-center justify-center">
          <div className="flex w-full h-[420px] justify-center items-center relative">
            <Image 
              src={'/gas_base.png'} 
              alt="BioLink Gas"
              fill
              style={{ objectFit: 'contain', objectPosition: 'right' }}
              priority
            />
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center w-full h-80 bg-white">
        <div className="flex flex-row items-start justify-between w-full max-w-[980px] py-12 gap-12">
          <div className="flex flex-col items-center justify-start w-64 gap-2">
            <MapPinned size={48} color="#3f3f46"/>
            <p className="text-center text-zinc-700 text-xl font-semibold">Recebimento do Óleo</p>
            <p className="text-[13px] text-center text-zinc-500">Concentramos os resíduos de óleo vegetal nos pontos de coleta e estabelecimentos parceiros</p>
          </div>
          <div className="flex flex-col items-center justify-start w-64 gap-2">
            <ArchiveRestore size={48} color="#3f3f46"/>
            <p className="text-center text-zinc-700 text-xl font-semibold">Coleta do Material</p>
            <p className="text-[13px] text-center text-zinc-500">Mapeamos e agendamos a coleta ordenada do material nos pontos que realizaram a solicitação</p>
          </div>
          <div className="flex flex-col items-center justify-start w-64 gap-2">
            <Truck size={48} color="#3f3f46"/>
            <p className="text-center text-zinc-700 text-xl font-semibold">Tratamento e Entrega</p>
            <p className="text-[13px] text-center text-zinc-500">Reunimos o óleo coletado, realizamos o tratamento conforme as especificações e entregamos nas usinas</p>
          </div>
        </div>
      </section>
      <section className="flex flex-row items-center justify-center w-full max-w-[980px] h-[calc(100vh-128px)]">
        <div className="flex-1/2 flex flex-col items-start justify-center gap-12">
          <div className="flex flex-col items-center justify-center w-80 gap-4">
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-col items-start justify-between h-full">
                <p className="font-bold text-zinc-700">
                  Contaminação Hídrica
                </p>
                <p className="text-[13px] text-zinc-500">
                  pelo descarte incorrto
                </p>
              </div>
              <Squircle
                cornerRadius={12}
                cornerSmoothing={1}
                className="flex items-center justify-center w-12 h-12 bg-green text-white font-bold hover:bg-light-green transition-all duration-200"
              >
                <Droplets/>
              </Squircle>
            </div>
            <p className="text-[13px] text-justify text-zinc-500">
              O descarte incorreto de 1 litro de óleo de cozinha pode levar à contaminação de até 25 mil litros de água, 
              sendo responsável por grande parcela da poluíção hídrica do país.
              <br />
              ​Em 2024, aproximadamente 1 bilhão de litros de óleo de cozinha foram descartados de forma inadequada no Brasil, 
              principalmente em pias, ralos e vasos sanitários.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-80 gap-4">
            <div className="flex flex-row items-center justify-between w-full">
              <Squircle
                cornerRadius={12}
                cornerSmoothing={1}
                className="flex items-center justify-center w-12 h-12 bg-green text-white font-bold hover:bg-light-green transition-all duration-200"
              >
                <Flame/>
              </Squircle>
              <div className="flex flex-col items-end justify-between h-full">
                <p className="font-bold text-zinc-700">
                  Emissão de Gases
                </p>
                <p className="text-[13px] text-zinc-500">
                  do efeito estufa
                </p>
              </div>
            </div>
            <p className="text-[13px] text-justify text-zinc-500">
            O uso do biodiesel pode reduzir significativamente a emissão de gases do efeito estufa,
            contribuindo para a mitigação das mudanças climáticas e a melhoria da qualidade do ar.
            <br />
            ​Em 2024, a produção nacional de biodiesel evitou a emissão de milhões de toneladas de dióxido de carbono (CO₂) na atmosfera,
            promovendo uma matriz energética mais limpa e sustentável.
            </p>
          </div>
        </div>
        <div className="flex-1/2 flex flex-col items-end justify-end">
            <div className="flex w-full h-[380px] justify-end items-end relative">
              <Image 
              src={'/sapling_hands.png'} 
              alt="Sapling Hands"
              fill
              style={{ objectFit: 'contain', objectPosition: 'right' }}
              priority
              />
            </div>
        </div>
      </section>
    </main>
  )
}