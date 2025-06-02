import { CompanyType } from "@prisma/client";

export interface CreateInstitutionDto {
  businessName: string;
  cnpj: string;
  type: CompanyType;
}
