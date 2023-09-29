"use client";

import { Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import CreatableSelect from "react-select/creatable";

const ColorIcon = ({ color, ...props }: { color: string }) => {
  return <Box w="12px" h="12px" bg={color} borderRadius="3px" {...props}></Box>;
};

export default function Task({ getValue, row, column, table }: Edit) {
  const data = getValue();
  const [value, setValue] = useState(data);
  const { updateData } = table.options.meta;

  const colorStyless = {};

  const handleChange = () => {
    updateData(row.index, column.id, value);
    console.log(updateData());
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
      onChange={handleChange}
      options={value}
    />
  );
}
