const createVehicleSlice = (set: any) => ({
  isModalOpen: false,
  vehicleList: [],
  updateVehicleList: (updatedList: any[]) =>
    set({
      vehicleList: updatedList,
    }),
});

export default createVehicleSlice;
