-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "model" TEXT,
    "make" TEXT,
    "year" INTEGER,
    "odometer_miles" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Maintenance_Item" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "comments" TEXT,
    "time_interval_days" INTEGER,
    "usage_interval_miles" DOUBLE PRECISION,
    "recurring" BOOLEAN NOT NULL,
    "vehicleId" INTEGER NOT NULL,

    CONSTRAINT "Maintenance_Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Maintenance_Entry" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "vehicleId" INTEGER NOT NULL,
    "maintenance_ItemId" INTEGER,

    CONSTRAINT "Maintenance_Entry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Maintenance_Item" ADD CONSTRAINT "Maintenance_Item_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Maintenance_Entry" ADD CONSTRAINT "Maintenance_Entry_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Maintenance_Entry" ADD CONSTRAINT "Maintenance_Entry_maintenance_ItemId_fkey" FOREIGN KEY ("maintenance_ItemId") REFERENCES "Maintenance_Item"("id") ON DELETE SET NULL ON UPDATE CASCADE;
