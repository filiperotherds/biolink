"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CnpjInput from "./ui/cnpj-input";

interface CnpjLookupProps {
  cnpjName?: string; // para passar name dos inputs pro form
  razaoName?: string;
}

interface Erro {
  message?: string;
}

export default function CnpjLookup({
  cnpjName = "cnpj",
  razaoName = "businessName",
}: CnpjLookupProps) {
  const [cnpj, setCnpj] = useState("");
  const [razaoSocial, setRazaoSocial] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");

  function handleCnpjChange(e: ChangeEvent<HTMLInputElement>) {
    const somenteDigitos = e.target.value.replace(/\D/g, "");
    if (somenteDigitos.length <= 14) {
      setCnpj(somenteDigitos);
      if (somenteDigitos.length < 14) {
        setRazaoSocial("");
        setErro("");
      }
    }
  }

  useEffect(() => {
    if (cnpj.length !== 14) return;

    async function buscarRazaoSocial() {
      setLoading(true);
      setErro("");
      try {
        const res = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`);
        if (!res.ok) throw new Error("CNPJ não encontrado");
        const data = await res.json();
        setRazaoSocial(data.razao_social || "");
      } catch (error: unknown) {
        if (error instanceof Error) {
          setErro(error.message || "Erro ao buscar razão social");
        }
        setRazaoSocial("");
      } finally {
        setLoading(false);
      }
    }
    buscarRazaoSocial();
  }, [cnpj]);

  return (
    <div className="relative flex flex-col gap-3">
      <Label htmlFor={cnpjName}>CNPJ</Label>
      <CnpjInput
        id={cnpjName}
        name={cnpjName}
        type="text"
        value={cnpj}
        onChange={handleCnpjChange}
        placeholder="Digite o CNPJ"
        required
      />
      {loading && (
        <span className="absolute -top-1.5 right-0.5 text-sm">
          Buscando razão social...
        </span>
      )}
      {erro && (
        <span className="absolute -top-1.5 right-0.5 text-red-600 text-sm">
          {erro}
        </span>
      )}

      <Label htmlFor={razaoName}>Razão Social</Label>
      <Input
        id={razaoName}
        name={razaoName}
        type="text"
        value={razaoSocial}
        readOnly
        placeholder="Razão Social"
        required
      />
    </div>
  );
}
