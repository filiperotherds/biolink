import { auth } from "@/lib/db/auth";
import { createUser } from "@/modules/user/actions";
import { revalidatePath } from "next/cache";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { DialogClose, DialogFooter } from "../ui/dialog";

export default async function CreateUser() {
  const session = await auth();

  return (
    <form
      action={async (formData) => {
        "use server";

        const res = await createUser(formData, session?.user.institutionId);
        if (res.success) {
          revalidatePath("/institution/users");
        }
      }}
    >
      <div className="grid gap-3 pb-4">
        <Label htmlFor="name">Nome completo</Label>
        <Input name="name" placeholder="Nome completo" type="text" required />
        <Label htmlFor="email">Email</Label>
        <Input name="email" placeholder="Email" type="email" required />
        <Label htmlFor="password">Senha</Label>
        <Input name="password" placeholder="Senha" type="password" required />
        <Label htmlFor="role">Função</Label>
        <Select name="role" required>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Escolha uma opção" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="MANAGER_USER">Administrador</SelectItem>
            <SelectItem value="STANDARD_USER">Colaborador</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline" className="cursor-pointer">
            Cancelar
          </Button>
        </DialogClose>
        <DialogClose asChild>
          <Button
            type="submit"
            className="bg-zinc-800 hover:bg-zinc-700 cursor-pointer"
          >
            Adicionar
          </Button>
        </DialogClose>
      </DialogFooter>
    </form>
  );
}
