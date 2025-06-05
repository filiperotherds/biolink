import { Badge } from "@/components/ui/badge";
import { auth } from "@/lib/db/auth";
import { getCollectionsByInstitutionId } from "@/modules/collection/actions";
import { getTotalVolume } from "@/modules/service/get-total-volume";
import { InstitutionService } from "@/modules/institution/service/InstitutionService";
import { Droplets, PlusIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default async function Colects() {
  const session = await auth();
  const institutionService = new InstitutionService();

  const institutionId = session?.user.institutionId;

  const institution = await institutionService.getById(institutionId);
  const collections = await getCollectionsByInstitutionId(institutionId);

  const totalVolume = await getTotalVolume(institutionId);

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

              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="cursor-pointer"
                  >
                    <div className="flex flex-row items-center justify-center gap-2">
                      <PlusIcon strokeWidth={2.5} />
                      Nova Coleta
                    </div>
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-[400px] sm:w-[540px]">
                  <SheetHeader>
                    <SheetTitle>Adicionar Usuário</SheetTitle>
                    <SheetDescription>
                      Preencha os dados do novo usuário para adicioná-lo à sua
                      instituição.
                    </SheetDescription>
                  </SheetHeader>
                  <form className="p-4">
                    <div className="flex flex-col gap-6">
                      <div className="flex flex-col gap-6">
                        <div className="grid gap-3">
                          <Label htmlFor="name">Nome completo</Label>
                          <Input
                            name="name"
                            placeholder="Nome completo"
                            type="text"
                            required
                          />
                          <Label htmlFor="email">Email</Label>
                          <Input
                            name="email"
                            placeholder="Email"
                            type="email"
                            required
                          />
                          <Label htmlFor="password">Senha</Label>
                          <Input
                            name="password"
                            placeholder="Senha"
                            type="password"
                            required
                          />
                          <Label htmlFor="role">Função</Label>
                          <Select name="role" required>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Escolha uma opção" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="MANAGER_USER">
                                Administrador
                              </SelectItem>
                              <SelectItem value="STANDARD_USER">
                                Colaborador
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Button
                          className="w-full cursor-pointer transition-all"
                          type="submit"
                          size="default"
                        >
                          Adicionar
                        </Button>
                      </div>
                    </div>
                  </form>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

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
              <span className="text-xs text-muted-foreground">
                Coletas Totais
              </span>
              <h1 className="text-3xl font-bold">
                {collections.length} <span className="text-lg">Concluídas</span>
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
