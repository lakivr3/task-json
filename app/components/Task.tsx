"use client";
import { STATUSES } from "@/data/data";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  background,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import CreatableSelect from "react-select/creatable";

const ColorIcon = ({ color, ...props }: { color: string }) => {
  return <Box w="12px" h="12px" bg={color} borderRadius="3px" {...props}></Box>;
};

export default function Task({ getValue, row, column, table }: Edit) {
  const { data } = getValue();
  const [value, setValue] = useState(data);
  const { updateData } = table.options.meta;
  const options = [
    { value: "Project1", label: "Project1" },
    { value: "Project2", label: "Project2" },
    { value: "Project3", label: "Project3" },
  ];
  console.log(data);
  return (
    <CreatableSelect
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          background: "#262626",

          borderColor: state.isFocused ? "grey" : "black",
        }),
      }}
      isClearable
      onChange={() => getValue(value)}
      options={value}
    />
  );
}
