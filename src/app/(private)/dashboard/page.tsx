import { auth } from "@/lib/db/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  
  const session = await auth();

  if (session?.user.role === "SYS_ADMIN") {
    redirect("/admin/dashboard");
  }
  
  return <></>;
}
