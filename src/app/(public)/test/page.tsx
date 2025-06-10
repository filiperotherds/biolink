import { Button } from "@/components/ui/button";

export default function Test() {
  return (
    <main className="w-full h-[calc(100vh-64px)] flex items-center justify-center p-8">
      <div className="flex items-center justify-start w-full h-full bg-cover bg-center bg-[url('/hero-background.jpg')] rounded-2xl">
        <div className="flex flex-col max-w-3xl p-16 gap-8 items-start justify-center">
          <h1 className="text-white md:text-4xl lg:text-6xl font-bold leading-16">
            Sempre no controle dos seus resíduos.
          </h1>
          <span className="text-[#EFF1EF] leading-relaxed">
            Simplificamos o processo de coleta e reciclagem de óleo usado.
            <br />
            Sua empresa em dia, sem complicações e sem custos.
          </span>
          <Button variant="secondary" className="h-12 px-6 cursor-pointer">
            Cadastre-se
          </Button>
        </div>
      </div>
    </main>
  );
}
