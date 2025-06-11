import { auth } from "@/lib/db/auth";
import { Badge } from "./ui/badge";
import { Droplets, Earth } from "lucide-react";
import { getEnvironmentalImpact } from "@/modules/service/get-environmental-impact";

export default async function DashboardCards() {
  const session = await auth();
  const institutionId = session?.user.institutionId;

  const {
    totalVolume,
    totalCollections,
    reducedEmissions,
    waterContaminationAvoided,
  } = await getEnvironmentalImpact(institutionId);

  return (
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
            {totalVolume.toPrecision(2)} <span className="text-lg">litros</span>
          </h1>
        </div>

        <div className="flex flex-col items-start justify-start gap-2">
          <span className="text-xs font-semibold">
            Média de{" "}
            {totalVolume / totalCollections !== 0 ? totalCollections : 0}{" "}
            litros
          </span>
          <span className="text-xs text-muted-foreground">
            Obtidos em um total de {totalCollections} coletas
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
            {reducedEmissions.toPrecision(2)}{" "}
            <span className="text-lg">kg CO²</span>
          </h1>
        </div>

        <div className="flex flex-col items-start justify-start gap-2">
          <span className="text-xs text-muted-foreground">
            Contaminação hídrica evitada
          </span>
          <h1 className="text-3xl font-bold">
            {waterContaminationAvoided.toPrecision(2)}{" "}
            <span className="text-lg">litros de água</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
