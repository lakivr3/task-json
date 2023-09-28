import { useState,useEffect } from "react";
export default function DaysHook() {
  const [hours, setHours] = useState({
    mon: null,
    tue: null,
    wed: null,
    thu: null,
    fri: null,
    sat: null,
    sun: null,
  });
  
  
  return {hours, setHours};
}
