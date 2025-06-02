import { TrendingUp } from "lucide-react";
import { Badge } from "../ui/badge";

function SysAdminDashboard() {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start p-8 gap-8">
      <div className="flex flex-col items-start justify-start gap-1">
        <h1 className="text-lg font-bold">Visão Geral</h1>
        <p className="text-sm text-zinc-400">
          Resumo das empresas e resíduos coletados
        </p>
      </div>

      {/* Cards Informativos */}

      <div className="w-full h-40 flex flex-row gap-4">
        <div className="relative h-full flex-1 p-4 flex flex-col justify-between border rounded-[12px]">
          <div className="absolute top-4 right-4">
            <Badge variant="outline">
              <div className="flex flex-row items-center justify-center gap-1">
                <TrendingUp size={12} />
                <p>+75%</p>
              </div>
            </Badge>
          </div>

          <div className="flex flex-col gap-2 items-start justify-start">
            <p className="text-xs text-zinc-400">Total Coletado (litros)</p>
            <h1 className="text-2xl font-semibold">2,473.00</h1>
          </div>

          <div className="flex flex-col gap-1 items-start justify-start">
            <p className="text-xs font-semibold">Litros de óleo coletados</p>
            <p className="text-xs text-zinc-400">
              {2 > 1
                ? "As coletas aumentaram desde o último mês"
                : "As coletas diminuiram desde o último mês"}
            </p>
          </div>
        </div>

        <div className="relative h-full flex-1 p-4 flex flex-col justify-between border rounded-[12px]">
          <div className="absolute top-4 right-4">
            <Badge variant="outline">
              <div className="flex flex-row items-center justify-center gap-1">
                <TrendingUp size={12} />
                <p>+75%</p>
              </div>
            </Badge>
          </div>

          <div className="flex flex-col gap-2 items-start justify-start">
            <p className="text-xs text-zinc-400">Total Coletado (litros)</p>
            <h1 className="text-2xl font-semibold">2,473.00</h1>
          </div>

          <div className="flex flex-col gap-1 items-start justify-start">
            <p className="text-xs font-semibold">Litros de óleo coletados</p>
            <p className="text-xs text-zinc-400">
              {2 > 1
                ? "As coletas aumentaram desde o último mês"
                : "As coletas diminuiram desde o último mês"}
            </p>
          </div>
        </div>

        <div className="relative h-full flex-1 p-4 flex flex-col justify-between border rounded-[12px]">
          <div className="absolute top-4 right-4">
            <Badge variant="outline">
              <div className="flex flex-row items-center justify-center gap-1">
                <TrendingUp size={12} />
                <p>+75%</p>
              </div>
            </Badge>
          </div>

          <div className="flex flex-col gap-2 items-start justify-start">
            <p className="text-xs text-zinc-400">Total Coletado (litros)</p>
            <h1 className="text-2xl font-semibold">2,473.00</h1>
          </div>

          <div className="flex flex-col gap-1 items-start justify-start">
            <p className="text-xs font-semibold">Litros de óleo coletados</p>
            <p className="text-xs text-zinc-400">
              {2 > 1
                ? "As coletas aumentaram desde o último mês"
                : "As coletas diminuiram desde o último mês"}
            </p>
          </div>
        </div>

        <div className="relative h-full flex-1 p-4 flex flex-col justify-between border rounded-[12px]">
          <div className="absolute top-4 right-4">
            <Badge variant="outline">
              <div className="flex flex-row items-center justify-center gap-1">
                <TrendingUp size={12} />
                <p>+75%</p>
              </div>
            </Badge>
          </div>

          <div className="flex flex-col gap-2 items-start justify-start">
            <p className="text-xs text-zinc-400">Total Coletado (litros)</p>
            <h1 className="text-2xl font-semibold">2,473.00</h1>
          </div>

          <div className="flex flex-col gap-1 items-start justify-start">
            <p className="text-xs font-semibold">Litros de óleo coletados</p>
            <p className="text-xs text-zinc-400">
              {2 > 1
                ? "As coletas aumentaram desde o último mês"
                : "As coletas diminuiram desde o último mês"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { SysAdminDashboard };
