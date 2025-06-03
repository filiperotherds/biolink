import { z } from "zod";
import { CompanyType } from "@prisma/client";

const CreateInstitutionSchema = z.object({
  businessName: z.string(),
  cnpj: z
    .string()
    .transform((val) => val.replace(/[^\d]/g, ""))
    .refine((val) => val.length === 14, {
      message: "CNPJ deve ter 14 dígitos",
    }),

  /*cnpj: z.string().regex(/^\d{14}$/, {
    message: "O CNPJ deve conter exatamente 14 dígitos numéricos.",
  }),*/
  type: z.nativeEnum(CompanyType, {
    errorMap: () => ({ message: "Tipo de empresa inválido." }),
  }),
});

type CreateInstitutionSchemaType = z.infer<typeof CreateInstitutionSchema>;

export { CreateInstitutionSchema, type CreateInstitutionSchemaType };