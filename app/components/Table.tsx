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
import { ReactNode, useEffect, useState } from "react";
import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react";
import EditableCell from "./EditableCell";
import Task from "./Task";
import Done from "./Done";
import TaskTotal from "./TaskTotal";
import Days from "./Days";
import { DATA, TASKS } from "@/data/data";
import { DataType, columnFilters } from "@/types";
import Filters from "./Filters";
import DataJSON from "@/_data/db.json";
import ID from "./ID";
import { NextResponse } from "next/server";

const columns: ColumnDef<DataType, any>[] = [
  {
    accessorKey: "id",
    header: "Id",
    size: 10,

    cell: ID,
  },
  {
    accessorKey: "project",
    header: "Project",
    size: 200,

    cell: EditableCell,
  },
  {
    accessorKey: "task",
    header: "Task",
    size: 280,
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
  const [data, setData] = useState(DataJSON.data);
  const [newData, setNewData] = useState(DATA);
  const [columnFilters, setColumnFilters] = useState<columnFilters[]>([]);
  const [dataTask, setDataTask] = useState(TASKS);
  const handleUpdate = async () => {
    const response = await fetch(`http://localhost:4000/data`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        project: "",
        task: { value: "", label: "" },
        mon: 0,
        tue: 0,
        wed: 0,
        thu: 0,
        fri: 0,
        sat: 0,
        sun: 0,
        done: false,
        tasktotal: 0,
      }),
    });
    if (response.ok) NextResponse.json({ message: "Posted" });
    else NextResponse.json({ message: "Failed to POST" });
  };

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
      updateTask: (value: string) => {
        setDataTask((prev) => prev.filter((task) => task.value !== value));
      },
      task: dataTask,
      setDataTask: (value: any) => {
        setDataTask(value);
      },
      newData: newData,

      updateData: (
        rowIndex: number | string,
        columnId: number | string,
        value: number | string
      ) =>
        setNewData((prev) =>
          prev.map((row, index) =>
            index === rowIndex
              ? {
                  ...prev[rowIndex],
                  [columnId]: value,
                }
              : row
          )
        ),

      addRow: () => handleUpdate(),
    },
  });
  useEffect(() => {
    const map = data.map((array: DataType) => array.task?.value);
    const filter = TASKS.filter(
      (x: { value: string; label: string }) => !map.includes(x.value)
    );
    setDataTask(filter);
  }, [dataTask, DataJSON.data]);
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
