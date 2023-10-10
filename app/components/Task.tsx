"use client";

import { SetStateAction, useEffect, useMemo, useState } from "react";
import { DataType, options } from "@/types";
import { CellContext } from "@tanstack/react-table";
import { SingleValue } from "react-select";
import SelectInput from "./CreatebleSelect";
import { TASKS } from "@/data/data";
import TaskHook from "../hooks/taskHook";
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
  const { newOptions, setNewOptions } = TaskHook();

  const handleCreate = (inputValue: string) => {
    setIsLoading(true);
    const Row = row.index + 1;
    if (Row === table.getFilteredRowModel().rows.length) addRow();
    setTimeout(() => {
      const newOption = createOption(inputValue);
      setIsLoading(false);
      setTaskValue(newOption);
      setOptions((prev: any) => [...prev, newOption]);
      updateData(row.index, column.id, newOption);
    }, 1000);
  };
  const handleUpdate = (newValue: SingleValue<Options>) => {
    updateData(row.index, column.id, newValue);
    updateData(row.index, "project", "Dashboard");

    updateTask(taskValue?.value);
  };

  const handleChange = (newValue: SingleValue<Options>) => {
    const Row = row.index + 1;
    if (Row === table.getFilteredRowModel().rows.length) addRow();
    if (row.original.task === null) {
      updateData(row.index, column.id, taskValue);
    }
    setTaskValue(newValue);
    handleUpdate(newValue);
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
    console.log(task);
  }, [taskValue?.value]);

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
