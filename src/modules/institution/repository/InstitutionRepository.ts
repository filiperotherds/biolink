import { Institution as PrismaInstitution } from "@prisma/client";
import db from "@/lib/db/db";
import { Institution } from "../entity/Institution";

export class InstitutionRepository {
  public async create(instEntity: Institution): Promise<Institution> {
    const created: PrismaInstitution = await db.institution.create({
      data: {
        id: instEntity.id,
        businessName: instEntity.businessName,
        cnpj: instEntity.cnpj,
        type: instEntity.type,
      },
    });

    return new Institution({
      id: created.id,
      businessName: created.businessName,
      cnpj: created.cnpj,
      type: created.type,
      createdAt: created.createdAt,
      updatedAt: created.updatedAt,
    });
  }

  public async findByCnpj(cnpj: string): Promise<Institution | null> {
    const found = await db.institution.findUnique({ where: { cnpj } });
    if (!found) return null;
    return new Institution({
      id: found.id,
      businessName: found.businessName,
      cnpj: found.cnpj,
      type: found.type,
      createdAt: found.createdAt,
      updatedAt: found.updatedAt,
    });
  }

  public async findById(id: string): Promise<Institution | null> {
    const found = await db.institution.findUnique({ where: { id: id } });
    if (!found) return null;
    return new Institution({
      id: found.id,
      businessName: found.businessName,
      cnpj: found.cnpj,
      type: found.type,
      createdAt: found.createdAt,
      updatedAt: found.updatedAt,
    });
  }
}
