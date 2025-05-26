'use client'

import { useState } from "react";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CnpjInput from "./ui/cnpj-input"
import CepInput from "./ui/cep-input";

interface Company {
  razao_social?: string;
}

interface Address {
  state?: string;
  city?: string;
  street?: string;
}

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [cnpj, setCnpj] = useState("");
  const [company, setCompany] = useState<Company>({});

  const [cep, setCep] = useState("");
  const [address, setAddress] = useState<Address>({});

  const handleCnpjChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setCnpj(raw);

    const digits = raw.replace(/\D/g, "");
    if (digits.length !== 14) {
      setCompany({});
      return;
    }

    try {
      const res = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${digits}`);
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

  const handleCepChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    setCep(raw);

    const digits = raw.replace(/\D/g, "");
    if (digits.length !== 8) {
      setAddress({});
      return;
    }

    try {
      const res = await fetch(`https://brasilapi.com.br/api/cep/v2/${digits}`);
      if (!res.ok) {
        console.warn("CEP não encontrado:", res.status);
        setAddress({});
        return;
      }
      const data = await res.json();
      // mapeia apenas os campos que interessa
      setAddress({
        street: data.street,   // em alguns endpoints pode vir como data.logradouro
        city: data.city,
        state: data.state,
      });
    } catch (err) {
      console.error("Falha ao buscar CEP:", err);
      setAddress({});
    }
  };

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Solicite seu cadastro</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Registre sua solicitação de cadastro.
        </p>
      </div>

      <div className="grid gap-3">
        <div className="grid gap-3">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" type="text" required />
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
            placeholder="00.000.000/0000-00"
            value={cnpj}
            onChange={handleCnpjChange}
            required
            type={"text"}
            />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="raz-social">Razão Social</Label>
          <Input
            id="raz-social"
            type="text"
            value={company.razao_social ?? ""}
            readOnly
          />
        </div>

        <div className="w-full py-3">
          <p className="text-sm font-medium">Endereço</p>
        </div>

        {/* CEP */}
        <div className="grid gap-3">
          <Label htmlFor="cep">CEP</Label>
          <CepInput
            id="cep"
            placeholder="00.000-000"
            value={cep}
            onChange={handleCepChange}
            required
            type={"text"}
            />
        </div>

        <div className="flex flex-row gap-3">
          <div className="grid gap-3 w-full">
            <Label htmlFor="city">Cidade</Label>
            <Input
              id="city"
              type="text"
              value={address.city ?? ""}
              readOnly
            />
          </div>
          <div className="grid gap-3 w-24">
            <Label htmlFor="state">Estado</Label>
            <Input
              id="state"
              type="text"
              value={address.state ?? ""}
              readOnly
            />
          </div>
        </div>

        <div className="grid gap-3">
          <Label htmlFor="street">Logradouro</Label>
          <Input
            id="street"
            type="text"
            value={address.street ?? ""}
            readOnly
          />
        </div>

        <Button type="submit" className="w-full h-9 cursor-pointer">
          Cadastre-se
        </Button>
      </div>
    </form>
  );
}