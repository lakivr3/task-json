"use client";
import { Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import DaysHook from "../hooks/DaysHook";

export default function Days({ getValue, row, column, table }: any) {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);
  const { total, setTotal } = DaysHook();
  const { updateData } = table.options.meta;
  console.log(initialValue);
  useEffect(() => {
    setTotal(initialValue);
  });
  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);
  };
  console.log(total);
  return (
    <Input
      value={value === 0 ? "" : value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
      textAlign="center"
      variant="filled"
      size="sm"
      w="85%"
      overflow="hidden"
      textOverflow="ellipsis"
      whiteSpace="nowrap"
    />
  );
}
