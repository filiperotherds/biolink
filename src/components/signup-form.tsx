'use client'

import { useState } from "react";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CnpjInput from "./ui/cnpj-input"

interface Company {
  razao_social?: string;
  // … outros campos que você queira exibir
}

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  // estado para o valor do CNPJ (string com máscara)
  const [cnpj, setCnpj] = useState("");
  // estado para os dados retornados da API
  const [company, setCompany] = useState<Company>({});

  const handleCnpjChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setCnpj(raw);

    // só dispara se tiver 14 dígitos numéricos
    const digits = raw.replace(/\D/g, "");
    if (digits.length !== 14) {
      setCompany({});
      return;
    }

    try {
      const res = await fetch(
        `https://brasilapi.com.br/api/cnpj/v1/${digits}`
      );
      if (!res.ok) {
        console.warn("CNPJ não encontrado:", res.status);
        setCompany({});
        return;
      }
      const data: Company = await res.json();
      setCompany(data);
    } catch (err) {
      console.error("Falha ao buscar CNPJ:", err);
      setCompany({});
    }
  };

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Solicite seu cadastro</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Preencha os dados abaixo para registrar a solicitação do cadastro.
        </p>
      </div>

      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" type="text" placeholder="" required />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="exemplo@biolink.eco.br"
            required
          />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="cnpj">CNPJ</Label>
          <CnpjInput
            id="cnpj"
            type="text"
            placeholder="00.000.000/0000-00"
            value={cnpj}
            onChange={handleCnpjChange}
            required
          />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="razao">Razão Social</Label>
          <Input
            id="razao"
            type="text"
            // evita `undefined` e torna o input sempre controlado
            value={company.razao_social ?? ""}
            readOnly
          />
        </div>

        <Button type="submit" className="w-full h-9">
          Cadastre-se
        </Button>
      </div>
    </form>
  );
}
