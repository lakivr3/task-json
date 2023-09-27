"use client";
import { STATUSES } from "@/data/data";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useState } from "react";
import { Box } from "@chakra-ui/react";

const ColorIcon = ({ color, ...props }: { color: string }) => {
  return <Box w="12px" h="12px" bg={color} borderRadius="3px" {...props}></Box>;
};

export default function Status({ getValue, row, column, table }: any) {
  const { name, color } = getValue("") || {};
  const [value, setValue] = useState("");
  const { updateData } = table.options.meta;

  return (
    <Menu isLazy offset={[0, 0]} flip={false} autoSelect={false}>
      <MenuButton
        h="100%"
        w="100%"
        textAlign="left"
        bg={color || "transparent"}
        color="gray.900"
      >
        {name}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => updateData(row.index, column.id, null)}>
          <ColorIcon color="red.400" />
          None
        </MenuItem>
        {STATUSES.map((status) => (
          <MenuItem
            key={status.id}
            onClick={() => updateData(row.index, column.id, status)}
          >
            <ColorIcon color={status.color} />
            {status.name}
          </MenuItem>
        ))}

        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          variant="filled"
          size="sm"
          w="85%"
          overflow="hidden"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
        />
      </MenuList>
    </Menu>
  );
}
