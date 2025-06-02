import { SysAdminDashboard } from "@/components/screens/dashboard";

export default async function Dashboard() {

  return (
    <div className="h-screen w-screen flex flex-row items-start justify-start">
      <SysAdminDashboard />
    </div>
  );
}
