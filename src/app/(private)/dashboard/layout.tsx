import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { SysAdminDashboard } from "@/components/screens/dashboard";
import Sidebar from "@/components/sidebar";
export default async function AdminLayout() {
  const session = await auth();

  if (!session) {
    redirect("/sign-in");
  }

  if (session.user.role === "SYS_ADMIN") {
    return (
      <div className="h-screen w-screen flex flex-row items-start justify-start">
        <Sidebar/>
        <SysAdminDashboard/>
      </div>
    );
  }
  if (session.user.role === "MANAGER_USER") {
    return <div>Manager Dashboard</div>;
  }
  if (session.user.role === "STANDARD_USER") {
    return (
      <div className="h-screen w-screen flex flex-row items-start justify-start">
        <Sidebar/>
      </div>
    );
  }
}
