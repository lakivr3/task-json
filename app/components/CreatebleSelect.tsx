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
  return (
    <CreatableSelect
      styles={taskstyles}
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
