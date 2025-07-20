import Loading from './loading';
import VehicleModal from '@/app/dashboard/(vehicle)/modal';
import VehicleTable from '@/app/dashboard/(vehicle)/table';
import { getAllVehicles } from '../actions/vehicles';
import { Suspense } from 'react';
import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';

export default async function Dashboard() {
  const queryClient = new QueryClient();
  queryClient.prefetchQuery({ queryKey: ['vehicles'], queryFn: getAllVehicles });
  return (
    <div className='w-[50vw] mx-auto'>
      <VehicleModal vehicle={null} />
      <HydrationBoundary state={dehydrate(queryClient, { shouldDehydrateQuery: () => true })}>
        <VehicleTable />
      </HydrationBoundary>
    </div>
  );
}
