import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { AddVehicleForm } from '../forms/add-vehicle-form';

const AddVehicle = () => {
  return (
    <Dialog>
      <DialogTrigger>Add</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Vehicle</DialogTitle>
          {/* <DialogDescription> */}
          {/* </DialogDescription> */}
            <AddVehicleForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddVehicle;
