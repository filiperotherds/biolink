import {
  Boxes,
  Clock,
  FolderOpen,
  Handshake,
  LayoutDashboard,
  LucideIcon,
  TruckElectric,
} from "lucide-react";

export type SidebarItemType = {
  description: string;
  url: string;
  default_icon: LucideIcon;
}

const Superadmin: SidebarItemType[] = [
  {
    description: "Dashboard",
    url: "/dashboard",
    default_icon: LayoutDashboard,
  },
  {
    description: "Agendamentos",
    url: "/schedule",
    default_icon: Clock,
  },
  {
    description: "Empresas Parceiras",
    url: "/partners",
    default_icon: Handshake,
  },
  {
    description: "Documentos",
    url: "/documentation",
    default_icon: FolderOpen,
  },
];

const CompanyAdmin: SidebarItemType[] = [
  {
    description: "Dashboard",
    url: "/dashboard",
    default_icon: LayoutDashboard,
  },
  {
    description: "Coletas",
    url: "/collect",
    default_icon: TruckElectric,
  },
  {
    description: "Armazenamento",
    url: "/storage",
    default_icon: Boxes,
  },
];

const Employee: SidebarItemType[] = [
  {
    description: "Dashboard",
    url: "/dashboard",
    default_icon: LayoutDashboard,
  },
  {
    description: "Coletas",
    url: "/collect",
    default_icon: TruckElectric,
  },
  {
    description: "Armazenamento",
    url: "/storage",
    default_icon: Boxes,
  },
];
export { Superadmin, CompanyAdmin, Employee };
