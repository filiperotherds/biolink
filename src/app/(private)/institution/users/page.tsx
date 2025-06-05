import { Button } from "@/components/ui/button";

import { PlusIcon } from "lucide-react";

import { Suspense } from "react";
import { InstitutionCardSkeleton } from "@/components/skeleton/institution-card-skeleton";
import InstitutionCard from "@/components/institution-card";
import CreateUser from "@/components/form/create-user";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UsersTable from "@/components/users-table";
import { UsersTableSkeleton } from "@/components/skeleton/users-table-skeleton";

export default function UsersPage() {
  return (
    <div className="w-full max-w-4xl flex flex-col items-center justify-start gap-8">
      <Suspense fallback={<InstitutionCardSkeleton />}>
        <InstitutionCard />
      </Suspense>
      <div className="w-full flex flex-row items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <h1 className="text-base font-semibold">Usuários</h1>
          <p className="text-xs text-muted-foreground">
            Gerencie os usuários da sua instituição.
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="cursor-pointer">
              <div className="flex flex-row items-center justify-center gap-2">
                <PlusIcon strokeWidth={2.5} />
                Adicionar Usuário
              </div>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Adicionar Usuário</DialogTitle>
              <DialogDescription>
                Preencha os dados do novo usuário para adicioná-lo à sua
                instituição.
              </DialogDescription>
            </DialogHeader>

            <CreateUser />
          </DialogContent>
        </Dialog>
      </div>

      <Suspense fallback={<UsersTableSkeleton />}>
        <UsersTable />
      </Suspense>
    </div>
  );
}
