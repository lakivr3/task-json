"use client";

import { useEffect, useMemo, useState } from "react";
import { DataType } from "@/types";
import { CellContext } from "@tanstack/react-table";
import { SingleValue } from "react-select";
import SelectInput from "./CreatebleSelect";
import { TASKS } from "@/data/data";
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

  const { updateData, addRow } = table.options.meta as any;

  const data = getValue();
  const [value, setValue] = useState(data);
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(TASKS);
  const [taskValue, setTaskValue] = useState<Options | null | undefined>();

  const handleCreate = (inputValue: string) => {
    setIsLoading(true);
    const Row = row.index + 1;
    if (Row === table.getFilteredRowModel().rows.length) addRow();
    setTimeout(() => {
      const newOption = createOption(inputValue);
      setIsLoading(false);
      setTaskValue(newOption);
      setOptions((prev) => [...prev, newOption]);
      updateData(row.index, column.id, newOption);
      updateData(row.index, "project", newOption.label);
    }, 1000);
  };

  const handleChange = (newValue: SingleValue<Options>) => {
    const Row = row.index + 1;
    if (Row === table.getFilteredRowModel().rows.length) addRow();
    setTaskValue(newValue);
    updateData(row.index, column.id, newValue);
    updateData(row.index, "project", newValue?.label);

    const fil = defaultOptions.filter((opt) => opt.value !== newValue?.value);
    setOptions(fil);

    console.log(row.original.task);
  };
  useEffect(() => {
    const Row = row.index + 1;
    if (Row === table.getFilteredRowModel().rows.length)
      updateData(row.index, column.id, createOption(row.original.project));
  }, [row.original.project]);

  return (
    <SelectInput
      isLoading={isLoading}
      handleChange={handleChange}
      handleCreate={handleCreate}
      setOptions={setOptions}
      options={options}
      taskValue={taskValue}
      setTaskValue={setTaskValue}
      row={row.original.project}
    />
  );
}
