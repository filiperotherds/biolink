import { CompanyType } from "@prisma/client";

export class Institution {
  private _id: string;
  private _businessName: string;
  private _cnpj: string;
  private _type: CompanyType;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(props: {
    id?: string;
    businessName: string;
    cnpj: string;
    type: CompanyType;
    createdAt?: Date;
    updatedAt?: Date;
  }) {
    this._id = props.id ?? crypto.randomUUID();
    this._businessName = props.businessName;
    this._cnpj = props.cnpj;
    this._type = props.type;
    this._createdAt = props.createdAt ?? new Date();
    this._updatedAt = props.updatedAt ?? new Date();
  }

  // Getters (somente leitura)
  public get id(): string {
    return this._id;
  }
  public get businessName(): string {
    return this._businessName;
  }
  public get cnpj(): string {
    return this._cnpj;
  }
  public get type(): CompanyType {
    return this._type;
  }
  public get createdAt(): Date {
    return this._createdAt;
  }
  public get updatedAt(): Date {
    return this._updatedAt;
  }

  // Método para atualizar o nome empresarial (exemplo de lógica de domínio, caso necessário)
  public changeBusinessName(newName: string) {
    if (newName.trim().length < 3) {
      throw new Error("O nome empresarial deve ter ao menos 3 caracteres.");
    }
    this._businessName = newName;
    this._updatedAt = new Date();
  }
}
