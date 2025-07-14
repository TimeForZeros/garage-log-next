'use server';

import { vehicleSchema, VehicleSchema } from '@/lib/definitions';
import { nextAuthOptions } from '@/config';
import prisma from '@/lib/prisma';
import { PrismaClientKnownRequestError } from '@/prisma/runtime/library';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

// export const createVehicle = async (formData: VehicleSchema) => {
//   const vehicleData = {
//     ...formData,
//     make: formData.make || null,
//     model: formData.model || null,
//     year: !!formData.year ? Number(formData.year) : null,
//     odometer: !!formData.odometer ? Number(formData.odometer) : null,
//   };
//   // await prisma.vehicle.create({ data: vehicleData });
// };

export const addVehicle = async (formData: VehicleSchema) => {
  const session: { user: { id: 'string' } } | null = await getServerSession(nextAuthOptions);
  if (!session) return;
  const vehicleData = {
    ...formData,
    userId: session.user.id,
    make: formData.make || null,
    model: formData.model || null,
    year: !!formData.year ? Number(formData.year) : null,
    odometer: !!formData.odometer ? Number(formData.odometer) : null,
    useKm: formData.useKm,
  };
  try {
    const vehicle = await prisma.vehicle.create({ data: vehicleData });
    return { success: true, vehicle };
  } catch (err) {
    // if (err instanceof PrismaClientKnownRequestError) {
    console.log(err);
    // }
    return { success: false, error: err };
  }
};
