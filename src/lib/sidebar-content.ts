import { CalendarCog, Clock, Factory, LayoutDashboard, LucideIcon } from "lucide-react";

interface Link {
  description: string;
  url: string;
  icon: LucideIcon;
}

const superadmin: Link[] = [
  {
    description: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    description: "Agendamentos",
    url: "/schedule",
    icon: Clock,
  },
  {
    description: "Empresas Parceiras",
    url: "/partners",
    icon: Factory,
  },
];

export { superadmin };
