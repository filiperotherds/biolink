import { Droplets } from "lucide-react";
import { Badge } from "./ui/badge";
import { auth } from "@/lib/db/auth";
import { getEnvironmentalImpact } from "@/modules/service/get-environmental-impact";

export default async function CollectionInfoCard() {
  const session = await auth();
  const institutionId = session?.user.institutionId;

  const {
    totalVolume,
    totalCollections,
    reducedEmissions,
    waterContaminationAvoided,
  } = await getEnvironmentalImpact(institutionId);

  return (
    <div className="col-span-2 row-span-2 col-start-4 border border-border shadow-xs rounded-2xl p-4">
      <div className="relative w-full h-full flex flex-col items-start justify-between">
        <div className="absolute top-0 right-0">
          <Badge variant="outline">
            <div className="flex flex-row items-center gap-1">
              <Droplets size={14} strokeWidth={2.3} />
              <span className="font-semibold">
                {totalVolume.toPrecision(2)} litros
              </span>
            </div>
          </Badge>
        </div>

        <div>
          <span className="text-xs text-muted-foreground">Coletas Totais</span>
          <h1 className="text-3xl font-bold">
            {totalCollections}{" "}
            <span className="text-lg">
              {totalCollections === 1 ? "Requisição" : "Requisições"}
            </span>
          </h1>
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
