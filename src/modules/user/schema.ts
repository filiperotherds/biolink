import { z } from "zod";
import { Role } from "@prisma/client";

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(1),
  institutionId: z.string(),
  role: z.enum([Role.SYS_ADMIN, Role.MANAGER_USER, Role.STANDARD_USER]).optional(),
});

type Schema = z.infer<typeof schema>;

export { schema, type Schema };