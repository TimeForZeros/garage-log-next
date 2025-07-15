'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { vehicleSchema, VehicleSchema } from '@/lib/definitions';
import { Switch } from '../ui/switch';
import { addVehicle } from '@/app/actions/vehicles';

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
  const defaultValues = {
    name: vehicle?.name ?? '',
    make: vehicle?.make ?? '',
    model: vehicle?.model ?? '',
    year: (vehicle?.year ?? '').toString(),
    odometer: (vehicle?.odometer ?? '').toString(),
    useKm: !!vehicle?.useKm,
  };
  const vehicleForm = useForm<VehicleSchema>({
    resolver: zodResolver(vehicleSchema),
    defaultValues,
  });

  const onSubmit = async (formData: VehicleSchema) => {
    if (vehicle) {
      const keys: (keyof typeof defaultValues)[] = Object.keys(
        defaultValues,
      ) as (keyof typeof defaultValues)[];
      if (keys.every((key) => defaultValues[key] === formData[key])) {
        // no need to update
      } else {
        // all good to update;
      }
    } else {
      const addedVehicle = await addVehicle(formData);
    }
  };

  return (
    <Form {...vehicleForm}>
      <form onSubmit={vehicleForm.handleSubmit(onSubmit)} className='space-y-2'>
        <FormField
          control={vehicleForm.control}
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
          control={vehicleForm.control}
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
          control={vehicleForm.control}
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
          control={vehicleForm.control}
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
          control={vehicleForm.control}
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
          control={vehicleForm.control}
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
        <div className='flex space-x-1'>
          <Button type='submit'>Submit</Button>
          {vehicle && <Button variant='destructive'>Delete</Button>}
        </div>
      </form>
    </Form>
  );
};

export default AddEditVehicleForm;
