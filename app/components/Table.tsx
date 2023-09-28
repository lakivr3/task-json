"use client";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { ReactNode, useState } from "react";
import DATA from "../../data/data";
import { Box } from "@chakra-ui/react";
import EditableCell from "./EditableCell";
import Task from "./Task";
import Done from "./Done";
import TaskTotal from "./TaskTotal";
import Days from "./Days";
import { BsFillPlusSquareFill } from "react-icons/bs";
const columns: Colums[] = [
  {
    accessorKey: "project",
    header: "Project",
    size: 230,

    cell: EditableCell,
  },
  {
    accessorKey: "task",
    header: "Task",
    size: 300,
    cell: Task,
  },
  {
    accessorKey: "mon",
    header: "Mon",
    size: 100,
    cell: Days,
  },
  {
    accessorKey: "tue",
    header: "Tue",
    size: 100,
    cell: Days,
  },
  {
    accessorKey: "wed",
    header: "Wed",
    size: 100,
    cell: Days,
  },
  {
    accessorKey: "thu",
    header: "Thu",
    size: 100,
    cell: Days,
  },
  {
    accessorKey: "fri",
    header: "Fri",
    size: 100,
    cell: Days,
  },
  {
    accessorKey: "sat",
    header: "Sat",
    size: 100,
    cell: Days,
  },
  {
    accessorKey: "sun",
    header: "Sun",
    size: 100,
    cell: Days,
  },
  {
    accessorKey: "done",
    header: "Done",
    cell: Done,
  },
  {
    accessorKey: "tasktotal",
    header: "Task total",

    cell: TaskTotal,
  },
];

export default function Table() {
  // const handleClicked = await() => {}
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
  return (
    <Box>
      <Box className="table" w={table.getTotalSize()}>
        {table.getHeaderGroups().map((headerGroup) => (
          <Box key={headerGroup.id} className="tr">
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
                textAlign="center"
                background={
                  cell.column.columnDef.cell == "mon" ? "gray.500" : ""
                }
                className="td"
                w={cell.column.getSize()}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
      {/* <BsFillPlusSquareFill size="2rem" color="white" /> */}
    </Box>
  );
}