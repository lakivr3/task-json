import { useState, useEffect } from "react";
import DataRow from "@/_data/db.json";

export default function DaysHook() {
  const [total, setTotal] = useState([1, 2]);
  // const sumDays = total.reduce((a, b) => a + b);

  return { total, setTotal };
}
