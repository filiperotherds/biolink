import { redirect } from "next/navigation";
import { auth } from "@/lib/db/auth";
import Sidebar from "@/components/sidebar";
export default async function AdminLayout() {
  const session = await auth();

  if (!session) {
    redirect("/sign-in");
  }

  if (session.user.role === "SYS_ADMIN") {
    redirect("/admin/dashboard");
  }
  if (session.user.role === "MANAGER_USER") {
    return (
      <div className="h-screen w-screen flex flex-row items-start justify-start">
        <Sidebar name={session.user.name} email={session.user.email} role="MANAGER"/>
        <span>Manager User Dashboard</span>
      </div>
    );
  }
  if (session.user.role === "STANDARD_USER") {
    return (
      <div className="h-screen w-screen flex flex-row items-start justify-start">
        <Sidebar name={session.user.name} email={session.user.email} role="STANDARD"/>
        <span>Standard User Dashboard</span>
      </div>
    );
  }
}
