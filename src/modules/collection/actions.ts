import db from "@/lib/db";
import { executeAction } from "@/lib/executeAction";
import { schema } from "@/modules/collection/schema";

interface CreateCollectionProps {
  description: string;
  createdById: string;
  institutionId: string;
  pickupAddressId: string;
}

const createCollection = async (CreateCollectionProps: CreateCollectionProps) => {
  return executeAction({
    actionFn: async () => {
      const description = CreateCollectionProps.description;
      const createdById = CreateCollectionProps.createdById;
      const institutionId = CreateCollectionProps.institutionId;
      const pickupAddressId = CreateCollectionProps.pickupAddressId;
      const status = "PENDING_APPROVAL";

      const validatedData = schema.parse({
        description,
        createdById,
        institutionId,
        status,
        pickupAddressId,
      });

      await db.collection.create({
        data: {
          description: validatedData.description,
          createdById: validatedData.createdById,
          institutionId: validatedData.institutionId,
          status: validatedData.status,
          pickupAddressId: validatedData.pickupAddressId,
        },
      });
    },
    successMessage: "Coleta registrada com sucesso.",
  });
};

const approveCollection = async (collectionId: string, approvedById: string) => {
  return executeAction({
    actionFn: async () => {
      await db.collection.update({
        where: { id: collectionId },
        data: {
          status: "APPROVED",
          approvedById: approvedById,
          approvedAt: new Date(),
        },
      });
    },
    successMessage: "Coleta aprovada com sucesso.",
  });
};

const getCollectionById = async (collectionId: string) => {
  const collection = await db.collection.findUnique({
    where: { id: collectionId },
  });
  if (!collection) {
    return null;
  }
  return collection;
};

const getCollectionsByInstitutionId = async (institutionId: string) => {
  const collections = await db.collection.findMany({
    where: { institutionId },
    orderBy: { createdAt: "desc" },
  });
  if (!collections || collections.length === 0) {
    return [];
  }
  return collections;
};

export { createCollection, approveCollection, getCollectionById, getCollectionsByInstitutionId };
