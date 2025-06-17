"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Test() {
  const router = useRouter();

  const handleSignup = () => {
    router.push("/signup");
  };

  return (
    <main className="relative h-screen flex flex-col items-center overflow-hidden bg-[linear-gradient(to_top_right,rgba(61,61,61,0.5),transparent),url('/ocean-background.jpg')] bg-cover bg-center bg-no-repeat">
      <section className="h-[calc(100%-96px)] w-full mt-24 max-w-7xl flex flex-row gap-4">
        <div className="flex-1 gap-8 h-full flex flex-col items-start justify-center">
          <div className="py-1 px-4 flex items-center justify-center border-2 border-primary rounded-md">
            <span className="text-primary text-sm font-semibold">
              Economia Circular
            </span>
          </div>

          <h1 className="text-7xl text-white font-bold">
            Incorporando <br /> Resíduos
          </h1>

          <p className="text-lg font-medium text-white max-w-2xl">
            Simplificamos o processo de coleta e reciclagem de óleo usado. Sua
            empresa em dia, sem complicações e sem custos.
          </p>

          <Button
            onClick={handleSignup}
            variant="outline"
            className="h-12 w-64 flex items-center justify-center bg-transparent border border-white rounded-lg"
          >
            <span className="text-lg text-white font-semibold">Saiba Mais</span>
          </Button>
        </div>
        <div className="relative flex-1 h-full">
          <div className="absolute right-24 top-24">
            <span className="absolute top-0 left-0 text-[192px] font-extrabold bg-gradient-to-b from-white via-[#eaf6f8] to-[#bdd7e0] bg-clip-text text-transparent">
              ESG
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}