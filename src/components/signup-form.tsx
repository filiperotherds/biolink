import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUp } from "@/lib/db/actions";
import Image from "next/image";
import { signIn } from "@/lib/db/auth";
import Link from "next/link";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form
        action={async (formData) => {
          "use server";
          const data = formData;

          const res = await signUp(formData);
          if (res.success) {
            await signIn("credentials", data);
          } else {
            //error message
          }
        }}
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <Link
              href="/"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex items-center justify-center rounded-md">
                <div className="relative w-32 h-8">
                  <Image
                    src="/extended_logo.svg"
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>
            <h1 className="text-xl font-extrabold text-zinc-800">
              Bem Vindo a Biolink
            </h1>
            <div className="text-center text-sm">
              Já possui uma conta?{" "}
              <Link href="/login" className="underline underline-offset-4">
                Entrar
              </Link>
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
      <div className="text-muted-foreground text-center text-xs text-balance">
        Ao clicar em continuar, você concorda com nossos{" "}
        <Link href="/" className="underline">Termos de Serviço</Link> e nossa{" "}
        <Link href="/" className="underline">Política de Privacidade</Link>.
      </div>
    </div>
  );
}
