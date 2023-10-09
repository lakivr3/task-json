import React, { SetStateAction, useEffect, useMemo } from "react";
import CreatableSelect from "react-select/creatable";
import { taskstyles, theme } from "../theme/taskStyles";
import { Options, SingleValue } from "react-select";
import { DataType, SelectProps, options } from "@/types";
import { Row } from "@tanstack/react-table";

export default function SelectInput({
  isLoading,
  handleChange,
  handleCreate,
  options,
  taskValue,
  setOptions,
}: SelectProps) {
  const { container, control, input, option, placeholder, singleValue } =
    taskstyles;

  return (
    <CreatableSelect
      styles={{ container, control, input, option, placeholder, singleValue }}
      theme={theme}
      isClearable
      isDisabled={isLoading}
      isLoading={isLoading}
      onChange={handleChange}
      onCreateOption={handleCreate}
      options={options}
      value={taskValue}
      instanceId="refSelect"
    />
  );
}
