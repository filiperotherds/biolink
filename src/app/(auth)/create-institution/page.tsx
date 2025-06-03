import { InstitutionForm } from "@/components/institution-form";
import { auth } from "@/lib/db/auth";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export default async function CreateInstitution() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  } else if (!session?.user.institutionId) {
    return (
      <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
        <div className="w-full max-w-sm">
          <InstitutionForm />
        </div>
      </div>
    );
  } else {
    redirect("/dashboard");
  }
}
