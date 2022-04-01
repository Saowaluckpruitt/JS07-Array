const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];
const updateTask = (id, newName) => {
  const index = tasks.findIndex((task) => task.id === id); //  task dont have s coz we use just one el
  tasks[index].name = newName;
  if (index !== -1) {
    // chek we have el or nor -1 mean not found
    tasks[index].name = newName; /// .name coz we have t change name
  } else {
    alert("Task  not found");
  }
};
updateTask(2, "Travelling");
console.log(tasks);
