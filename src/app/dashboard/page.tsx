import Loading from './loading';
import VehicleModal from '@/app/dashboard/(vehicle)/modal';
import VehicleTable from '@/app/dashboard/(vehicle)/table';

export default async function Dashboard() {
  return (
    <>
      <div>Hello World</div>
      <VehicleModal vehicle={null} />
      <VehicleTable />
    </>
  );
}
