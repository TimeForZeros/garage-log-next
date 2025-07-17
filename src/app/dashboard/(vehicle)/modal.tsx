import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../../../components/ui/button';
import { vehicleSchema, VehicleSchema } from '@/lib/definitions';
import AddEditVehicleForm from './form';

const VehicleModal = ({ vehicle }: { vehicle: VehicleSchema | null }) => {
  const actionType = vehicle ? 'Edit' : 'Add';
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>{actionType}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{actionType} Vehicle</DialogTitle>
          {/* <DialogDescription> */}
          {/* </DialogDescription> */}
          <AddEditVehicleForm vehicle={vehicle} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default VehicleModal;
