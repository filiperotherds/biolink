import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import InstitutionCard from "@/components/institution-card";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import AddressForm from "@/components/AddressForm";
import AddressCard from "@/components/address-card";
import { createAddress, getAddressesByInstitutionId } from "@/modules/address/actions";
import { auth } from "@/lib/db/auth";
import { revalidatePath } from "next/cache";

export default async function Addresses() {

    const session = await auth();

    const addresses = await getAddressesByInstitutionId(session?.user.institutionId);

    return (
        <div className="w-full max-w-4xl flex flex-col items-center justify-start gap-8">
            <InstitutionCard />
            
            <div className="w-full flex flex-row items-center justify-between">
                <div className="flex flex-col gap-0.5">
                    <h1 className="text-base font-semibold">Endereços</h1>
                    <p className="text-xs text-muted-foreground">
                        Gerencie os endereços da sua instituição.
                    </p>
                </div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button
                            variant="outline"
                            size="sm"
                            className="cursor-pointer"
                        >
                            <div className="flex flex-row items-center justify-center gap-2">
                            <PlusIcon strokeWidth={2.5} />
                            Novo Endereço
                            </div>
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>
                                Adicionar Endereço
                            </DialogTitle>
                            <DialogDescription>
                                Preencha os dados do novo endereço para adicioná-lo à sua instituição.
                            </DialogDescription>
                        </DialogHeader>
                        <form
                            action={async (formData) => {
                                "use server";
                                const res = await createAddress(formData, session?.user.institutionId);

                                if (res) {
                                    revalidatePath("/institution/addresses");
                                }
                            }}
                        >
                            <AddressForm/>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button variant="outline" className="cursor-pointer">Cancelar</Button>
                                </DialogClose>
                                <DialogClose asChild>
                                    <Button type="submit" className="bg-zinc-800 hover:bg-zinc-700 cursor-pointer">Adicionar</Button>
                                </DialogClose>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>

            <div className="w-full flex flex-col gap-2">
                {addresses.map((address) => (
                    <AddressCard
                        key={address.id}
                        id={address.id}
                        zipCode={address.zipCode}
                        street={address.street}
                        city={address.city}
                        state={address.state}
                        number={address.number}
                    />
                ))}
            </div>
        </div>
    )
}