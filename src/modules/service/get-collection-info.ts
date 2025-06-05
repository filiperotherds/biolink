import db from "@/lib/db";

const getCollectionInfo = async (institutionId: string) => {
    const collection = await db.collection.findMany({
        where: { institutionId: institutionId },
        select: {
            id: true,
            description: true,
            volumeCollected: true,
            status: true,
            createdAt: true,
            createdById: true,
            createdBy: {
                select: {
                    id: true,
                    name: true,
                    email: true
                }
            },
            institutionId: true,
            pickupAddressId: true,
            pickupAddress: {
                select: {
                    id: true,
                    zipCode: true,
                    street: true,
                    city: true,
                    state: true,
                    number: true
                }
            }
        }
    });

    if (!collection) {
        throw new Error("Collection not found");
    }

    return collection;
}

export { getCollectionInfo };