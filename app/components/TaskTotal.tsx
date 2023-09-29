"use client";
import { useState, useEffect } from "react";
import DaysHook from "../hooks/DaysHook";

export default function TaskTotal({ getValue, row, column, table }: any) {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);
  const { updateData } = table.options.meta;


  // filter = data.filter((element: any) => typeof element === "number");

  return <span>{value}</span>;
}
