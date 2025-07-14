import { vehicleSchema, VehicleSchema } from '@/lib/definitions';
import config, { nextAuthOptions } from '@/config/index';
import prisma from '@/lib/prisma';
import { PrismaClientKnownRequestError } from '@/prisma/runtime/library';
import { getServerSession } from 'next-auth';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

// Get All
export const GET = async (req: NextRequest) => {
  const token = await getToken({ req });
  if (!token) {
    return NextResponse.json({ message: 'invalid or missing token' }, { status: 400 });
  }
  const query = await prisma.vehicle.findMany({ where: { userId: token.sub } });
  return NextResponse.json(query);
};

// Create Vehicle
export const POST = async (req: NextRequest) => {
  const token = await getToken({ req });
  if (!token) {
    return NextResponse.json({ message: 'invalid or missing token' }, { status: 400 });
  }
  const data = await req.json();
  const vehicleData = {
    ...data,
    userId: token.sub,
    make: data.make || null,
    model: data.model || null,
    year: !!data.year ? Number(data.year) : null,
    odometer: !!data.odometer ? Number(data.odometer) : null,
    useKm: data.useKm,
  };
  try {
    await prisma.vehicle.create({ data: vehicleData });
    return NextResponse.json(vehicleData, { status: 201 });
  } catch (err) {
    // if (err instanceof PrismaClientKnownRequestError) {
    console.log(err);
    // }
    return NextResponse.json({ message: 'Unknown error' }, { status: 500 });
  }
};
