import { auth } from "@/lib/db/auth";
import { revalidatePath } from "next/cache";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { DialogClose, DialogFooter } from "../ui/dialog";
import { createCollection } from "@/modules/collection/actions";
import { getAddressesByInstitutionId } from "@/modules/address/actions";

export default async function CreateCollection() {
  const session = await auth();

  const addresses = await getAddressesByInstitutionId(
    session?.user.institutionId
  );

  return (
    <form
      action={async (formData) => {
        "use server";

        const createdById = session?.user.id;
        const institutionId = session?.user.institutionId;
        const description = formData.get("description") as string;
        const pickupAddressId = formData.get("address") as string;

        const res = await createCollection({
          description,
          createdById,
          institutionId,
          pickupAddressId,
        });

        if (res) {
          revalidatePath("/institution/collections");
        }
      }}
    >
      <div className="grid gap-3 pb-4">
        <Label htmlFor="description">Observação</Label>
        <Input name="description" placeholder="Observação" type="text" />

        <Label htmlFor="address">Endereço</Label>
        <Select name="address" required>
          <SelectTrigger className="w-full" size="custom">
            <SelectValue placeholder="Escolha um endereço" />
          </SelectTrigger>
          <SelectContent>
            {addresses.map((address) => {
              return (
                <SelectItem key={address.id} value={address.id}>
                  <div className="flex flex-col items-start justify-start gap-0.5">
                    <span className="text-sm font-semibold">
                      {address.street}, {address.number}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {address.city} - {address.state}
                    </span>
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
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
            Requisitar
          </Button>
        </DialogClose>
      </DialogFooter>
    </form>
  );
}
