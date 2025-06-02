import { signUp } from "@/lib/db/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";
import Link from "next/link";
import { auth } from "@/lib/db/auth";
import { BadgeCheck } from "lucide-react";

const SignUp = async () => {
  const session = await auth();
  if (session) redirect("/");

  return (
    <main className="w-screen h-screen bg-zinc-50 flex items-center justify-center">
      <div className="w-[386px] p-6 bg-white shadow rounded-2xl">
        <div className="w-full max-w-sm mx-auto space-y-4">
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="text-xl font-bold">Cadastre-se</h1>
            <p className="text-sm text-zinc-400">
              Crie uma conta gratuita para sua empresa
            </p>
          </div>
          <div className="w-full p-2 gap-2 border flex flex-row items-start justify-start border-zinc-200 rounded-[10px]">
            <div className="pt-0.5 pl-0.5">
              <BadgeCheck
                size={16}
                strokeWidth={2.5}
                className="text-green-600"
              />
            </div>
            <div className="h-full flex flex-col items-start justify-between">
              <span className="text-sm font-bold">
                Acesso gratuito e ilimitado!
              </span>
              <span className="text-xs text-zinc-400">
                Cadastre-se para obter acesso gratuito e ilimitado a todos os
                recursos da Biolink!
              </span>
            </div>
          </div>
          {/* Email/Password Sign Up */}
          <form
            className="space-y-4"
            action={async (formData) => {
              "use server";
              const res = await signUp(formData);
              if (res.success) {
                redirect("/sign-in");
              } else {
              }
            }}
          >
            <Input
              name="email"
              placeholder="Email"
              type="email"
              required
              autoComplete="email"
            />
            <Input
              name="password"
              placeholder="Senha"
              type="password"
              required
              autoComplete="new-password"
            />
            <Button
              className="w-full cursor-pointer transition-all"
              type="submit"
              size="lg"
            >
              Cadastrar
            </Button>
          </form>

          <div className="text-center">
            <Button asChild variant="link">
              <Link href="/sign-in" className="text-zinc-600">
                Já possui uma conta? Entrar
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
