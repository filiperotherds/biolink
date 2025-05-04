import PointList from "@/components/point_list"
import Image from "next/image"

export default async function PontosDeColeta() {
    
    return (
        <main className="flex flex-col items-center justify-center w-full mx-auto">
            <section className="flex flex-row items-center justify-center w-full max-w-[980px] pt-32 pb-16">
                <div className="flex-1/2 flex flex-col items-start justify-center gap-8">
                    <p className="text-4xl font-extrabold text-start text-zinc-800">
                        Encontre um ponto de coleta próximo a você.
                    </p>
                    <p className="text-sm font-semibold text-start text-zinc-400">
                        Disponibilizamos pontos de coleta estrategicamente localizados, facilitando o descarte correto do óleo vegetal usado por residências, comércios e instituições.
                        <br />
                        Contamos com parceiros comprometidos com a sustentabilidade, fortalecendo nossa rede e ampliando o impacto ambiental positivo.
                    </p>
                </div>
                <div className="flex-1/2 flex items-center justify-center">
                    <div className="flex w-full h-[280px] justify-center items-center relative">
                        <Image 
                            src={'/map_marker.png'} 
                            alt="BioLink Character"
                            fill
                            style={{ objectFit: 'contain', objectPosition: 'center' }}
                            priority
                        />
                    </div>
                </div>
            </section>
            <section className="flex flex-col items-start justify-start w-full max-w-[980px] gap-8 pb-16">
                <PointList/>
            </section>
        </main>
    )
}