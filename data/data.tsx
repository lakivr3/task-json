import { DataType } from "@/types";

type Task = {
  value: string;
  label: string;
};



const DATA: DataType[] = [
  {
    project: "Dashboard",
    task: '',
    mon: 1,
    tue: 1,
    wed: 2,
    thu: 3,
    fri: 0,
    sat: 0,
    sun: 0,
    done: false,
    tasktotal:''
  },
  {
    project: "Dashboard",
    task: '',
    mon: 0,
    tue: 0,
    wed: 0,
    thu: 0,
    fri: 0,
    sat: 0,
    sun: 0,
    done: true,
    tasktotal:''
  },
  {
    project: "Dashboard",
    task: '',
    mon: 0,
    tue: 0,
    wed: 0,
    thu: 0,
    fri: 0,
    sat: 0,
    sun: 0,
    done: false,
    tasktotal:''
  },
  {
    project: "",
    task: '',
    mon: 0,
    tue: 0,
    wed: 0,
    thu: 0,
    fri: 0,
    sat: 0,
    sun: 0,
    done: true,
    tasktotal:''
  },
];

export default DATA;
