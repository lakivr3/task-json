"use client"

import { Center } from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {forwardRef} from 'react'
 
// const DateCustomInput = forwardRef(({value, onClick},ref)) => (
//   <Center ref={ref} onClick={onClick} cursor="pointer">
//     {value}
//   </Center>
// );

export default function Date({ getValue, row, column, table }: any) {
  const date = getValue();
  const { updateData } = table.options.meta;
  return (
    <DatePicker

      wrapperClassName="date-wrapper"
      dateFormat="MMM d"
      selected={date}
    //   customInput={<DateCustomInput />}
      onChange={(date) => updateData(row.index, column.id, date)}
      
    />
  ); 
}
