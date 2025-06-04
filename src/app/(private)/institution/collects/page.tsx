import { Badge } from "@/components/ui/badge";
import { Droplets } from "lucide-react";

export default async function Colects() {
  return (
    <div className="w-full h-full max-w-4xl flex flex-col items-center justify-start gap-8">
      <div className="w-full h-full grid grid-cols-5 grid-rows-6 gap-4">
        <div className="col-span-3 row-span-6 p-4">
          <div className="w-full h-full flex flex-col items-start justify-start gap-4">
            <div>
              <h1 className="text-xl font-bold">Requisições de Coleta</h1>
              <p className="text-xs text-muted-foreground">
                Gerencie as requisições de coleta da sua instituição.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-2 row-span-2 col-start-4 border border-border shadow-xs rounded-2xl p-4">
          <div className="relative w-full h-full flex flex-col items-start justify-between">
            <div className="absolute top-0 right-0">
              <Badge variant="outline">
                <div className="flex flex-row items-center gap-1">
                  <Droplets size={14} strokeWidth={2.3} />
                  <span className="font-semibold">197.34 litros</span>
                </div>
              </Badge>
            </div>

            <div>
              <span className="text-xs text-muted-foreground">
                Coletas Totais
              </span>
              <h1 className="text-3xl font-bold">
                07 <span className="text-lg">Concluídas</span>
              </h1>
            </div>
          </div>
        </div>

        <div className="col-span-2 row-span-4 col-start-4 row-start-3 bg-zinc-50">
          3
        </div>
      </div>
    </div>
  );
}
