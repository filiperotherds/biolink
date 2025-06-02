import { SysAdminDashboard } from "@/components/screens/dashboard";
import Sidebar from "@/components/sidebar";
import { auth } from "@/lib/db/auth";

export default async function Dashboard() {
  const session = await auth();

  return (
    <div className="h-screen w-screen flex flex-row items-start justify-start">
      <Sidebar
        name={session?.user.name}
        email={session?.user.email}
        role="SYS_ADMIN"
      />
      <SysAdminDashboard />
    </div>
  );
}
