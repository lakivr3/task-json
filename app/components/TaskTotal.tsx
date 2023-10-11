"use client";
import { useState, useEffect, useMemo, use } from "react";
import { DataType, EditProp } from "@/types";
import { CellContext } from "@tanstack/react-table";
import {} from "./Table";
import { NextResponse } from "next/server";

export default function TaskTotal({
  row,
  column,
  table,
  getValue,
}: CellContext<DataType, any>) {
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
  const initialValue = getValue();
  const { updateData } = table.options.meta as any;
  const [value, setValue] = useState(total);

  useEffect(() => {
    // const sum = table.options.data.map((task)=> task)
    const handleUpdate = async () => {
      const res = await fetch(`http://localhost:4000/data/${row.original.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tasktotal: total,
        }),
      });
      if (res.ok) NextResponse.json({ message: "Success" });
      else NextResponse.json({ message: "Failed to PUT" });
    };

    handleUpdate();
  }, [row]);

  if (row.original.project === "") return;
  else return <span>{total}</span>;
}
