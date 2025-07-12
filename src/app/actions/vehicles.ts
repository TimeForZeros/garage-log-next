import { vehicleSchema, VehicleSchema } from '@/lib/definitions';
import config from '@/config/index';
import prisma from '@/lib/prisma';
import { PrismaClientKnownRequestError } from '@/prisma/runtime/library';
import { getServerSession } from 'next-auth';

export const createVehicle = async (formData: VehicleSchema) => {
  const vehicleData = {
    ...formData,
    make: formData.make || null,
    model: formData.model || null,
    year: !!formData.year ? Number(formData.year) : null,
    odometer: !!formData.odometer ? Number(formData.odometer) : null,
  };
  // await prisma.vehicle.create({ data: vehicleData });
};
