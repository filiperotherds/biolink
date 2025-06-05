import { Box, Building2, Layers2, LayoutGrid, LucideIcon, Map, MapPinHouse, Truck, Users } from "lucide-react";

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
        description: "Agendamentos",
        url: "/admin/schedule",
        default_icon: Layers2,
      },
      {
        description: "Suprimentos",
        url: "/admin/containers",
        default_icon: Box,
      },
    ],
  },
  {
    title: "Administrativo",
    itens: [
      {
        description: "Instituições",
        url: "/admin/institutions",
        default_icon: Building2,
      },
      {
        description: "Regiões Atendidas",
        url: "/admin/coverage-area",
        default_icon: Map,
      },
    ],
  },
];

const Manager: SidebarData[] = [
  {
    title: "Operacional",
    itens: [
      {
        description: "Dashboard",
        url: "/institution/dashboard",
        default_icon: LayoutGrid,
      },
      {
        description: "Coletas",
        url: "/institution/collects",
        default_icon: Truck,
      },
      {
        description: "Recipientes",
        url: "/institution/containers",
        default_icon: Box,
      },
    ],
  },
  {
    title: "Administrativo",
    itens: [
      {
        description: "Usuários",
        url: "/institution/users",
        default_icon: Users,
      },
      {
        description: "Endereços",
        url: "/institution/addresses",
        default_icon: MapPinHouse,
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
