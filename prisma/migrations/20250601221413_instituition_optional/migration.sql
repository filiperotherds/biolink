-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_instituitionId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "instituitionId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_instituitionId_fkey" FOREIGN KEY ("instituitionId") REFERENCES "Instituition"("id") ON DELETE SET NULL ON UPDATE CASCADE;
