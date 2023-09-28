const STATUS_ON_DECK = { id: 1, name: "On Deck", color: "blue.300" };
const STATUS_IN_PROGRESS = {
  id: 2,
  name: "In Progress",
  color: "yellow.400",
};
const STATUS_TESTING = { id: 3, name: "Testing", color: "pink.300" };
const STATUS_DEPLOYED = { id: 4, name: "Deployed", color: "green.300" };
export const STATUSES = [
  STATUS_ON_DECK,
  STATUS_IN_PROGRESS,
  STATUS_TESTING,
  STATUS_DEPLOYED,
];
type DataType = {
  project: string;
  task: {
    value: string;
    label: string;
  };
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
    task: { value: "Project1", label: "Project1" },
    mon: 0,
    tue: 1,
    wed: 2,
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
    task: { value: "Project2", label: "Project2" },
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
    task: { value: "Project3", label: "Project3" },
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
    task: { value: "Project4", label: "Project4" },
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
