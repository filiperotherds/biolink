import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { auth } from "@/lib/db/auth";
import { createInstitution } from "@/modules/institution/actions";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import CnpjLookup from "./CnpjLookup";
import { redirect } from "next/navigation";

const session = await auth();
const firstName = session?.user.name.split(" ")[0];

export function InstitutionForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form
        action={async (formData) => {
          "use server";

          const res = await createInstitution(formData);
          if (res) {
            redirect("/institution/dashboard");
          }
          // adicionar lógica para redirecionamento após criação da Instituição
        }}
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-xl font-extrabold text-zinc-800 pb-8">
              Bem Vindo(a), {firstName}!
            </h1>
            <div className="w-full flex flex-col items-start justify-center pb-2">
              <h1 className="text-sm font-medium">Sua Instituição</h1>
              <p className="text-xs text-muted-foreground">
                Vamos criar uma conta para a sua instituição. Preencha os dados
                abaixo para concluir esta etapa.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <CnpjLookup />
              <Label htmlFor="type">Tipo de Instituição</Label>
              <Select name="type">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Escolha uma opção" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="EDUCATIONAL">
                    Instituição Educacional
                  </SelectItem>
                  <SelectItem value="RESTAURANT">Restaurante</SelectItem>
                  <SelectItem value="COMPANY">Empresa</SelectItem>
                  <SelectItem value="CONDOMINIUM">Condomínio</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              className="w-full cursor-pointer transition-all"
              type="submit"
              size="lg"
            >
              Continuar
            </Button>
          </div>
        </div>
      </form>
      <div className="text-muted-foreground text-center text-xs text-balance">
        Ao clicar em continuar, você concorda com nossos{" "}
        <Link href="/" className="underline">
          Termos de Serviço
        </Link>{" "}
        e nossa{" "}
        <Link href="/" className="underline">
          Política de Privacidade
        </Link>
        .
      </div>
    </div>
  );
}
