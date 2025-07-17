'use client';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import VehicleCard from './card';
import { useMemo } from 'react';
import { getAllVehicles } from '@/app/actions/vehicles';
import { useQuery } from '@tanstack/react-query';
import { VehicleSchema } from '@/lib/definitions';
import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import useStore from '@/stores';

type StoreType = {
  updateVehicleList: (vehicles: any[]) => void;
  vehicleList: any[];
  vehiclesList?: any[]; // Remove or adjust if not needed
};

const useVehicles = () => {
  const getVehicles = async () => {
    const vehicles = await getAllVehicles();
    return vehicles ?? [];
  };
  return useQuery({ queryKey: ['vehicles'], queryFn: getVehicles });
};

const VehicleTable = () => {
  const { isPending, data } = useVehicles();
  console.log(isPending, data);
  const columnHelper = createColumnHelper<VehicleSchema>();
  const store = useStore() as StoreType;
  const columns = useMemo(
    () => [
      columnHelper.accessor('name', {
        header: 'Name',
        cell: (info) => info.getValue(),
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor('make', {
        header: 'Make',
        cell: (info) => info.getValue(),
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor('model', {
        header: 'Model',
        cell: (info) => info.getValue(),
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor('year', {
        header: 'Year',
        cell: (info) => info.getValue(),
        footer: (info) => info.column.id,
      }),
      columnHelper.accessor('odometer', {
        header: 'Odometer',
        cell: (info) => info.getValue(),
        // footer: (info) => info.column.id,
      }),
      columnHelper.accessor('useKm', {
        header: 'Units',
        cell: (info) => (info.getValue() ? 'km' : 'mi'),
        footer: (info) => info.column.id,
      }),
    ],
    [columnHelper],
  );
  const table = useReactTable<VehicleSchema>({
    columns,
    data: data || [],
    getCoreRowModel: getCoreRowModel(),
  });

  if (isPending || !data) {
    return <span>Loading...</span>;
  }
  console.log(data);

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(header.column.columnDef.header, header.getContext())}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
          {table.getFooterGroups().map((footerGroup) => (
            <TableRow key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.footer, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableFooter> */}
    </Table>
  );
  return <div className='max-w-[30em]'>{store.vehicleList.map(VehicleCard)}</div>;
};

export default VehicleTable;
