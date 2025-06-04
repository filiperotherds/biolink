import { CollectionStatus } from "@prisma/client";

export class Collection {
  private _id: string;
  private _description?: string;
  private _createdAt: Date;

  private _createdById: string;

  private _institutionId: string;

  private _status: CollectionStatus;

  private _approvedById?: string;
  private _approvedAt?: Date;

  private _completedAt?: Date;

  private _closedById?: string;
  private _closedAt?: Date;

  private _pickupAddressId?: string;

  private _volumeCollected?: number;

  constructor(props: {
    id: string;
    description?: string;
    createdAt: Date;

    createdById: string;

    institutionId: string;

    status: CollectionStatus;

    approvedById?: string;
    approvedAt?: Date;

    completedAt?: Date;

    closedById?: string;
    closedAt?: Date;

    pickupAddressId?: string;

    volumeCollected?: number;
  }) {
    this._id = props.id;
    this._description = props.description;
    this._createdAt = props.createdAt;

    this._createdById = props.createdById;

    this._institutionId = props.institutionId;

    this._status = props.status;

    this._approvedById = props.approvedById;
    this._approvedAt = props.approvedAt;

    this._completedAt = props.completedAt;

    this._closedById = props.closedById;
    this._closedAt = props.closedAt;

    this._pickupAddressId = props.pickupAddressId;

    this._volumeCollected = props.volumeCollected;
  }

  // Getters
  public get id(): string {
    return this._id;
  }

  public get description(): string | undefined {
    return this._description;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }

  public get createdById(): string {
    return this._createdById;
  }

  public get institutionId(): string {
    return this._institutionId;
  }

  public get status(): CollectionStatus {
    return this._status;
  }

  public get approvedById(): string | undefined {
    return this._approvedById;
  }

  public get approvedAt(): Date | undefined {
    return this._approvedAt;
  }

  public get completedAt(): Date | undefined {
    return this._completedAt;
  }

  public get closedById(): string | undefined {
    return this._closedById;
  }

  public get closedAt(): Date | undefined {
    return this._closedAt;
  }

  public get pickupAddressId(): string | undefined {
    return this._pickupAddressId;
  }

  public get volumeCollected(): number | undefined {
    return this._volumeCollected;
  }
}