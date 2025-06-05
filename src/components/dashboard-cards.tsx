import { auth } from "@/lib/db/auth";
import { getCollectionsByInstitutionId } from "@/modules/collection/actions";
import { getTotalVolume } from "@/modules/service/get-total-volume";
import { Badge } from "./ui/badge";
import { Droplets, Earth } from "lucide-react";

export default async function DashboardCards() {
  const session = await auth();
  const institutionId = session?.user.institutionId;

  const collections = await getCollectionsByInstitutionId(institutionId);

  const totalVolume = await getTotalVolume(institutionId);

  const emissoesReduzidas = totalVolume * 0.9 * 0.37;
  const contaminacaoReduzida = totalVolume * 25000;

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
  );
}
