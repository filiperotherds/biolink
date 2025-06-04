import db from "@/lib/db/db";
import { Collection } from "../entity/collection";

export class CollectionRepository {
    public async create(collectionEntity: Collection): Promise<Collection> {
        const created = await db.collection.create({
            data: {
                id: collectionEntity.id,
                description: collectionEntity.description,
                createdAt: collectionEntity.createdAt,
                createdById: collectionEntity.createdById,
                institutionId: collectionEntity.institutionId,
                status: collectionEntity.status,
                approvedById: collectionEntity.approvedById,
                approvedAt: collectionEntity.approvedAt,
                completedAt: collectionEntity.completedAt,
                closedById: collectionEntity.closedById,
                closedAt: collectionEntity.closedAt,
                pickupAddressId: collectionEntity.pickupAddressId,
                volumeCollected: collectionEntity.volumeCollected,
            },
        });
        return new Collection({
            id: created.id,
            description: created.description ?? undefined,
            createdAt: created.createdAt,
            createdById: created.createdById,
            institutionId: created.institutionId,
            status: created.status,
            approvedById: created.approvedById ?? undefined,
            approvedAt: created.approvedAt ?? undefined,
            completedAt: created.completedAt ?? undefined,
            closedById: created.closedById ?? undefined,
            closedAt: created.closedAt ?? undefined,
            pickupAddressId: created.pickupAddressId ?? undefined,
            volumeCollected: created.volumeCollected ?? undefined,
        });
    }

    public async getAllByInstitutionId(institutionId: string): Promise<Collection[]> {
        const collections = await db.collection.findMany({
            where: {
                institutionId: institutionId
            }
        });
        
        return collections.map(collection => new Collection({
            id: collection.id,
            description: collection.description ?? undefined,
            createdAt: collection.createdAt,
            createdById: collection.createdById,
            institutionId: collection.institutionId,
            status: collection.status,
            approvedById: collection.approvedById ?? undefined,
            approvedAt: collection.approvedAt ?? undefined,
            completedAt: collection.completedAt ?? undefined,
            closedById: collection.closedById ?? undefined,
            closedAt: collection.closedAt ?? undefined,
            pickupAddressId: collection.pickupAddressId ?? undefined,
            volumeCollected: collection.volumeCollected ?? undefined,
        }));
    }
}