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
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { EllipsisVertical, PlusIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { createUser, getUserByInstitutionId } from "@/modules/users/actions";
import { auth } from "@/lib/db/auth";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default async function UsersPage() {
  const session = await auth();
  const institutionId = session?.user?.institutionId;

  const users = await getUserByInstitutionId(institutionId);

  return (
    <div className="w-full max-w-4xl flex flex-col items-center justify-start gap-8">
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
                  <Button
                    variant="outline"
                    size="icon"
                    className="cursor-pointer shadow-none"
                  >
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
                      {user.role === "MANAGER_USER" ? "Administrador" : "Colaborador"}
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
