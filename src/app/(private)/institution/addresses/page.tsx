import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import InstitutionCard from "@/components/institution-card";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import AddressesList from "@/components/addresses-list";
import CreateAddress from "@/components/form/create-address";
import { Suspense } from "react";
import { AddressListSkeleton } from "@/components/skeleton/address-list-skeleton";
import { InstitutionCardSkeleton } from "@/components/skeleton/institution-card-skeleton";

export default function Addresses() {
  return (
    <div className="w-full max-w-4xl flex flex-col items-center justify-start gap-8">
      <Suspense fallback={<InstitutionCardSkeleton />}>
        <InstitutionCard />
      </Suspense>

      <div className="w-full flex flex-row items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <h1 className="text-base font-semibold">Endereços</h1>
          <p className="text-xs text-muted-foreground">
            Gerencie os endereços da sua instituição.
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="cursor-pointer">
              <div className="flex flex-row items-center justify-center gap-2">
                <PlusIcon strokeWidth={2.5} />
                Novo Endereço
              </div>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Adicionar Endereço</DialogTitle>
              <DialogDescription>
                Preencha os dados do novo endereço para adicioná-lo à sua
                instituição.
              </DialogDescription>
            </DialogHeader>

            <CreateAddress />
          </DialogContent>
        </Dialog>
      </div>

      <Suspense fallback={<AddressListSkeleton />}>
        <AddressesList />
      </Suspense>
    </div>
  );
}
