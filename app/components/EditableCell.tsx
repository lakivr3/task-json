"use client";
import { DataType, EditProp } from "@/types";
import { Input } from "@chakra-ui/react";
import { CellContext } from "@tanstack/react-table";
import { useState, useEffect } from "react";

export default function EditableCell({row, column, getValue, table}: CellContext<DataType, any>) {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);
  const {updateData,addRow} = table.options.meta as any
  const handleChange = () => {
    // console.log(column.id)
    // console.log(getValue())
    const Row = row.index + 1
    // if(Row === table.getFilteredRowModel().rows.length ) addRow()
    updateData(row.index, column.id, value)
    // if(row.original.project === "") {
    // }
  };
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);
  
  return (
    <Input
      id={value}
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
