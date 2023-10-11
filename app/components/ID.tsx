import { DataType } from "@/types";
import { CellContext } from "@tanstack/react-table";
import { useState } from "react";

export default function ID({
  row,
  column,
  getValue,
  table,
}: CellContext<DataType, any>) {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);
  return <span>{value}</span>;
}
