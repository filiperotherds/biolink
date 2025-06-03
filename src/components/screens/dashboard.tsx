"use client";

import {
  Droplets,
  Earth,
  ExternalLink,
  TrendingUp,
  Volleyball,
} from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { InstitutionService } from "@/modules/institution/service/InstitutionService";
import { auth } from "@/lib/db/auth";
import DashboardButtons from "../dashboard-buttons";

function SysAdminDashboard() {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start p-8 gap-8">
      <div className="flex flex-col items-start justify-start gap-1">
        <h1 className="text-lg font-bold">Visão Geral</h1>
        <p className="text-sm text-zinc-400">
          Resumo das empresas e resíduos coletados
        </p>
      </div>

      {/* Cards Informativos */}

      <div className="w-full h-40 flex flex-row gap-4">
        <div className="relative h-full flex-1 p-4 flex flex-col justify-between border rounded-[12px]">
          <div className="absolute top-4 right-4">
            <Badge variant="outline">
              <div className="flex flex-row items-center justify-center gap-1">
                <TrendingUp size={12} />
                <p>+75%</p>
              </div>
            </Badge>
          </div>

          <div className="flex flex-col gap-2 items-start justify-start">
            <p className="text-xs text-zinc-400">Total Coletado (litros)</p>
            <h1 className="text-2xl font-semibold">2,473.00</h1>
          </div>

          <div className="flex flex-col gap-1 items-start justify-start">
            <p className="text-xs font-semibold">Litros de óleo coletados</p>
            <p className="text-xs text-zinc-400">
              {2 > 1
                ? "As coletas aumentaram desde o último mês"
                : "As coletas diminuiram desde o último mês"}
            </p>
          </div>
        </div>

        <div className="relative h-full flex-1 p-4 flex flex-col justify-between border rounded-[12px]">
          <div className="absolute top-4 right-4">
            <Badge variant="outline">
              <div className="flex flex-row items-center justify-center gap-1">
                <TrendingUp size={12} />
                <p>+75%</p>
              </div>
            </Badge>
          </div>

          <div className="flex flex-col gap-2 items-start justify-start">
            <p className="text-xs text-zinc-400">Total Coletado (litros)</p>
            <h1 className="text-2xl font-semibold">2,473.00</h1>
          </div>

          <div className="flex flex-col gap-1 items-start justify-start">
            <p className="text-xs font-semibold">Litros de óleo coletados</p>
            <p className="text-xs text-zinc-400">
              {2 > 1
                ? "As coletas aumentaram desde o último mês"
                : "As coletas diminuiram desde o último mês"}
            </p>
          </div>
        </div>

        <div className="relative h-full flex-1 p-4 flex flex-col justify-between border rounded-[12px]">
          <div className="absolute top-4 right-4">
            <Badge variant="outline">
              <div className="flex flex-row items-center justify-center gap-1">
                <TrendingUp size={12} />
                <p>+75%</p>
              </div>
            </Badge>
          </div>

          <div className="flex flex-col gap-2 items-start justify-start">
            <p className="text-xs text-zinc-400">Total Coletado (litros)</p>
            <h1 className="text-2xl font-semibold">2,473.00</h1>
          </div>

          <div className="flex flex-col gap-1 items-start justify-start">
            <p className="text-xs font-semibold">Litros de óleo coletados</p>
            <p className="text-xs text-zinc-400">
              {2 > 1
                ? "As coletas aumentaram desde o último mês"
                : "As coletas diminuiram desde o último mês"}
            </p>
          </div>
        </div>

        <div className="relative h-full flex-1 p-4 flex flex-col justify-between border rounded-[12px]">
          <div className="absolute top-4 right-4">
            <Badge variant="outline">
              <div className="flex flex-row items-center justify-center gap-1">
                <TrendingUp size={12} />
                <p>+75%</p>
              </div>
            </Badge>
          </div>

          <div className="flex flex-col gap-2 items-start justify-start">
            <p className="text-xs text-zinc-400">Total Coletado (litros)</p>
            <h1 className="text-2xl font-semibold">2,473.00</h1>
          </div>

          <div className="flex flex-col gap-1 items-start justify-start">
            <p className="text-xs font-semibold">Litros de óleo coletados</p>
            <p className="text-xs text-zinc-400">
              {2 > 1
                ? "As coletas aumentaram desde o último mês"
                : "As coletas diminuiram desde o último mês"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

async function InstitutionDashboard() {
  const institutionService = new InstitutionService();

  const session = await auth();
  const institutionId = session?.user.institutionId;
  const institution = await institutionService.getById(institutionId);

  return (
    <div className="w-full max-w-4xl flex flex-col items-center justify-start gap-16">
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

      <DashboardButtons />

      <div className="w-full flex flex-row items-center gap-2">
        <div className="relative flex-1 h-64 p-4 border rounded-2xl flex flex-col items-start justify-between">
          <div className="absolute top-4 right-4">
            <Badge variant="outline">
              <div className="flex flex-row items-center gap-1">
                <Droplets size={14} strokeWidth={2.3} />
                <span>Volume Coletado</span>
              </div>
            </Badge>
          </div>

          <div className="flex flex-col items-start justify-start gap-1">
            <span></span>
          </div>

          <div></div>
        </div>

        <div className="relative flex-1 h-64 p-4 border rounded-2xl flex flex-col items-start justify-between">
          <div className="absolute top-4 right-4">
            <Badge variant="outline">
              <div className="flex flex-row items-center gap-1">
                <Earth size={14} strokeWidth={2.3} />
                <span>Impacto Ambiental</span>
              </div>
            </Badge>
          </div>

          <div className="flex flex-col items-start justify-start gap-1">
            <span></span>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}

export { SysAdminDashboard, InstitutionDashboard };
