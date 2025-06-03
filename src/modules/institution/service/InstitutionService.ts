import { redirect } from "next/navigation";
import { CreateInstitutionDto } from "../dto/CreateInstitutionDto";
import { Institution } from "../entity/Institution";
import { InstitutionRepository } from "../repository/InstitutionRepository";
import db from "@/lib/db/db";
import { Role } from "@prisma/client";

export class InstitutionService {
  private repository = new InstitutionRepository();

  /**
   * Cria uma nova instituição e associa ao usuário autenticado.
   * Também atualiza o role do usuário para MANAGER_USER.
   *
   * @param dto Dados de criação da instituição (businessName, cnpj, type)
   * @param userId ID do usuário autenticado que está criando a instituição
   */
  public async createInstitution(
    dto: CreateInstitutionDto,
    userId: string
  ): Promise<Institution> {
    // 1. Verificar se já existe instituição com mesmo CNPJ
    const existing = await this.repository.findByCnpj(dto.cnpj);
    if (existing) {
      redirect("/invalid-cnpj");
    }

    const newInstitution = new Institution({
      businessName: dto.businessName,
      cnpj: dto.cnpj,
      type: dto.type,
    });
    const createdInst = await this.repository.create(newInstitution);

    await db.user.update({
      where: { id: userId },
      data: {
        institutionId: createdInst.id,
        role: Role.MANAGER_USER,
      },
    });

    return createdInst;
  }

  public async getById(id: string) {
    const institution = await this.repository.findById(id);
    if (!institution) {
      return null;
    }
    return institution;
  }
}
