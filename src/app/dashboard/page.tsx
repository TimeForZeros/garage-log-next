import { Suspense } from 'react';
import Loading from './loading';
import AddVehicleModal from '@/components/modals/add-vehicle';
import VehicleTable from '@/components/tables/vehicle-table';

export default async function Dashboard() {
  return (
    <>
      <div>Hello World</div>
      <AddVehicleModal />
      <div>
        <Suspense fallback={<Loading />}>
          <VehicleTable />
        </Suspense>
      </div>
    </>
  );
}
