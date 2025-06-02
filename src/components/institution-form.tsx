import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUp } from "@/lib/db/actions";
import { auth } from "@/lib/db/auth";
import { createInstitution } from "@/modules/institution/actions";

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
        }}
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-xl font-extrabold text-zinc-800">
              Bem Vindo, {firstName}!
            </h1>
            <div className="text-center text-sm">
              Já possui uma conta?{" "}
              <a href="/login" className="underline underline-offset-4">
                Entrar
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-3">
              <Label htmlFor="name">Nome completo</Label>
              <Input
                name="name"
                placeholder="Nome completo"
                type="text"
                required
                autoComplete="name"
              />
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                placeholder="Email"
                type="email"
                required
                autoComplete="email"
              />
              <Label htmlFor="password">Senha</Label>
              <Input
                name="password"
                placeholder="Senha"
                type="password"
                required
              />
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
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        Ao clicar em continuar, você concorda com nossos{" "}
        <a href="/">Termos de Serviço</a> e nossa{" "}
        <a href="/">Política de Privacidade</a>.
      </div>
    </div>
  );
}
