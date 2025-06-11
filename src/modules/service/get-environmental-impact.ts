import { getTotalVolume } from "./get-total-volume";
import { getCollectionsByInstitutionId } from "../collection/actions";

export async function getEnvironmentalImpact(institutionId: string | null | undefined) {
    if (!institutionId) {
        return {
            totalCollections: 0,
            totalVolume: 0,
            reducedEmissions: 0,
            waterContaminationAvoided: 0,
        };
    }

    const collections = await getCollectionsByInstitutionId(institutionId);
    const totalVolume = await getTotalVolume(institutionId);

    const reducedEmissions = totalVolume * 0.9 * 0.37;
    const waterContaminationAvoided = totalVolume * 25000;

    return {
        totalCollections: collections.length,
        totalVolume,
        reducedEmissions,
        waterContaminationAvoided,
    };
}