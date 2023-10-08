"use client";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
  Table,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import { ReactNode, useMemo, useState } from "react";
import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react";
import EditableCell from "./EditableCell";
import Task from "./Task";
import Done from "./Done";
import TaskTotal from "./TaskTotal";
import Days from "./Days";
import DATA from "@/data/data";
import { DataType, columnFilters } from "@/types";
import Filters from "./Filters";
import TaskHook from "../hooks/taskHook";

const columns: ColumnDef<DataType, any>[] = [
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
    enableSorting: false,
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
    enableSorting: false,

    size: 5,
    cell: Done,
  },
  {
    accessorKey: "tasktotal",
    header: "Task total",
    cell: TaskTotal,
  },
];

export default function Table() {
  const [data, setData] = useState(DATA);
  const [columnFilters, setColumnFilters] = useState<columnFilters[]>([]);
  let [paginate, setPaginate] = useState(0);
  // const [options, setOptions] = useState(defaultOptions)

  //////
  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    columnResizeMode: "onChange",
    autoResetPageIndex: false,
    meta: {
      updateData: (
        rowIndex: number | string,
        columnId: number | string,
        value: number | string
      ) =>
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
      addRow: () => {
        const newRow: DataType = {
          project: "",
          task: "",
          mon: 0,
          tue: 0,
          wed: 0,
          thu: 0,
          fri: 0,
          sat: 0,
          sun: 0,
          done: false,
          tasktotal: 0,
        };
        setData((prev) => [...prev, newRow]);
      },
    },
  });

  // console.log(data)
  return (
    <Box>
      <Filters
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
      />
      <Box className="table" w={table.getTotalSize()}>
        {table.getHeaderGroups().map((headerGroup) => (
          <Box key={headerGroup.id} className="tr">
            {headerGroup.headers.map((header) => (
              <Box key={header.id} className="th" w={header.getSize()}>
                {header.column.columnDef.header as ReactNode}

                {header.column.getCanSort() &&
                header.column.getIsSorted() === false ? (
                  <FaSort onClick={header.column.getToggleSortingHandler()} />
                ) : header.column.getCanSort() &&
                  header.column.getIsSorted() === "asc" ? (
                  <FaSortDown
                    onClick={header.column.getToggleSortingHandler()}
                  />
                ) : (
                  header.column.getCanSort() && (
                    <FaSortUp
                      onClick={header.column.getToggleSortingHandler()}
                    />
                  )
                )}
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
      <br />
      <Text ml={1.5}>
        Page {table.getState().pagination.pageIndex + 1} of{" "}
        {table.getPageCount()}
      </Text>
      <ButtonGroup ml={1}>
        <Button
          onClick={() => table.previousPage()}
          isDisabled={!table.getCanPreviousPage()}
        >
          {"<"}
        </Button>
        <Button
          onClick={() => table.nextPage()}
          isDisabled={!table.getCanNextPage()}
        >
          {">"}
        </Button>
      </ButtonGroup>
    </Box>
  );
}
