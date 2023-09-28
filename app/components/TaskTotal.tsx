import { useState, useEffect } from "react";

export default function TaskTotal({ getValue, row, column, table }: any) {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);
  const { updateData } = table.options.meta;

  return <span>{value}</span>;
}
