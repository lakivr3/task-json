import { useState, useEffect } from "react";

export default function DaysHook() {
  const [total, setTotal] = useState(0);
  return { total, setTotal };
}
