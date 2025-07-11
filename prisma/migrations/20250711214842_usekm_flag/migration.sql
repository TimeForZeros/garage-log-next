/*
  Warnings:

  - You are about to drop the column `odometerMiles` on the `Vehicle` table. All the data in the column will be lost.
  - Added the required column `useKm` to the `Vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vehicle" DROP COLUMN "odometerMiles",
ADD COLUMN     "odometer" INTEGER,
ADD COLUMN     "useKm" BOOLEAN NOT NULL;
