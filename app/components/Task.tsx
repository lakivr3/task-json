"use client";

import { ChangeEvent, useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";
import { DataType, EditProp, TData } from "@/types";
import { CellContext, TableMeta } from "@tanstack/react-table";
interface Options  {
  value:string,
  label:string,
}


export default function Task({ getValue, row, column, table }: CellContext<DataType, any>) {
  const createOption = (label: string) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, '')
  })

  const defaultOptions = [
    createOption('Add colors to website'),
    createOption('Build REST'),
    createOption('Blabla'),
  ]


  const data = getValue();
  const [value, setValue] = useState(data);
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(defaultOptions);
  const [taskValue,setTaskValue] = useState<Options | null>()

  
  const { updateData } = table.options.meta as any

  const handleCreate = (inputValue: string) => {
    setIsLoading(true)
    setTimeout(()=> {
      const newOption = createOption(inputValue)
      setIsLoading(false)
      setTaskValue(newOption)
      setOptions((prev)=> [...prev,newOption])
      updateData(row.index, column.id, newOption)
      
    },1000)
    
  }

  // const handleChange = (e: ChangeEvent<HTMLOptionElement>) => {
    
  //   updateData(row.index, column.id, value);
  // };
  return (
    <CreatableSelect
      styles={{
        container: (baseStyles) => ({
          ...baseStyles,
          background: "#262626",
          margin: "0.5rem",
          marginLeft: "1rem",
          marginRight: "1rem",
        }),
        input: (baseStyles) => ({
          ...baseStyles,

          color: "#fff",
        }),
        placeholder: (baseStyle) => ({
          ...baseStyle,
          color: "#fff",
          textAlign: "start",
        }),
        singleValue: (baseStyle) => ({
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
      isDisabled={isLoading}
      isLoading={isLoading}
      onChange={(newValue) => {setTaskValue(newValue);updateData(row.index, column.id, newValue)}}
      onCreateOption={handleCreate}
      options={options}
      value={taskValue}
      
    />
  );
}
