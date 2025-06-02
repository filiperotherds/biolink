import Sidebar from "@/components/sidebar";
import { auth } from "@/lib/db/auth";

export default async function Schedule() {
  const session = await auth();
  return (
    <div className="h-screen w-screen flex flex-row items-start justify-start"></div>
  );
}
