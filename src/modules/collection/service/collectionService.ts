import { CollectionRepository } from "../repository/collectionRepository";

export class CollectionService {
    private repository = new CollectionRepository();

    public async getByInstitutionId(institutionId: string) {
        const collections = await this.repository.getAllByInstitutionId(institutionId);
        if (!collections || collections.length === 0) {
            return [];
        }
        return collections;
    }
}