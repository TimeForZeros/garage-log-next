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
import VehicleCard from './card';
import { getAllVehicles } from '@/app/actions/vehicles';
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
    console.log('hitsa');
    // await new Promise((resolve) => setTimeout(() => resolve(), 10000));
    console.log('hits');
    const vehicles = await getAllVehicles();
    store.updateVehicleList(vehicles ?? []);
    return vehicles ?? [];
  };
  const {isLoading} = useQuery({ queryKey: ['vehicles'], queryFn: getVehicles });
  if (isLoading) {
    return <span>Loading...</span>
  }
  return <div className='max-w-[30em]'>{store.vehicleList.map(VehicleCard)}</div>;
};

export default VehicleTable;
