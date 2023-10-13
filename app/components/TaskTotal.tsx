"use client";
import { useEffect, useMemo } from "react";
import { DataType } from "@/types";
import { CellContext } from "@tanstack/react-table";

export default function TaskTotal({
  row,
  table,
  column,
}: CellContext<DataType, any>) {
  const { updateData } = table.options.meta as any;

  const total = useMemo(() => {
    return (
      row.original.mon +
      row.original.tue +
      row.original.wed +
      row.original.thu +
      row.original.fri +
      row.original.sat +
      row.original.sun
    );
  }, [row]);
  useEffect(() => {
    updateData(row.index, column.id, total);
  }, [total]);

  if (row.original.project === "") return;
  else return <span>{total}</span>;
}
