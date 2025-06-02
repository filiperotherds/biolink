// src/app/institutions/new/actions.ts
"use server";

import { auth } from "@/lib/db/auth";
import { InstitutionService } from "@/modules/institution/service/InstitutionService";
import { CreateInstitutionSchema } from "./schema/InstitutionSchema";

const institutionService = new InstitutionService();

export async function createInstitution(formData: FormData) {

    const businessName = formData.get("businessName");
    const cnpj = formData.get("cnpj");
    const type = formData.get("type");
    const validatedData = CreateInstitutionSchema.parse({ businessName, cnpj, type });

  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) {
    throw new Error("Usuário não autenticado.");
  }

  const created = await institutionService.createInstitution(validatedData, userId);
  return created;
}
