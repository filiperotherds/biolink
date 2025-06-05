import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { auth } from "@/lib/db/auth";
import { getUserByInstitutionId } from "@/modules/user/actions";
import { Button } from "./ui/button";
import { EllipsisVertical } from "lucide-react";
import { Badge } from "./ui/badge";

export default async function UsersTable() {
  const session = await auth();
  const institutionId = session?.user?.institutionId;

  const users = await getUserByInstitutionId(institutionId);

  return (
    <div className="w-full rounded-[12px] border border-border overflow-hidden">
      <Table>
        <TableHeader className="bg-zinc-50">
          <TableRow>
            <TableHead></TableHead>
            <TableHead>
              <span className="font-semibold">Nome</span>
            </TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Função</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="rounded-b-lg overflow-hidden">
          {/* Example data, replace with actual user data */}
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <Button size="icon" variant="ghost">
                  <EllipsisVertical />
                </Button>
              </TableCell>
              <TableCell>
                <span className="font-medium">{user.name}</span>
              </TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Badge variant="outline">
                  <span className="text-muted-foreground">
                    {user.role === "MANAGER_USER"
                      ? "Administrador"
                      : "Colaborador"}
                  </span>
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
