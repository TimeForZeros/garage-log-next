import { Card, CardContent, CardTitle, CardDescription, CardHeader } from '@/components/ui/card';

// todo define tihs one
const VehicleCard = (vehicle: any) => (
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
  </Card>
);

export default VehicleCard