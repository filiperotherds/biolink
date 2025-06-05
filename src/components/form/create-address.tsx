import { auth } from "@/lib/db/auth";
import { createAddress } from "@/modules/address/actions";
import { revalidatePath } from "next/cache";
import AddressForm from "@/components/AddressForm";
import { DialogClose, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default async function CreateAddress() {
  const session = await auth();

  return (
    <form
      action={async (formData) => {
        "use server";
        const res = await createAddress(formData, session?.user.institutionId);

        if (res) {
          revalidatePath("/institution/addresses");
        }
      }}
    >
      <AddressForm />
      <DialogFooter>
        <DialogClose asChild>
          <Button variant="outline" className="cursor-pointer">
            Cancelar
          </Button>
        </DialogClose>
        <DialogClose asChild>
          <Button
            type="submit"
            className="bg-zinc-800 hover:bg-zinc-700 cursor-pointer"
          >
            Adicionar
          </Button>
        </DialogClose>
      </DialogFooter>
    </form>
  );
}
