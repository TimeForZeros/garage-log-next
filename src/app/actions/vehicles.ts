'use server';

import { vehicleSchema, VehicleSchema } from '@/lib/definitions';
import { nextAuthOptions } from '@/config';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';

export const addOrUpdateVehicle = async (formData: VehicleSchema) => {
  const session: { user: { id: string } } | null = await getServerSession(nextAuthOptions);
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
    let vehicle = null;
    if (vehicleData.id) {
      vehicle = await prisma.vehicle.update({
        where: { id: vehicleData.id },
        data: { ...vehicleData },
      });
    } else {
      vehicle = await prisma.vehicle.create({ data: { ...vehicleData } });
    }
    return { success: true, vehicle };
  } catch (err) {
    return { success: false };
  }
};

export const getAllVehicles = async () => {
  const session: { user: { id: string } } | null = await getServerSession(nextAuthOptions);
  if (!session) return;
  const query = await prisma.vehicle.findMany({ where: { userId: session.user.id } });
  return query;
};

export const deleteVehicle = async (vehicleid: string) => {
  const session: { user: { id: string } } | null = await getServerSession(nextAuthOptions);
  if (!session) return;
  try {
    const deleteSuccess = await prisma.vehicle.delete({
      where: {
        id: vehicleid,
      },
    });
  } catch (err) {
    return err;
  }
  return null;
};
