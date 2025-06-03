"use client"; // importante para esse componente rodar no cliente

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function InvalidCnpj() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/create-institution"); // navega para a home no cliente
  };

  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <div className="p-5">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center">
                <div className="animate-bounce">
                  <AlertCircle className="h-10 w-10 text-red-600" />
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-3">
            <h3 className="text-lg font-medium text-red-600">
              O CNPJ informado já está cadastrado!
            </h3>
            <p className="text-xs text-muted-foreground">
              Já existe uma instituição atribuída ao CNPJ informado.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-2">
            <Button variant="outline" className="cursor-pointer" onClick={handleClick}>
              Voltar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
