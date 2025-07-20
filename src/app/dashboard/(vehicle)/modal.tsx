"use client"

import React, { useState } from 'react';
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
  const [open, setOpen] = useState(false)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>{actionType}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{actionType} Vehicle</DialogTitle>
          {/* <DialogDescription> */}
          {/* </DialogDescription> */}
          <AddEditVehicleForm vehicle={vehicle} closeModal={() =>setOpen(false)} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default VehicleModal;
