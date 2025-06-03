import { SignupForm } from "@/components/signup-form";
import { auth } from "@/lib/db/auth";
import { redirect } from "next/navigation";

export default async function SignUp() {
  const session = await auth();

  if (session?.user.institutionId === null || "") {
    redirect("/create-institution");
  } else if (session) {
    redirect("/institution/dashboard");
  } else {
    return (
      <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
        <div className="w-full max-w-sm">
          <SignupForm />
        </div>
      </div>
    );
  }
}
