import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { SysAdminDashboard } from "@/components/screens/dashboard";
export default async function AdminLayout() {
  const session = await auth();

  if (!session) {
    redirect("/sign-in");
  }

  if (session.user.role === "SYS_ADMIN") {
    return <div>Sys Admin Dashboard</div>;
  }
  if (session.user.role === "MANAGER_USER") {
    return <div>Manager Dashboard</div>;
  }
  if (session.user.role === "STANDARD_USER") {
    return <div>Standard User Dashboard</div>;
  }
}
