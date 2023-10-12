"use client";

import { SetStateAction, useEffect, useMemo, useState } from "react";
import { DataType, options } from "@/types";
import { CellContext } from "@tanstack/react-table";
import { SingleValue } from "react-select";
import SelectInput from "./CreatebleSelect";
import { TASKS } from "@/data/data";
import TaskHook from "../hooks/taskHook";
import { NextResponse } from "next/server";
interface Options {
  value: string;
  label: string;
}

export default function Task({
  getValue,
  row,
  column,
  table,
}: CellContext<DataType, any>) {
  const createOption = (label: string) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, ""),
  });
  const defaultOptions = useMemo(() => {
    return [
      createOption("Add colors to website"),
      createOption("Build REST"),
      createOption("Blabla"),
    ];
  }, [row.original.project]);

  const { updateData, addRow, updateTask, task, setDataTask } = table.options
    .meta as any;

  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState<options[]>(task);
  const [taskValue, setTaskValue] = useState<Options | null | undefined>();
  // const handleUpdate = (newValue: SingleValue<Options>) => {
  //   updateData(row.index, column.id, newValue);
  //   updateData(row.index, "project", "Dashboard");
  // };
  const handleUpdate = async (newValue: SingleValue<Options>) => {
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
  const handleCreate = (inputValue: string) => {
    setIsLoading(true);
    const Row = row.index + 1;
    if (Row === table.getFilteredRowModel().rows.length) addRow();
    setTimeout(async () => {
      const newOption = createOption(inputValue);
      setIsLoading(false);
      setTaskValue(newOption);
      setOptions((prev: any) => [...prev, newOption]);
      updateData(row.index, column.id, newOption);

      handleUpdate(newOption);
    }, 1000);
  };

  const handleChange = async (newValue: SingleValue<Options>) => {
    setTaskValue(newValue);
    handleUpdate(newValue);

    const Row = row.index + 1;
    // if (Row === table.getFilteredRowModel().rows.length) addRow();

    console.log(options);
    // console.log(row.original.task);
  };
  // useEffect(() => {
  //   const Row = row.index + 1;
  //   if (Row === table.getFilteredRowModel().rows.length)
  //     updateData(row.index, column.id, createOption(row.original.project));
  // }, [row.original.project]);
  // console.log(options);
  useEffect(() => {
    if (row.original.task === null || row.original.task.value === "") return;
    else setTaskValue(row.original.task);
  }, [row.original.task]);

  return (
    <SelectInput
      isLoading={isLoading}
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
