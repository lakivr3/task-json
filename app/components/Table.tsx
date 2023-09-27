"use client";
import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { ReactNode, useState } from "react";
import DATA from "../../data/data";
import { Box } from "@chakra-ui/react";
import EditableCell from "./EditableCell";
import Status from "./Status";
import Date from "./Date";
const columns: Colums[] = [
  {
    accessorKey: "task",
    header: "Task",
    size: 300,
    cell: EditableCell,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: Status,
  },
  {
    accessorKey: "due",
    header: "Due",
    size: 300,
    cell: Date,
  },
  {
    accessorKey: "notes",
    header: "Notes",

    cell: (props: any): any => <p>{props.getValue()}</p>,
  },
];

export default function Table() {
  const [data, setData] = useState(DATA);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    enableColumnResizing: true,
    columnResizeMode: "onChange",
    meta: {
      updateData: (rowIndex: number, columnId: number, value: number) =>
        setData((prev) =>
          prev.map((row, index) =>
            index === rowIndex
              ? {
                  ...prev[rowIndex],
                  [columnId]: value,
                }
              : row
          )
        ),
    },
  });
  //   console.log(data);
  return (
    <Box>
      <Box className="table" w={table.getTotalSize()}>
        {table.getHeaderGroups().map((headerGroup) => (
          <Box key={headerGroup.id} className="tr ">
            {headerGroup.headers.map((header) => (
              <Box key={header.id} className="th" w={header.getSize()}>
                {header.column.columnDef.header as ReactNode}
                <Box
                  onMouseDown={header.getResizeHandler()}
                  onTouchStart={header.getResizeHandler()}
                  className={`resizer ${
                    header.column.getIsResizing() ? ".isResizing" : ""
                  }`}
                />
              </Box>
            ))}
          </Box>
        ))}
        {table.getRowModel().rows.map((row) => (
          <Box key={row.id} className="tr">
            {row.getVisibleCells().map((cell) => (
              <Box
                color="white"
                key={cell.id}
                className="td"
                w={cell.column.getSize()}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
