import { schema } from "@/modules/user/schema";
import db from "@/lib/db";
import { executeAction } from "@/lib/executeAction";
import bcrypt from "bcrypt";

const createUser = async (formData: FormData, institutionId: string) => {
  return executeAction({
    actionFn: async () => {
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");
      const role = formData.get("role");
      const validatedData = schema.parse({
        name,
        email,
        password,
        institutionId,
        role,
      });

      const hashedPassword = await bcrypt.hash(validatedData.password, 10);

      await db.user.create({
        data: {
          name: validatedData.name,
          email: validatedData.email.toLocaleLowerCase(),
          password: hashedPassword,
          institutionId: validatedData.institutionId,
          role: validatedData.role || "STANDARD_USER",
        },
      });
    },
    successMessage: "Registrado com sucesso",
  });
};

const deleteUser = async (userId: string) => {
  return executeAction({
    actionFn: async () => {
      await db.user.delete({
        where: { id: userId },
      });
    },
    successMessage: "Usuário deletado com sucesso",
  });
};

const getUserByInstitutionId = async (institutionId: string) => {
  const users = await db.user.findMany({
    where: { institutionId },
    orderBy: { createdAt: "desc" },
  });
  return users;
};

const getUserById = async (userId: string) => {
  const user = await db.user.findUnique({
    where: { id: userId },
  });
  return user;
}

export { createUser, deleteUser, getUserByInstitutionId, getUserById };
