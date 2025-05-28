"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { user_role } from "../../generated/prisma";
import type { SidebarItemType } from "@/lib/sidebar-content";
import { Superadmin, CompanyAdmin } from "@/lib/sidebar-content";

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

export default function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();
  const items: SidebarItemType[] = role === "superadmin" ? Superadmin : CompanyAdmin;

  return (
    <aside className="h-full w-72 flex flex-col justify-between p-4 shadow border-r border-zinc-200 bg-white">
      <div className="space-y-4">
        <div className="p-2">
          <Image
            src="/extended_logo_gray.svg"
            alt="Biolink Logo"
            width={140}
            height={40}
          />
        </div>
        <ul className="w-full">
          {items.map((item) => {
            const isActive = pathname === item.url;
            return <SidebarItem key={item.url} item={item} isActive={isActive} />;
          })}
        </ul>
      </div>
      <div className="text-center py-2 text-sm text-zinc-500">
        © 2025 Biolink
      </div>
    </aside>
  );
}
