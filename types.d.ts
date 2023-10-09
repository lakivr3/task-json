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
    addRow: () => void
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
interface options  {
  value:string,
  label:string,
}
type SelectProps = {
  isLoading: boolean,
  handleChange: (newValue: SingleValue<any>) => void,
  handleCreate: (inputValue: string) => void,
  options: {
      value:string,
      label:string,
  }[],
  taskValue: options | null | undefined | string,
  setTaskValue: (value: SetStateAction<options | null | undefined>) => void
  row: string  
  setOptions:any
  
}
type columnFilters =  {
  id: string,
  value: string
}
