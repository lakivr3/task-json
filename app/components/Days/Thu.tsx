"use client";
import { Input } from "@chakra-ui/react";
import { useState, useEffect, ChangeEvent } from "react";
import { DataType } from "@/types";
import { CellContext } from "@tanstack/react-table";
import { NextResponse } from "next/server";

export default function Thu({
  getValue,
  row,
  column,
  table,
}: CellContext<DataType, any>) {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);
  // const [columnID, setColumnID] = useState(column.id);
  const { updateData } = table.options.meta as any;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  const onBlur = async () => {
    const columnID = column.id;
    const parseValue = parseInt(value);
    console.log(columnID, value);

    if (!isNaN(parseValue)) {
      // updateData(row.index, column.id, parseValue);

      const response = await fetch(
        `http://localhost:4000/data/${row.original.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ thu: parseValue }),
        }
      );
      if (response.ok)
        NextResponse.json({ message: `id:${row.original.id}, Edited` });
      else NextResponse.json({ message: "Failed to PUT" });
    } else if (value === "") {
      const response0 = await fetch(
        `http://localhost:4000/data/${row.original.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ thu: 0 }),
        }
      );
      if (response0.ok)
        NextResponse.json({ message: `id:${row.original.id}, Edited` });
      else NextResponse.json({ message: "Failed to PUT" });
    }
  };

  if (row.original.project === "") return;
  else
    return (
      <Input
        type="number"
        value={value === 0 ? "" : value}
        onChange={handleChange}
        onBlur={onBlur}
        textAlign="center"
        variant="filled"
        size="sm"
        w="80%"
        overflow="hidden"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
      />
    );
}
