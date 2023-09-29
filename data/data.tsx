type Task = {
  value: string;
  label: string;
};

type DataType = {
  project: string;
  task: Task[];
  mon: number;
  tue: number;
  wed: number;
  thu: number;
  fri: number;
  sat: number;
  sun: number;
  done: boolean;
  tasktotal: number;
};

const DATA: DataType[] = [
  {
    project: "Dashboard",
    task: [
      { value: "Project1", label: "Project1" },
      { value: "Project2", label: "Project2" },
      { value: "Project3", label: "Project3" },
      { value: "Project4", label: "Project4" },
    ],
    mon: 0,
    tue: 1,
    wed: 2,
    thu: 3,
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
    task: [
      { value: "Project1", label: "Project1" },
      { value: "Project2", label: "Project2" },
      { value: "Project3", label: "Project3" },
      { value: "Project4", label: "Project4" },
    ],
    mon: 0,
    tue: 0,
    wed: 0,
    thu: 0,
    fri: 0,
    sat: 0,
    sun: 0,
    done: true,
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
    task: [
      { value: "Project1", label: "Project1" },
      { value: "Project2", label: "Project2" },
      { value: "Project3", label: "Project3" },
      { value: "Project4", label: "Project4" },
    ],
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
    task: [
      { value: "Project1", label: "Project1" },
      { value: "Project2", label: "Project2" },
      { value: "Project3", label: "Project3" },
      { value: "Project4", label: "Project4" },
    ],
    mon: 0,
    tue: 0,
    wed: 0,
    thu: 0,
    fri: 0,
    sat: 0,
    sun: 0,
    done: true,
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

export default DATA;
