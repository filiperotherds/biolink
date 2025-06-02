/*
  Warnings:

  - Added the required column `instituitionId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CompanyType" AS ENUM ('EDUCACIONAL', 'RESTAURANTE', 'CONDOMINIO', 'EMPRESA');

-- CreateEnum
CREATE TYPE "State" AS ENUM ('AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "instituitionId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Instituition" (
    "id" TEXT NOT NULL,
    "razaoSocial" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "tipo" "CompanyType" NOT NULL,

    CONSTRAINT "Instituition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Adrress" (
    "id" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" "State" NOT NULL,
    "instituitionId" TEXT NOT NULL,

    CONSTRAINT "Adrress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Instituition_cnpj_key" ON "Instituition"("cnpj");

-- AddForeignKey
ALTER TABLE "Adrress" ADD CONSTRAINT "Adrress_instituitionId_fkey" FOREIGN KEY ("instituitionId") REFERENCES "Instituition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_instituitionId_fkey" FOREIGN KEY ("instituitionId") REFERENCES "Instituition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
