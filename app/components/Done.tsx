import { Checkbox } from "@chakra-ui/react";
import { useState } from "react";

export default function Done({ getValue, table, row, column }: any) {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);
  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value);
  };
  
  return (
    <div>
      <Checkbox
        background="whitesmoke"
        onBlur={onBlur}
        defaultChecked={value}
        onClick={() => setValue((prev: boolean) => !prev)}
      />
    </div>
  );
}
