import { Droplets } from "lucide-react";
import { Badge } from "./ui/badge";
import { getCollectionsByInstitutionId } from "@/modules/collection/actions";
import { getTotalVolume } from "@/modules/service/get-total-volume";
import { auth } from "@/lib/db/auth";

export default async function CollectionInfoCard() {
  const session = await auth();

  const institutionId = session?.user.institutionId;

  const collections = await getCollectionsByInstitutionId(institutionId);

  const totalVolume = await getTotalVolume(institutionId);

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
            {collections.length} <span className="text-lg">{collections.length === 1 ? "Requisição" : "Requisições"}</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
