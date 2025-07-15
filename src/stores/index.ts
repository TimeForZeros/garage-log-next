import { create } from 'zustand';
import createVehicleSlice from './vehicle-slice';

const useStore = create((set) => ({
  ...createVehicleSlice(set),
}));

export default useStore;
