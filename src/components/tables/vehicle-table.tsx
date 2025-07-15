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
import useStore from '@/stores';

type StoreType = {
  updateVehicleList: (vehicles: any[]) => void;
  vehicleList: any[];
  vehiclesList?: any[]; // Remove or adjust if not needed
};

const VehicleTable = () => {
  const store = useStore() as StoreType;
  const getVehicles = async () => {
    const res = await fetch('/api/vehicle');
    const vehicles = await res.json();
    store.updateVehicleList(vehicles ?? []);
    return vehicles ?? [];
  };
  useQuery({ queryKey: ['vehicles'], queryFn: getVehicles });
  return <div className='max-w-[30em]'>{store.vehicleList.map(VehicleCard)}</div>;
};

export default VehicleTable;
