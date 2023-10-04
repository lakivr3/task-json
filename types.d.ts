import { Column, Row, Table } from "@tanstack/react-table";
type DataType = {
  project: string;
  task: string;
  mon: number;
  tue: number;
  wed: number;
  thu: number;
  fri: number;
  sat: number;
  sun: number;
  done: boolean;
  tasktotal?: number;
};
type TData = {
  data: DataType[];
  columns: Colums[];
  getCoreRowModel: any;
  columnResizeMode: string;
  meta: {
    updateData: (rowIndex: number | string, columnId: number | string, value: number | string)=> any
  }
  
}
type Colums = {
  accessorKey: string;
  header: string;
  size?: number;
  color?: string;
  row?: any;
  cell?: any;
};
type EditProp = {
  getValue: () => any;
  getColumn: (id: string) => Column<TData> | undefined
  row: Row <TData>;
  column: Column<TData>; 
  table: TData<Table>;
}
