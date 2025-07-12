'use client';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import VehicleCard from '../cards/vehicle';

import { useQuery } from '@tanstack/react-query';

const getVehicles = async () => {
  const res = await fetch('/api/vehicle');
  return res.json();
};

const VehicleTable = () => {
  const { data } = useQuery({ queryKey: ['vehicles'], queryFn: getVehicles });
  console.log(data);
  return <div className='max-w-[30em]'>{data && data.map(VehicleCard)}</div>;
};

export default VehicleTable;
