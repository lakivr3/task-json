import { DataType } from "@/types";
import { Checkbox } from "@chakra-ui/react";
import { CellContext } from "@tanstack/react-table";
import { NextResponse } from "next/server";
import { useState } from "react";

export default function Done({
  getValue,
  table,
  row,
  column,
}: CellContext<DataType, any>) {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);
  const onChange = async () => {
    setValue((prev: boolean) => !prev);
    const response = await fetch(
      `http://localhost:4000/data/${row.original.id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ done: !value }),
      }
    );
    if (response.ok)
      NextResponse.json({ message: `id:${row.original.id}, Edited` });
    else NextResponse.json({ message: "Failed to PUT" });
  };

  if (row.original.project === "") return <></>;

  return (
    <div>
      <Checkbox
        background="whitesmoke"
        onChange={onChange}
        defaultChecked={value}
      />
    </div>
  );
}
