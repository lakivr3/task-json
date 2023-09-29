"use client";
import { Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import DATA from "@/data/data";

export default function EditableCell({ getValue, row, column, table }: Edit) {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);
  const handleChange = async () => {
    // table.options.meta?.updateData(row.index, column.id, value);
    const response = await fetch(`http://localhost:4000/data/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ project: value }),
    });
  };
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={handleChange}
      variant="filled"
      size="sm"
      w="85%"
      overflow="hidden"
      textOverflow="ellipsis"
      whiteSpace="nowrap"
    />
  );
}
