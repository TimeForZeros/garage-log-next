import Loading from './loading';
import VehicleModal from '@/app/dashboard/(vehicle)/modal';
import VehicleTable from '@/app/dashboard/(vehicle)/table';

export default async function Dashboard() {
  return (
    <div className='w-[50vw] mx-auto'>
      <VehicleModal vehicle={null} />
      <VehicleTable />
    </div>
  );
}
