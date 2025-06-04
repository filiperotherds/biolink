import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  EllipsisVertical,
  ExternalLink,
  PlusIcon,
  Volleyball,
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { createUser, getUserByInstitutionId } from "@/modules/user/actions";
import { auth } from "@/lib/db/auth";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { InstitutionService } from "@/modules/institution/service/InstitutionService";

export default async function UsersPage() {
  const institutionService = new InstitutionService();

  const session = await auth();
  const institutionId = session?.user?.institutionId;

  const users = await getUserByInstitutionId(institutionId);
  const institution = await institutionService.getById(institutionId);

  return (
    <div className="w-full max-w-4xl flex flex-col items-center justify-start gap-8">
      <div className="h-24 w-full p-4 flex flex-row items-center justify-between rounded-2xl bg-gradient-to-br from-sky-400 to-emerald-300">
        <div className="h-full flex flex-col gap-1 items-start justify-start">
          <span className="text-sm font-semibold text-white">
            {institution?.businessName}
          </span>
          <span className="text-sm text-white">
            {institution?.cnpj.replace(
              /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
              "$1.$2.$3/$4-$5"
            )}
          </span>
        </div>
        <div className="h-full flex flex-col items-end justify-end">
          <Link
            target="_blank"
            href="https://instagram.com/biolink.eco"
            className="group h-7 px-2 flex items-center justify-center bg-white rounded-[8px]"
          >
            <div className="flex flex-row items-center justify-center gap-2">
              <Volleyball size={16} className="text-sky-400" />
              <div className="flex flex-row items-center justify-center gap-1">
                <span className="text-xs group-hover:underline">
                  Conheça as atividades que promovemos
                </span>
                <ExternalLink size={12} strokeWidth={2.5} />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-row items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <h1 className="text-base font-semibold">Usuários</h1>
          <p className="text-xs text-muted-foreground">
            Gerencie os usuários da sua instituição.
          </p>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm" className="cursor-pointer">
              <div className="flex flex-row items-center justify-center gap-2">
                <PlusIcon strokeWidth={2.5} />
                Adicionar Usuário
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
            <form
              className="p-4"
              action={async (formData) => {
                "use server";

                const res = await createUser(formData, institutionId);
                if (res.success) {
                  //success message
                } else {
                  //error message
                }
              }}
            >
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

      <div className="w-full rounded-[12px] border border-border overflow-hidden">
        <Table>
          <TableHeader className="bg-zinc-50">
            <TableRow>
              <TableHead></TableHead>
              <TableHead>
                <span className="font-semibold">Nome</span>
              </TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Função</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="rounded-b-lg overflow-hidden">
            {/* Example data, replace with actual user data */}
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <Button size="icon" variant="ghost">
                    <EllipsisVertical />
                  </Button>
                </TableCell>
                <TableCell>
                  <span className="font-medium">{user.name}</span>
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Badge variant="outline">
                    <span className="text-muted-foreground">
                      {user.role === "MANAGER_USER"
                        ? "Administrador"
                        : "Colaborador"}
                    </span>
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
