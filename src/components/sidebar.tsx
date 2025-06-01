"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { user_role } from "../../generated/prisma";
import type { SidebarItemType } from "@/lib/content/sidebar-content";
import { Superadmin, CompanyAdmin } from "@/lib/content/sidebar-content";
import { SignOut } from "./signout";

interface SidebarProps {
  role: user_role;
}

interface SidebarItemProps {
  item: SidebarItemType;
  isActive: boolean;
}

function SidebarItem({ item, isActive }: SidebarItemProps) {
  // Escolhe o ícone ativo ou padrão
  const Icon = item.default_icon;

  return (
    <li>
      <Link
        href={item.url}
        className={
          `flex items-center gap-2 px-2 h-8 mb-1 rounded-[6px]
           ${isActive ? "bg-zinc-100 text-zinc-800" : "text-zinc-600"}
           hover:bg-zinc-100 hover:text-zinc-800 transition-all`
        }
      >
        <Icon size={16} strokeWidth={2.5} />
        <span className="text-sm font-medium">{item.description}</span>
      </Link>
    </li>
  );
}

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-72 h-full p-2 gap-2 flex flex-col items-center justify-start bg-zinc-100 border-r border-zinc-200">
      <div className="w-full flex-1 flex flex-col items-center justify-start">
        <div className="w-full h-16 flex flex-row items-center justify-between border-b ">
          <div className="h-full flex flex-row items-center justify-start">
            <div className="">

            </div>
          </div>
        </div>
        <div className="">

        </div>
      </div>
      <div className="w-full h-32 flex">

      </div>
    </div> 
  );
}
