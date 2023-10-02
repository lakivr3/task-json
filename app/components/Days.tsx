"use client";
import { Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import DaysHook from "../hooks/DaysHook";
import { DataType } from "@/types";
import { CellContext } from "@tanstack/react-table";

export default function Days({ getValue,  row, column, table }: CellContext<DataType, any> ) {


  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);
  const { total, setTotal } = DaysHook();
  // const { updateData } = table.options.meta;
  const onBlur = () => {
    // updateData(row.index, column.id, parseInt(value));
    
    
  };
  useEffect(() => {
    setValue( initialValue);
  }, [initialValue]);
  return (
    <Input
      value={value === 0 ? "" : parseInt(value)}
      onChange={(e) => setValue(e.target.value)}
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
