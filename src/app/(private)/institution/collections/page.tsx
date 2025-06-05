import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateCollection from "@/components/form/create-collection";
import { CollectionInfoCardSkeleton } from "@/components/skeleton/collection-info-card-skeleon";
import { Suspense } from "react";
import CollectionInfoCard from "@/components/collection-info-card";
import CollectionsList from "@/components/collections-list";
import { AddressListSkeleton } from "@/components/skeleton/address-list-skeleton";

export default function Colects() {
  return (
    <div className="w-full h-full max-w-4xl flex flex-col items-center justify-start gap-8">
      <div className="w-full h-full grid grid-cols-5 grid-rows-6 gap-4">
        <div className="col-span-3 row-span-6 p-4">
          <div className="w-full h-full flex flex-col items-start justify-start gap-4">
            <div className="flex flex-row items-center justify-between w-full">
              <div>
                <h1 className="text-xl font-bold">Requisições de Coleta</h1>
                <p className="text-xs text-muted-foreground">
                  Gerencie as requisições de coleta da sua instituição.
                </p>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="cursor-pointer"
                  >
                    <div className="flex flex-row items-center justify-center gap-2">
                      <PlusIcon strokeWidth={2.5} />
                      Requisitar Coleta
                    </div>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Requisitar Coleta</DialogTitle>
                    <DialogDescription>
                      Preencha os dados para solicitar uma nova requisição.
                    </DialogDescription>
                  </DialogHeader>

                  <CreateCollection />
                </DialogContent>
              </Dialog>
            </div>

            <Suspense fallback={<AddressListSkeleton />}>
              <CollectionsList />
            </Suspense>
          </div>
        </div>

        <Suspense fallback={<CollectionInfoCardSkeleton />}>
          <CollectionInfoCard />
        </Suspense>

        <div className="col-span-2 row-span-4 col-start-4 row-start-3 bg-zinc-50">
          3
        </div>
      </div>
    </div>
  );
}
