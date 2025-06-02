import { Box, Building2, Layers2, LayoutGrid, LucideIcon, PackageOpen } from "lucide-react";

export type SidebarItemType = {
  description: string;
  url: string;
  default_icon: LucideIcon;
};

export type SidebarData = {
  title: string;
  itens: SidebarItemType[];
};

const SysAdmin: SidebarData[] = [
  {
    title: "Operacional",
    itens: [
      {
        description: "Dashboard",
        url: "/admin/dashboard",
        default_icon: LayoutGrid,
      },
      {
        description: "Schedule",
        url: "/schedule",
        default_icon: Layers2,
      },
      {
        description: "Supplies",
        url: "/supplies",
        default_icon: PackageOpen,
      },
    ],
  },
  {
    title: "Administrativo",
    itens: [
      {
        description: "Instituições",
        url: "/institutions",
        default_icon: Building2,
      },
      {
        description: "Schedule",
        url: "/schedule",
        default_icon: Layers2,
      },
      {
        description: "Containers",
        url: "/containers",
        default_icon: Box,
      },
    ],
  },
];

const Manager: SidebarData[] = [
  {
    title: "Gerência",
    itens: [
      {
        description: "Relatórios",
        url: "/manager/reports",
        default_icon: LayoutGrid,
      },
    ],
  },
];

const Standard: SidebarData[] = [
  {
    title: "Operacional",
    itens: [
      {
        description: "Dashboard",
        url: "/dashboard",
        default_icon: LayoutGrid,
      },
    ],
  },
];

export { SysAdmin, Manager, Standard };
