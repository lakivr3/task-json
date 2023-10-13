"use client";

import { useEffect, useState } from "react";
import { DataType, options } from "@/types";
import { CellContext } from "@tanstack/react-table";
import { SingleValue } from "react-select";
import SelectInput from "./CreatebleSelect";
import { NextResponse } from "next/server";
interface Options {
  value: string;
  label: string;
}

export default function Task({
  row,
  column,
  table,
}: CellContext<DataType, any>) {
  const createOption = (label: string) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, ""),
  });

  const { updateData, addRow, updateTask, task, setDataTask } = table.options
    .meta as any;

  const [options, setOptions] = useState<options[]>(task);
  const [taskValue, setTaskValue] = useState<Options | null>();
  // const handleUpdate = (newValue: SingleValue<Options>) => {
  //   updateData(row.index, column.id, newValue);
  //   updateData(row.index, "project", "Dashboard");
  // };
  const handleUpdate = async (newValue: SingleValue<Options>) => {
    updateData(row.index, "project", "Dashboard");
    updateData(row.index, column.id, newValue);
    updateTask(taskValue?.value);

    const response = await fetch(
      `http://localhost:4000/data/${row.original.id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: newValue, project: "Dashboard" }),
      }
    );
    if (response.ok)
      NextResponse.json({ message: `id:${row.original.id}, Edited` });
    else NextResponse.json({ message: "Failed to PUT" });
  };

  const handleCreate = async (inputValue: string) => {
    const newOption = createOption(inputValue);
    setTaskValue(newOption);
    setOptions((prev: any) => [...prev, newOption]);
    updateData(row.index, column.id, newOption);
    await handleUpdate(newOption);

    const Row = row.index + 1;
    if (Row === table.getFilteredRowModel().rows.length) addRow();
  };

  const handleChange = async (newValue: SingleValue<Options>) => {
    setTaskValue(newValue);
    handleUpdate(newValue);
    const Row = row.index + 1;
    if (Row === table.getFilteredRowModel().rows.length) addRow();
  };
  useEffect(() => {
    if (row.original.task === null || row.original.task.value === "") return;
    else setTaskValue(row.original.task);
  }, [row.original.task]);

  return (
    <SelectInput
      isLoading={false}
      handleChange={handleChange}
      handleCreate={handleCreate}
      setOptions={setOptions}
      options={task}
      taskValue={taskValue}
      setTaskValue={setTaskValue}
      row={row.original.project}
    />
  );
}
