"use client";
import { DataType, EditProp, TData } from "@/types";
import { Input } from "@chakra-ui/react";
import { CellContext, TableMeta } from "@tanstack/react-table";
import { useState, useEffect } from "react";
import { NextResponse } from "next/server";
import { data } from "@/_data/db.json";

export default function EditableCell({
  row,
  column,
  getValue,
  table,
}: CellContext<DataType, any>) {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);
  const { updateData } = table.options.meta as any;
  const handleChange = () => {};

  const handleUpdate = async () => {
    updateData(row.index, column.id, value);

    const response = await fetch(
      `http://localhost:4000/data/${row.original.id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ project: value }),
      }
    );
    if (response.ok)
      NextResponse.json({ message: `id:${row.original.id}, Edited` });
    else NextResponse.json({ message: "Failed to PUT" });
  };
  useEffect(() => {
    setValue(row.original.project);
  }, [row.original.project]);

  return (
    <Input
      id={value}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={handleUpdate}
      variant="filled"
      size="sm"
      w="85%"
      overflow="hidden"
      textOverflow="ellipsis"
      whiteSpace="nowrap"
    />
  );
}
