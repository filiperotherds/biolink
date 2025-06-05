import { MapPin } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import AddressForm from "./AddressForm";
import { deleteAddress, updateAddress } from "@/modules/address/actions";
import { revalidatePath } from "next/cache";

interface AddressCardProps {
  id: string;
  zipCode: string;
  street: string;
  city: string;
  state: string;
  number: string;
}

export default function AddressCard(props: AddressCardProps) {
  return (
    <div className="w-full h-20 p-3 flex flex-row items-center justify-between rounded-2xl border border-border">
      <div className="flex flex-row items-start justify-start gap-2">
        <MapPin size={16} strokeWidth={2.3} className="text-muted-foreground" />
        <div className="h-full flex flex-col gap-1 items-start justify-between">
          <h1 className="text-xs font-semibold">
            {props.street}, {props.number}
          </h1>
          <span className="text-xs text-muted-foreground">
            {props.zipCode.replace(/^(\d{2})(\d{3})(\d{3})$/, "$1.$2-$3")}
          </span>
          <span className="text-xs text-muted-foreground">
            {props.city} - {props.state}
          </span>
        </div>
      </div>
      <div className="flex flex-row items-center justify-end gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="cursor-pointer text-muted-foreground hover:text-zinc-900"
            >
              Editar
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Editar Endereço</DialogTitle>
              <DialogDescription>
                Preencha os dados do novo endereço para edita-lo.
              </DialogDescription>
            </DialogHeader>
            <form
              action={async (formData) => {
                "use server";
                await updateAddress(props.id, formData);
                revalidatePath("/institution/addresses");
              }}
            >
              <AddressForm
                zipCode={props.zipCode}
                street={props.street}
                city={props.city}
                state={props.state}
                number={props.number}
              />
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
                    Salvar
                  </Button>
                </DialogClose>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="cursor-pointer text-muted-foreground hover:text-red-600"
            >
              Remover
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Remover Endereço</DialogTitle>
              <DialogDescription>
                Tem certeza que deseja remover este endereço?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" className="cursor-pointer">
                  Cancelar
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <form
                  action={async () => {
                    "use server";
                    await deleteAddress(props.id);
                    revalidatePath("/institution/addresses");
                  }}
                >
                  <Button
                    type="submit"
                    variant="destructive"
                    className="cursor-pointer"
                  >
                    Remover
                  </Button>
                </form>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
