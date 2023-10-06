import React, { SetStateAction, useEffect } from "react";
import CreatableSelect from "react-select/creatable";
import taskstyles from "../theme/taskStyles";
import { Options, SingleValue } from "react-select";
import { DataType, SelectProps, options } from "@/types";
import { Row } from "@tanstack/react-table";

export default function CreatebleSelect({
  isLoading,
  handleChange,
  handleCreate,
  options,
  taskValue,
}: SelectProps) {
  const { container, control, input, option, placeholder, singleValue } =
    taskstyles;

  return (
    <CreatableSelect
      styles={{ container, control, input, option, placeholder, singleValue }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary50: "neutral10",
          primary25: "neutral150",
          primary: "neutral150",
        },
      })}
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
