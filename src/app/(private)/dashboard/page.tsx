import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { user_role } from "../../../../generated/prisma";
import {
  CompanyAdminDashboard,
  EmployeeDashboard,
  SuperAdminDashboard,
} from "@/components/dashboard";
import Sidebar from "@/components/sidebar";

interface User {
  first_name: string;
  last_name: string;
  email: string;
  role: user_role;
}

const userTeste: User = {
  first_name: "Teste",
  last_name: "de Teste",
  email: "teste@teste.com",
  role: "superadmin",
};

export default async function Page() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  switch (userTeste.role) {
    case "superadmin":
      return (
        <main className="w-screen h-screen flex flex-row items-start justify-start">
          <Sidebar role="superadmin" />
          <SuperAdminDashboard />
        </main>
      );
    case "company_admin":
      return <CompanyAdminDashboard />;
    case "employee":
    default:
      return <EmployeeDashboard />;
  }
}
