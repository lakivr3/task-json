"use client";

import { ChangeEvent, useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";
import { DataType, EditProp } from "@/types";
import { CellContext } from "@tanstack/react-table";



export default function Task({ getValue, row, column, table }: CellContext<DataType, any>) {
  const data = getValue();
  const [value, setValue] = useState(data);
  const options: any = [{value:"project1", label:"Project1"},
        {value:"project2", label:"Project2"},
        {value:"project3", label:"Project3"}]
  const [task,setTask] = useState('')
  // const { updateData } = table.options.meta;

  const handleChange = () => {
    // updateData(row.index, column.id, value);
    setTask
  };
  return (
    <CreatableSelect
      styles={{
        container: (baseStyles, state) => ({
          ...baseStyles,
          background: "#262626",
          margin: "0.5rem",
          marginLeft: "1rem",
          marginRight: "1rem",
        }),
        input: (baseStyles, state) => ({
          ...baseStyles,

          color: "#fff",
        }),
        placeholder: (baseStyle, state) => ({
          ...baseStyle,
          color: "#fff",
          textAlign: "start",
        }),
        singleValue: (baseStyle, state) => ({
          ...baseStyle,
          color: "#fff",
          textAlign: "start",
        }),

        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: state.isFocused ? "gray" : "transparent",
          backgroundColor: "transparent",
        }),
        option: (baseStyles, state) => ({
          ...baseStyles,
          background: state.isFocused ? "#262626" : "#404040",
        }),
      }}
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
      options={options}
      
    />
  );
}
