'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { vehicleSchema, VehicleSchema } from '@/lib/definitions';
import { Switch } from '../ui/switch';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const AddEditVehicleForm = ({ vehicle }: { vehicle: VehicleSchema | null }) => {
  const editVehicleForm = useForm<VehicleSchema>({
    resolver: zodResolver(vehicleSchema),
    defaultValues: {
      name: vehicle?.name ?? '',
      make: vehicle?.make ?? '',
      model: vehicle?.model ?? '',
      year: (vehicle?.year ?? '').toString(),
      odometer: (vehicle?.odometer ?? '').toString(),
      useKm: !!vehicle?.useKm,
    },
  });

  const onSubmit = async (formData: VehicleSchema) => {
    const res = await fetch('/api/vehicle', { method: 'POST', body: JSON.stringify(formData) });
    console.log('response', await res.json());
  };

  return (
    <Form {...editVehicleForm}>
      <form onSubmit={editVehicleForm.handleSubmit(onSubmit)} className='space-y-2'>
        <FormField
          control={editVehicleForm.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Name <span className='text-red-500'>*</span>
              </FormLabel>
              <FormControl>
                <Input type='text' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={editVehicleForm.control}
          name='make'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Make</FormLabel>
              <FormControl>
                <Input type='string' {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={editVehicleForm.control}
          name='model'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Model</FormLabel>
              <FormControl>
                <Input type='string' {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={editVehicleForm.control}
          name='year'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Year</FormLabel>
              <FormControl>
                <Input type='text' {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={editVehicleForm.control}
          name='odometer'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Odometer</FormLabel>
              <FormControl>
                <Input type='text' {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={editVehicleForm.control}
          name='useKm'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Use Kilometers</FormLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  // disabled
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
};

export default AddEditVehicleForm;
