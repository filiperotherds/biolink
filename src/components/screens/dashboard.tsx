import {
  Droplets,
  Earth,
  TrendingUp,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { auth } from "@/lib/db/auth";
import DashboardButtons from "../dashboard-buttons";
import { getCollectionsByInstitutionId } from "@/modules/collection/actions";
import { getTotalVolume } from "@/modules/service/get-total-volume";
import InstitutionCard from "../institution-card";

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

async function InstitutionDashboard() {
  const session = await auth();
  const institutionId = session?.user.institutionId;

  const collections = await getCollectionsByInstitutionId(institutionId);

  const totalVolume = await getTotalVolume(institutionId);

  const emissoesReduzidas = totalVolume * 0.9 * 0.37;
  const contaminacaoReduzida = totalVolume * 25000;

  return (
    <div className="w-full max-w-4xl flex flex-col items-center justify-start gap-16">
      <InstitutionCard/>

      <DashboardButtons />

      <div className="w-full flex flex-row items-center gap-2">
        <div className="relative flex-1 h-60 p-4 border rounded-2xl flex flex-col items-start justify-between">
          <div className="absolute top-4 right-4">
            <Badge variant="outline">
              <div className="flex flex-row items-center gap-1">
                <Droplets size={14} strokeWidth={2.3} />
                <span>Volume Coletado</span>
              </div>
            </Badge>
          </div>

          <div className="flex flex-col items-start justify-start gap-2">
            <span className="text-xs text-muted-foreground">
              Total em Descartes
            </span>
            <h1 className="text-3xl font-bold">
              {totalVolume.toPrecision(2)}{" "}
              <span className="text-lg">litros</span>
            </h1>
          </div>

          <div className="flex flex-col items-start justify-start gap-2">
            <span className="text-xs font-semibold">
              Média de{" "}
              {totalVolume / collections.length !== 0 ? collections.length : 0}{" "}
              litros
            </span>
            <span className="text-xs text-muted-foreground">
              Obtidos em um total de {collections.length} coletas
            </span>
          </div>
        </div>

        <div className="relative flex-1 h-60 p-4 border rounded-2xl flex flex-col items-start justify-between">
          <div className="absolute top-4 right-4">
            <Badge variant="outline">
              <div className="flex flex-row items-center gap-1">
                <Earth size={14} strokeWidth={2.3} />
                <span>Impacto Ambiental</span>
              </div>
            </Badge>
          </div>

          <div className="flex flex-col items-start justify-start gap-2">
            <span className="text-xs text-muted-foreground">
              Emissões de CO² reduzidas
            </span>
            <h1 className="text-3xl font-bold">
              {emissoesReduzidas.toPrecision(2)}{" "}
              <span className="text-lg">kg CO²</span>
            </h1>
          </div>

          <div className="flex flex-col items-start justify-start gap-2">
            <span className="text-xs text-muted-foreground">
              Contaminação hídrica evitada
            </span>
            <h1 className="text-3xl font-bold">
              {contaminacaoReduzida.toPrecision(2)}{" "}
              <span className="text-lg">litros de água</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export { SysAdminDashboard, InstitutionDashboard };
