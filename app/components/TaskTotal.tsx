"use client";
import { useMemo } from "react";
import { DataType } from "@/types";
import { CellContext } from "@tanstack/react-table";

export default function TaskTotal({ row }: CellContext<DataType, any>) {
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

  if (row.original.project === "") return;
  else return <span>{total}</span>;
}
