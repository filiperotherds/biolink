import db from "@/lib/db";
import { executeAction } from "@/lib/executeAction";
import { schema, Schema } from "@/modules/collection/schema";

const createCollection = async (collectionData: Schema) => {
  return executeAction({
    actionFn: async () => {
      const description = collectionData.description
        ? collectionData.description
        : null;
      const createdById = collectionData.createdById;
      const institutionId = collectionData.institutionId;
      const status = "PENDING_APPROVAL";
      const pickupAddressId = collectionData.pickupAddressId;

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

const getCollectionById = async (collectionId: string) => {
    const collection = await db.collection.findUnique({
        where: { id: collectionId },
    });
    if (!collection) {
        return null;
    }
    return collection;
}

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

export { createCollection, getCollectionById, getCollectionsByInstitutionId };
