import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import {
  CompanyAdminDashboard,
  EmployeeDashboard,
  SuperAdminDashboard,
} from "@/components/dashboard";
import Sidebar from "@/components/sidebar";

export default async function Page() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  let num: number = 1;

  switch (num) {
    case 1:
      return (
        <main className="w-screen h-screen flex flex-row items-start justify-start">
          <Sidebar role="superadmin" />
          <SuperAdminDashboard />
        </main>
      );
    case 2:
      return <CompanyAdminDashboard />;
    case 3:
    default:
      return <EmployeeDashboard />;
  }
}
