import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { VehicleSchema } from '@/lib/definitions';
import { Button } from '../ui/button';
import AddEditVehicleForm from '../forms/add-edit-vehicle-form';

const EditVehicleModal = ({ vehicle }: { vehicle: VehicleSchema }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Vehicle</DialogTitle>
          <AddEditVehicleForm vehicle={vehicle} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EditVehicleModal;
