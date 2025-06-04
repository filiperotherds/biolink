import { schema } from "@/modules/user/schema";
import db from "@/lib/db";
import { executeAction } from "@/lib/executeAction";

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
      await db.user.create({
        data: {
          name: validatedData.name,
          email: validatedData.email.toLocaleLowerCase(),
          password: validatedData.password,
          institutionId: validatedData.institutionId,
          role: validatedData.role || "STANDARD_USER",
        },
      });
    },
    successMessage: "Registrado com sucesso",
  });
};

const deleteUser = async (userId: string) => {
  try {
    const deleted = await db.user.delete({
      where: {
        id: userId,
      },
    });
    return deleted;
  } catch (error) {
    console.error("Error deleting user:", error);
    return { success: false, error: "Failed to delete user" };
  }
};

const getUserByInstitutionId = async (institutionId: string) => {
  const users = await db.user.findMany({
    where: { institutionId },
    orderBy: { createdAt: "desc" },
  });
  return users;
};

export { createUser, deleteUser, getUserByInstitutionId };
