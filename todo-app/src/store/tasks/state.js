export default function () {
  return {
    tasks: {
      ID1: {
        name: "Go to shop",
        completed: false,
        dueDate: "30/03/2020",
        dueTime: "09:35"
      },
      ID2: {
        name: "Get bananas",
        completed: false,
        dueDate: "30/03/2020",
        dueTime: "12:00"
      },
      ID3: {
        name: "Go apples",
        completed: false,
        dueDate: "04/04/2020",
        dueTime: "20:40"
      }
    },
    search: "",
    sort: "dueDate"
    /* tasks: [
    {
      id: 1,
      name: "Go to shop",
      completed: false,
      dueDate: "30/03/2020",
      dueTime: "09:35"
    },
    {
      id: 2,
      name: "Get bananas",
      completed: false,
      dueDate: "30/03/2020",
      dueTime: "12:00"
    },
    {
      id: 3,
      name: "Go apples",
      completed: false,
      dueDate: "04/04/2020",
      dueTime: "20:40"
    }
  ] */
  };
}
