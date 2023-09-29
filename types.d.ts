type Colums = {
  accessorKey: string;
  header: string;
  size?: number;
  color?: string;
  row?: any;
  cell?: any;
};
type Edit = {
  getValue: any;
  row: Array;
  column: Array;
  table: any;
  setValue: any;
};
