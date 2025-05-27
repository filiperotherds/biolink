import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";
import { SignOut } from "@/components/signout";

export default async function Dashboard() {

    const session = await auth();
    if(!session) {
        redirect("/login");
    }

    return (
        <main className="flex flex-col w-screen h-screen items-center justify-center">
            <p>{session.user?.email}</p>
            <SignOut/>
        </main>
    )
}