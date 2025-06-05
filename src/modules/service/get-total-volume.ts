import { getCollectionsByInstitutionId } from "../collection/actions"

const getTotalVolume = async (institutionId: string) => {

    const collections = await getCollectionsByInstitutionId(institutionId);

    const totalVolume = collections.reduce((acc, collection) => {
        return acc + (collection.volumeCollected || 0);
    }, 0);

    return totalVolume;
}

export { getTotalVolume }