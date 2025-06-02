import Sidebar from "@/components/sidebar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Schedule() {
    const session = await auth();

    if (session?.user.role !== "SYS_ADMIN") {
        redirect("/dashboard");
    } else if (session) {
        return (
            <div className="h-screen w-screen flex flex-row items-start justify-start">
                <Sidebar name={session?.user.name} email={session?.user.email} role="SYS_ADMIN"/>

            </div>
        )
    }
}