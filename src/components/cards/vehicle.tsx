import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardHeader,
  CardFooter,
  CardAction,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import EditVehicleModal from '../modals/edit-vehicle';

// todo define tihs one
const VehicleCard = (vehicle: any) => {
  const openEditVehicleModal = () => <EditVehicleModal vehicle={vehicle} />;
  return (
    <Card key={vehicle.id}>
      <CardHeader>
        <CardTitle>{vehicle.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div>make: {vehicle.make ?? ''}</div>
        <div>model: {vehicle.model ?? ''}</div>
        <div>model: {vehicle.model ?? ''}</div>
        <div>year: {vehicle.year ?? ''}</div>
        <div>
          odometer: {vehicle.odometer ?? ''}
          {vehicle.useKm ? 'km' : 'mi'}
        </div>
      </CardContent>
      <CardFooter>
        <CardAction>
            <EditVehicleModal vehicle={vehicle} />
        </CardAction>
      </CardFooter>
    </Card>
  );
};

export default VehicleCard;
