import { z } from "zod";
import { CollectionStatus } from "@prisma/client";

const schema = z.object({
  description: z.string().optional(),
  createdById: z.string(),
  institutionId: z.string(),
  status: z
    .enum([
      CollectionStatus.PENDING_APPROVAL,
      CollectionStatus.IN_PROGRESS,
      CollectionStatus.COMPLETED,
      CollectionStatus.CLOSED,
      CollectionStatus.APPROVED,
    ])
    .default(CollectionStatus.PENDING_APPROVAL),
    approvedById: z.string().optional(),
    approvedAt: z.date().optional(),
    completedAt: z.date().optional(),
    closedById: z.string().optional(),
    closedAt: z.date().optional(),
    pickupAddressId: z.string().optional(),
    volumeCollected: z.number().optional(),
});

type Schema = z.infer<typeof schema>;

export { schema, type Schema };
