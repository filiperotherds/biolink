import { auth } from "@/lib/db/auth";
import { getCollectionInfo } from "@/modules/service/get-collection-info";
import CollectionCard from "./collection-card";

export default async function CollectionsList() {
  const session = await auth();

  const collections = await getCollectionInfo(session?.user.institutionId);

  return (
    <div className="w-full h-full flex flex-col items-start justify-start gap-4">
      {collections.map((collection) => (
        <CollectionCard
          key={collection.id}
          street={collection.pickupAddress?.street || ""}
          number={collection.pickupAddress?.number || ""}
          city={collection.pickupAddress?.city || ""}
          state={collection.pickupAddress?.state || ""}
          createdAt={collection.createdAt.toString()}
          createdByName={collection.createdBy?.name || ""}
          status={collection.status}
        />
      ))}
    </div>
  );
}
