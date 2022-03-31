const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];
const updateTask = (id, newName) => {
  const index = tasks.findIndex((task) => task.id === id);
  tasks[index].name = newName;
};
updateTask(2, "Travelling");
console.log(tasks);
