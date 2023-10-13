import { DataType } from "@/types";
import { CellContext } from "@tanstack/react-table";

export default function ID({ getValue }: CellContext<DataType, any>) {
  return <span>{getValue()}</span>;
}
