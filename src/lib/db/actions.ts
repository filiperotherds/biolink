import { schema } from "@/lib/db/schema";
import db from "./db";
import { executeAction } from "@/lib/db/executeAction";

const signUp = async (formData: FormData) => {
  return executeAction({
    actionFn: async () => {
      const name = formData.get("name");
      const email = formData.get("email");
      const password = formData.get("password");
      const validatedData = schema.parse({ name, email, password });
      await db.user.create({
        data: {
          name: validatedData.name,
          email: validatedData.email.toLocaleLowerCase(),
          password: validatedData.password,
        },
      });
    },
    successMessage: "Registrado com sucesso",
  });
};

export { signUp };
