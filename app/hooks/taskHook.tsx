import { useState } from "react";
interface Options {
  value: string;
  label: string;
}

export default function taskHook() {
  const createOption = (label: string) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, ""),
  });
  const defaultOptions = [
    createOption("Add colors to website"),
    createOption("Build REST"),
    createOption("Blabla"),
  ];
  const [options, setOptions] = useState(defaultOptions);
  return { options, setOptions };
}
