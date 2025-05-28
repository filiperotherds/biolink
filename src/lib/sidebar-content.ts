import { CalendarCog, Clock, LayoutDashboard, LucideIcon } from "lucide-react";

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
    description: "Agenda",
    url: "/schedule",
    icon: Clock,
  },
];

export { superadmin };
