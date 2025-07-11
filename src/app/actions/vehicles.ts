import { vehicleSchema, VehicleSchema } from '@/lib/definitions';
import config from '@/config/index';
import prisma from '@/lib/prisma';
import { PrismaClientKnownRequestError } from '@/prisma/runtime/library';

const createVehicle = (formData: VehicleSchema) => {
  const vehicleData = {};
  Object.entries(formData).forEach(([key, value]) => {
    if (key ===)
  });
};
