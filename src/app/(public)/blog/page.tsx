import Image from "next/image";
import Link from "next/link";

const lateralArticles = [
  {
    id: "1",
    image: "/placeholder.svg",
    title: "Placeholder Title 1",
    date: "23 de Junho de 2025",
    author: "Filipe Rother",
    description: "A short placeholder description for first card.",
  },
  {
    id: "2",
    image: "/placeholder.svg",
    title: "Placeholder Title 2",
    date: "01 de Abril de 2025",
    author: "Isabella Gomes",
    description: "A short placeholder description for seccond card.",
  },
  {
    id: "3",
    image: "/placeholder.svg",
    title: "Placeholder Title 3",
    date: "13 de Maio de 2025",
    author: "Filipe Rother",
    description: "A short placeholder description for third card.",
  },
];

export default function Blog() {
  return (
    <main className="h-screen flex flex-col items-center overflow-hidden">
      <section className="h-full w-full mt-32 max-w-7xl flex flex-col gap-8">
        {/* Título Principal da Página */}
        <div className="flex flex-col items-start justify-start gap-1 mb-4">
          <h1 className="text-3xl font-extrabold text-[#3D3D3D] border-b-2 border-primary">
            Notícias
          </h1>
          <span className="text-sm text-muted-foreground">
            Mantenha-se informado sobre as tendências ambientais.
          </span>
        </div>

        <div className="flex flex-col w-full h-full justify-start items-start">
          <div className="w-full h-[480px] grid grid-cols-6 grid-rows-5 gap-4">
            {/* Seção para o artigo principal */}
            <div className="col-span-4 row-span-5">
              <Link
                href={"/blog"}
                className="group flex flex-col items-start justify-start"
              >
                <div className="relative w-full h-[340px] overflow-hidden rounded-2xl">
                  <Image
                    src={"/placeholder.svg"}
                    alt="Article Image"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Informações do Artigo Principal */}
                <div className="flex flex-col h-[120px] items-start py-4 gap-2">
                  {/* Data e Autoria */}
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
                    23 de Junho de 2025 • Nome Sobrenome
                  </span>

                  {/* Título */}
                  <h1 className="text-lg font-bold text-[#3D3D3D] group-hover:text-[#3D3D3D]/70 transition-colors">
                    Transformando a Gestão Ambiental em Vantagem Competitiva
                    para a Indústria Local
                  </h1>

                  {/* Breve Descrição */}
                  <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    Apresentamos uma nova abordagem à sustentabilidade: uma
                    consultoria que entende a realidade industrial de Rio Claro
                    e região, e usa a estratégia para converter conformidade
                    ambiental em crescimento, eficiência e novas oportunidades
                    de negócio.
                  </p>
                </div>
              </Link>
            </div>

            {/* Seção para Miniaturas de Artigos */}
            <div className="col-span-2 row-span-5 col-start-5">
              <div className="h-full w-full flex flex-col items-center gap-4">
                {lateralArticles.map((article) => (
                  <Link
                    href={`/blog/article/${article.id}`}
                    className="group flex-1 w-full flex flex-row bg-zinc-50 rounded-2xl p-2 gap-4 hover:bg-white transition-colors"
                  >
                    <div className="relative flex-shrink-0 h-full aspect-square overflow-hidden rounded-lg">
                      <Image
                        src={article.image}
                        alt="Article Image"
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="h-full w-auto flex flex-col items-start justify-between py-2">
                      <span className="text-xs font-medium text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">{`${article.date} • ${article.author}`}</span>

                      <h1 className="text-lg font-bold text-[#3D3D3D] group-hover:text-[#3D3D3D]/70 transition-colors">{article.title}</h1>

                      <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">{article.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
