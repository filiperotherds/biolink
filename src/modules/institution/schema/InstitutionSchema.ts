import { z } from "zod";
import { CompanyType } from "@prisma/client";

const CreateInstitutionSchema = z.object({
  businessName: z.string(),
  cnpj: z.string().regex(/^\d{14}$/, {
    message: "O CNPJ deve conter exatamente 14 dígitos numéricos.",
  }),
  type: z.nativeEnum(CompanyType, {
    errorMap: () => ({ message: "Tipo de empresa inválido." }),
  }),
});

type CreateInstitutionSchemaType = z.infer<typeof CreateInstitutionSchema>;

export { CreateInstitutionSchema, type CreateInstitutionSchemaType };