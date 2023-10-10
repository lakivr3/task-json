import { useState } from "react";
interface Options {
  value: string;
  label: string;
}

export default function TaskHook() {
  const [newOptions, setNewOptions] = useState([]);
  return { newOptions, setNewOptions };
}
