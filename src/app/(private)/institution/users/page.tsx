import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { PlusIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { signUp } from "@/lib/db/actions";

export default async function UsersPage() {
  return (
    <div className="w-full max-w-4xl flex flex-col items-center justify-start gap-8">

        <div className="w-full flex flex-row items-center justify-between">
            <div className="flex flex-col gap-0.5">
                <h1 className="text-base font-semibold">Usuários</h1>
                <p className="text-xs text-muted-foreground">
                    Gerencie os usuários da sua instituição.
                </p>
            </div>
            <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="cursor-pointer">
                    <div className="flex flex-row items-center justify-center gap-2">
                        <PlusIcon strokeWidth={2.5}/>
                        Adicionar Usuário
                    </div>
                </Button>
            </SheetTrigger>
            <SheetContent className="w-[600px] sm:w-[540px]">
                <SheetHeader>
                    <SheetTitle>
                        Adicionar Usuário
                    </SheetTitle>
                    <SheetDescription>
                        Preencha os dados do novo usuário para adicioná-lo à sua instituição.
                    </SheetDescription>
                </SheetHeader>
                <form
                    className="p-4"
                    action={async (formData) => {
                    "use server";
                    const data = formData;

                    const res = await signUp(formData);
                    if (res.success) {
                        // acao de sucesso
                    } else {
                        //error message
                    }
                    }}
                >
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="name">Nome completo</Label>
                                <Input
                                    name="name"
                                    placeholder="Nome completo"
                                    type="text"
                                    required
                                    autoComplete="name"
                                />
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    name="email"
                                    placeholder="Email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                />
                                <Label htmlFor="password">Senha</Label>
                                <Input
                                    name="password"
                                    placeholder="Senha"
                                    type="password"
                                    required
                                />
                            </div>
                            <Button
                                className="w-full cursor-pointer transition-all"
                                type="submit"
                                size="default"
                            >
                                Adicionar
                            </Button>
                        </div>
                    </div>
                </form>
            </SheetContent>
            </Sheet>
        </div>

        <Table>
            <TableHeader className="bg-muted sticky top-0 z-10">
            <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Função</TableHead>
            </TableRow>
            </TableHeader>
            <TableBody
                className="rounded-b-lg overflow-hidden"
            >
            {/* Example data, replace with actual user data */}
            {Array.from({ length: 10 }).map((_, index) => (
                <TableRow key={index}>
                <TableCell>Usuário {index + 1}</TableCell>
                <TableCell>usuario{index + 1}@exemplo.com</TableCell>
                <TableCell>Função {index + 1}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </div>
  );
}