/*
  Warnings:

  - You are about to drop the `CollectionRequest` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CollectionRequest" DROP CONSTRAINT "CollectionRequest_approvedById_fkey";

-- DropForeignKey
ALTER TABLE "CollectionRequest" DROP CONSTRAINT "CollectionRequest_closedById_fkey";

-- DropForeignKey
ALTER TABLE "CollectionRequest" DROP CONSTRAINT "CollectionRequest_createdById_fkey";

-- DropForeignKey
ALTER TABLE "CollectionRequest" DROP CONSTRAINT "CollectionRequest_institutionId_fkey";

-- DropForeignKey
ALTER TABLE "CollectionRequest" DROP CONSTRAINT "CollectionRequest_pickupAddressId_fkey";

-- DropTable
DROP TABLE "CollectionRequest";

-- CreateTable
CREATE TABLE "Collection" (
    "id" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT NOT NULL,
    "institutionId" TEXT NOT NULL,
    "status" "CollectionStatus" NOT NULL DEFAULT 'PENDING_APPROVAL',
    "approvedById" TEXT,
    "approvedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "closedById" TEXT,
    "closedAt" TIMESTAMP(3),
    "pickupAddressId" TEXT,
    "volumeCollected" DOUBLE PRECISION,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Collection_status_idx" ON "Collection"("status");

-- CreateIndex
CREATE INDEX "Collection_institutionId_idx" ON "Collection"("institutionId");

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institution"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_approvedById_fkey" FOREIGN KEY ("approvedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_closedById_fkey" FOREIGN KEY ("closedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_pickupAddressId_fkey" FOREIGN KEY ("pickupAddressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;
