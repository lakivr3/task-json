import { DataType } from "@/types";

const createOption = (label: string) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ""),
});
const defaultOptions = [
  createOption("Add colors to website"),
  createOption("Build REST"),
  createOption("Blabla"),
];

const TASKS = defaultOptions;

const DATA = [
  {
    project: "Dashboard",
    task: { value: "", label: "" },
    mon: 0,
    tue: 0,
    wed: 0,
    thu: 0,
    fri: 0,
    sat: 0,
    sun: 0,
    done: false,
    get tasktotal() {
      return (
        this.mon +
        this.tue +
        this.wed +
        this.thu +
        this.fri +
        this.sat +
        this.sun
      );
    },
  },
  {
    project: "Dashboard",
    task: { value: "", label: "" },
    mon: 0,
    tue: 0,
    wed: 0,
    thu: 0,
    fri: 0,
    sat: 0,
    sun: 0,
    done: false,
    get tasktotal() {
      return (
        this.mon +
        this.tue +
        this.wed +
        this.thu +
        this.fri +
        this.sat +
        this.sun
      );
    },
  },
  {
    project: "Dashboard",
    task: { value: "", label: "" },
    mon: 0,
    tue: 0,
    wed: 0,
    thu: 0,
    fri: 0,
    sat: 0,
    sun: 0,
    done: false,
    get tasktotal() {
      return (
        this.mon +
        this.tue +
        this.wed +
        this.thu +
        this.fri +
        this.sat +
        this.sun
      );
    },
  },
  {
    project: "",
    task: { value: "", label: "" },
    mon: 0,
    tue: 0,
    wed: 0,
    thu: 0,
    fri: 0,
    sat: 0,
    sun: 0,
    done: false,
    get tasktotal() {
      return (
        this.mon +
        this.tue +
        this.wed +
        this.thu +
        this.fri +
        this.sat +
        this.sun
      );
    },
  },
  {
    project: "",
    task: { value: "", label: "" },
    mon: 0,
    tue: 0,
    wed: 0,
    thu: 0,
    fri: 0,
    sat: 0,
    sun: 0,
    done: false,
    get tasktotal() {
      return (
        this.mon +
        this.tue +
        this.wed +
        this.thu +
        this.fri +
        this.sat +
        this.sun
      );
    },
  },
];

export { DATA, TASKS };
