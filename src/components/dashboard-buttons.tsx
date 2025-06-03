"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function DashboardButtons() {
  const router = useRouter();
  function handleNavigate(path: string) {
    router.push(path);
  }

  return (
    <div className="w-full max-w-2xl gap-4 flex flex-col items-center justify-start">
      <h1 className="text-4xl text-center font-bold">
        Gerencie seus Resultados
      </h1>
      <p className="text-base text-center text-muted-foreground">
        Controle seus resultados de forma prática e eficiente, acompanhando seu
        progresso em tempo real. Tenha total controle para tomar decisões
        rápidas e eficientes.
      </p>
      <div className="flex flex-row gap-4 items-center justify-center">
        <Button
          variant="default"
          size="sm"
          className="bg-zinc-800 hover:bg-zinc-700 cursor-pointer"
          onClick={() => handleNavigate("/institution/colects")}
        >
          Minhas Coletas
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="cursor-pointer"
          onClick={() => handleNavigate("/institution/containers")}
        >
          Ver Recipientes
        </Button>
      </div>
    </div>
  );
}
