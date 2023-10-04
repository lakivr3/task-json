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
    get tasktotal() {
      return this.mon + this.tue + this.wed + this.thu + this.fri + this.sat + this.sun
    }
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
    get tasktotal() {
      return this.mon + this.tue + this.wed + this.thu + this.fri + this.sat + this.sun
    }
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
    get tasktotal() {
      return this.mon + this.tue + this.wed + this.thu + this.fri + this.sat + this.sun
    }
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
    get tasktotal() {
      return this.mon + this.tue + this.wed + this.thu + this.fri + this.sat + this.sun
    }
  },
];

export default DATA;
