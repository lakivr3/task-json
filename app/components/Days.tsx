"use client";
import { Input } from "@chakra-ui/react";
import { useState, useEffect, ChangeEvent } from "react";
import { DataType } from "@/types";
import { CellContext } from "@tanstack/react-table";

export default function Days({ getValue,  row, column, table }: CellContext<DataType, any> ) {


  const initialValue = getValue();
  let [value, setValue] = useState(initialValue);
  const { updateData } = table.options.meta as any;
  const onBlur = () => {
    const parseValue = parseInt(value)
    if(!isNaN(parseValue)) {
      updateData(row.index, column.id, parseValue)
    }else if(value === ""){
      updateData(row.index, column.id, 0)
    }
      
    console.log(value)
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  };
  
  
  useEffect(() => {
    setValue(initialValue);
    
    
    
  }, [initialValue]);
  return (
    <Input
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
