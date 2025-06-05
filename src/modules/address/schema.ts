import { z } from "zod";
import { State } from "@prisma/client";

const schema = z.object({
  zipCode: z.string().min(8).max(8),
  street: z.string().min(2).max(100),
  city: z.string().min(2).max(100),
  state: z.enum(Object.values(State) as [State, ...State[]]),
  number: z.string().min(1).max(10),
});

type Schema = z.infer<typeof schema>;

export { schema, type Schema };