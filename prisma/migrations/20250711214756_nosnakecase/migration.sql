/*
  Warnings:

  - You are about to drop the column `odometer_miles` on the `Vehicle` table. All the data in the column will be lost.
  - You are about to drop the `Maintenance_Entry` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Maintenance_Item` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Maintenance_Entry" DROP CONSTRAINT "Maintenance_Entry_maintenance_ItemId_fkey";

-- DropForeignKey
ALTER TABLE "Maintenance_Entry" DROP CONSTRAINT "Maintenance_Entry_vehicleId_fkey";

-- DropForeignKey
ALTER TABLE "Maintenance_Item" DROP CONSTRAINT "Maintenance_Item_vehicleId_fkey";

-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "odometer_miles",
ADD COLUMN     "odometerMiles" INTEGER;

-- DropTable
DROP TABLE "Maintenance_Entry";

-- DropTable
DROP TABLE "Maintenance_Item";

-- CreateTable
CREATE TABLE "MaintenanceItem" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "comments" TEXT,
    "timeIntervalDays" INTEGER,
    "usageIntervalMiles" DOUBLE PRECISION,
    "recurring" BOOLEAN NOT NULL,
    "vehicleId" TEXT NOT NULL,

    CONSTRAINT "MaintenanceItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MaintenanceEntry" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "vehicleId" TEXT NOT NULL,
    "maintenanceItemId" INTEGER,

    CONSTRAINT "MaintenanceEntry_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MaintenanceItem" ADD CONSTRAINT "MaintenanceItem_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaintenanceEntry" ADD CONSTRAINT "MaintenanceEntry_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MaintenanceEntry" ADD CONSTRAINT "MaintenanceEntry_maintenanceItemId_fkey" FOREIGN KEY ("maintenanceItemId") REFERENCES "MaintenanceItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
