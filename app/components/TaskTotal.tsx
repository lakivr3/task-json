"use client";
import { useState, useEffect, useMemo } from "react";
import DaysHook from "../hooks/DaysHook";
import { DataType, EditProp } from "@/types";
import { CellContext } from "@tanstack/react-table";
import {  } from "./Table";

export default function TaskTotal({row}: CellContext<DataType, any>) {
  // const initialValue = getValue();
  // let [value, setValue] = useState(initialValue);
  // const {total,setTotal} = DaysHook()
  // const {updateData} = table.options.meta

  // useEffect(() => {
  //   updateData(row.index, column.id, parseInt(value));
  //   setValue(initialValue);
  // }, [initialValue]);

  const a = useMemo(()=> {
    return row.original.mon
  }, [row])

  return <span>{a}</span>;
}
