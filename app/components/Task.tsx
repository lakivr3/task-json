"use client";

import { ChangeEvent,  useEffect, useMemo, useState } from "react";
import CreatableSelect from "react-select/creatable";
import { DataType, EditProp, TData } from "@/types";
import { CellContext, TableMeta } from "@tanstack/react-table";
import { SingleValue } from "react-select";
import taskHook from "../hooks/taskHook";
import taskstyles from "../theme/taskStyles";
import CreatebleSelect from "./CreatebleSelect";
interface Options  {
  value:string,
  label:string,
}


export default function Task({ getValue, row, column, table }: CellContext<DataType, any>) {
  const createOption = (label: string) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, '')
  })
  const defaultOptions = useMemo(()=>{
    return [
      createOption('Add colors to website'),
      createOption('Build REST'),
      createOption('Blabla'),
      
      
    ]
  }, [row.original.project]) 
  
 


  const data = getValue();
  const [value, setValue] = useState(data);
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(defaultOptions);
  const [taskValue,setTaskValue] = useState<Options | null>()
  // const {options,setOptions} = taskHook()

  
  const { updateData,addRow } = table.options.meta as any

  useEffect(()=> {
    const Row = row.index + 1
    if(Row === table.getFilteredRowModel().rows.length) 
    updateData(row.index,column.id, createOption(row.original.project))
  },[row.original.project])
  
  // console.log(table.initialState.globalFilter)
  // console.log(table.getRow("1"))
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
  
    
    const handleChange = (newValue: SingleValue<Options>) => { 
      const Row = row.index + 1
      if(Row === table.getFilteredRowModel().rows.length && row.original.project.length > 1 ) addRow()
      updateData(row.index, column.id, value)
      setTaskValue(newValue)
      updateData(row.index,column.id, newValue)
      // console.log(row.original.task)
      
     
        const filter2 = defaultOptions.filter((opt:any)=> opt.value !== newValue?.value)
        setOptions(filter2)
        console.log(row.original.task)
  
        
  
      
      
      
      
    }
    
     
    return (

        <CreatebleSelect isLoading={isLoading} handleChange={handleChange} handleCreate={handleCreate} options={options} taskValue={taskValue} setTaskValue={setTaskValue} row={row.original.project}  />
  );
}
