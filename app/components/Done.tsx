import { DataType, TData } from "@/types";
import { Checkbox } from "@chakra-ui/react";
import { CellContext, TableMeta } from "@tanstack/react-table";
import { useState } from "react";

export default function Done({ getValue, table, row, column }: CellContext<DataType, any>) {
  const initialValue = getValue();
  const {updateData} = table.options.meta as any 
  const [value, setValue] = useState(initialValue);
  const onChange = () => {
    setValue((prev:boolean)=> !prev)
    updateData(row.index,column.id, !value) 
  };
  
  return (
    <div>
      <Checkbox
        background="whitesmoke"
        onChange={onChange}
        defaultChecked={false}
        
      />
    </div>
  );
}
