"use client";
import { Input } from "@chakra-ui/react";
import { useState, useEffect, ChangeEvent, useMemo } from "react";
import { DataType } from "@/types";
import { CellContext, getCoreRowModel } from "@tanstack/react-table";
import { NextResponse } from "next/server";
import Data from "../../_data/db.json";

export default function Days({
  getValue,
  row,
  column,
  table,
}: CellContext<DataType, any>) {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);
  const [total, setTotal] = useState(Data.data);

  const [final, setFinal] = useState(0);
  const { updateData } = table.options.meta as any;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue, Data.data]);

  const onBlur = async () => {
    const parseValue = parseInt(value);
    console.log(total[row.index]);

    if (!isNaN(parseValue)) {
      updateData(row.index, column.id, parseValue);

      const response = await fetch(
        `http://localhost:4000/data/${row.original.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            [`${column.id}`]: parseValue,
          }),
        }
      );
      if (response.ok)
        NextResponse.json({ message: `id:${row.original.id}, Edited` });
      else NextResponse.json({ message: "Failed to PUT" });
      updateData(row.index, column.id, parseValue);
    } else if (value === "") {
      updateData(row.index, column.id, 0);

      const response0 = await fetch(
        `http://localhost:4000/data/${row.original.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ [`${column.id}`]: 0 }),
        }
      );
      if (response0.ok)
        NextResponse.json({ message: `id:${row.original.id}, Edited` });
      else NextResponse.json({ message: "Failed to PUT" });
      console.log(total);
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
