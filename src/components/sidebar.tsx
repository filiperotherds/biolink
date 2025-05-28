"use client";

import Link from "next/link";
import { user_role } from "../../generated/prisma";
import { superadmin } from "@/lib/sidebar-content";
import { usePathname } from "next/navigation";

interface SidebarProps {
  role: user_role;
}

export default function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();

  function renderSidebar(role: user_role) {
    switch (role) {
      case "superadmin":
        return (
          <ul className="w-full">
            {superadmin.map((item) => {
              const isActive = pathname === item.url;
              const Icon = item.icon;
              return (
                <li key={item.url}>
                  <Link
                    href={item.url}
                    className={`${
                      isActive ? "bg-zinc-100 text-zinc-800" : ""
                    } h-8 w-full flex flex-row items-center justify-start gap-2 px-2 mb-1 rounded-[6px] hover:bg-zinc-100 font-medium text-zinc-600 hover:text-zinc-800 transition-all`}
                  >
                    <Icon size={16} strokeWidth={2.5}/>
                    <span className="text-sm font-medium">
                      {item.description}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        );
    }
  }

  return (
    <div className="h-full w-64 flex flex-col items-center justify-between p-2 shadow border-r border-zinc-200">
      <div className="w-full flex flex-col gap-16">
        <div>header</div>
        <div className="w-full flex flex-col items-center justify-start gap-2">
          {renderSidebar(role)}
        </div>
      </div>
      <div className="w-full">footer</div>
    </div>
  );
}
