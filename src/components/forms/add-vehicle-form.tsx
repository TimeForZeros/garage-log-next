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

export const AddVehicleForm = () => {
  const addVehicleForm = useForm<VehicleSchema>({
    resolver: zodResolver(vehicleSchema),
    defaultValues: {
      name: '',
      make: '',
      model: '',
      year: 0,
      odometerMiles: 0,
      useKm: false,

    }
  });
  const onSubmit = (evt) => {
    console.log(evt);
  };

  return (
    <Form {...addVehicleForm}>
      <form onSubmit={addVehicleForm.handleSubmit(onSubmit)} className='space-y-2'>
        <FormField
          control={addVehicleForm.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input type='text' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={addVehicleForm.control}
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
          control={addVehicleForm.control}
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
          control={addVehicleForm.control}
          name='year'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Year</FormLabel>
              <FormControl>
                <Input type='number' {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={addVehicleForm.control}
          name='odometerMiles'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Odometer</FormLabel>
              <FormControl>
                <Input type='number' {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        
        <FormField
          control={addVehicleForm.control}
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
