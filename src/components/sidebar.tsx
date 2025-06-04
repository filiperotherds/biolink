"use client";

import { usePathname } from "next/navigation";
import { ChevronDown, LogOut } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SidebarData, SysAdmin, Manager, Standard } from "@/lib/content/sidebar-content";
import Link from "next/link";

interface SidebarUserProps {
  name: string;
  email: string;
  role: "SYS_ADMIN" | "MANAGER" | "STANDARD"; // Exemplo de role vindo da session
}

// Ajustamos para `SidebarData[]`
interface SidebarItensProps {
  pathname: string;
  data: SidebarData[];
}

function SidebarItens({ pathname, data }: SidebarItensProps) {
  return (
    <nav className="w-full mt-2 p-2">
      {data.map((section) => (
        <div key={section.title} className="mb-4">
          <h3 className="text-xs font-semibold text-zinc-500">
            {section.title}
          </h3>
          <ul className="mt-2">
            {section.itens.map((item) => {
              const isActive = pathname === item.url;
              const Icon = item.default_icon;
              return (
                <li key={item.url} className="mb-1">
                  <Link
                    href={item.url}
                    className={`
                      flex items-center gap-2 px-2 py-1.5 rounded-md transition-all
                      ${isActive
                        ? "bg-zinc-100 text-zinc-800"
                        : "text-zinc-800 hover:bg-zinc-100"}
                    `}
                  >
                    <Icon size={16} strokeWidth={2} className="text-zinc-400"/>
                    <span className="text-sm font-medium">{item.description}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

export default function Sidebar({ name, email, role }: SidebarUserProps) {
  const pathname = usePathname();
  const iconLetters = !name ? "" : name.slice(0, 2).toUpperCase();

  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
  };

  const handleConfig = () => {
    router.push("/account-settings");
  };

  let sidebarData: SidebarData[];
  if (role === "SYS_ADMIN") {
    sidebarData = SysAdmin;
  } else if (role === "MANAGER") {
    sidebarData = Manager;
  } else {
    sidebarData = Standard;
  }

  return (
    <div className="w-[268px] h-full gap-2 flex flex-col items-center justify-start bg-white border-r border-zinc-200">
      <div className="w-full flex-1 flex flex-col items-center justify-start">
        <div className="w-full h-16 flex flex-row items-center justify-between border-b ">
          {/* Seção de usuário */}
          <div className="h-full p-2 gap-2.5 flex flex-row items-center justify-start">
            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-white shadow">
              <span className="font-semibold text-muted-foreground">{iconLetters}</span>
            </div>
            <div className="h-full gap-0.5 flex flex-col items-start justify-center">
              <span className="text-sm font-semibold">{name.length > 20 ? name.slice(0, 20) + "..." : name}</span>
              <span className="text-xs text-muted-foreground">{email.length > 22 ? email.slice(0, 22) + "..." : email}</span>
            </div>
          </div>

          {/* Botão de opções */}
          <DropdownMenu>
            <DropdownMenuTrigger className="w-7 h-7 mr-2 flex items-center justify-center focus:outline-none rounded-md hover:bg-zinc-100 transition-all">
              <ChevronDown
                size={16}
                strokeWidth={2.5}
                className="text-zinc-600"
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={handleConfig} className="cursor-pointer">
                <div className="w-36 flex flex-row items-center justify-between">
                  <span className="text-xs">Configurações</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                <div className="w-36 flex flex-row items-center justify-between">
                  <span className="text-xs">Sair</span>
                  <LogOut/>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <SidebarItens pathname={pathname} data={sidebarData} />
      </div>
      <div className="w-full h-32 flex"></div>
    </div>
  );
}
