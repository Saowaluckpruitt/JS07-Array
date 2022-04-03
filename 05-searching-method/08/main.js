let tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];
const deleteTask = (id) => {
  return tasks.filter((task) => task.id !== id); // if use splice and findindex will be better coz performance
};
deleteTask(2);
console.log(tasks);

/* const deleteTask = (id)=>{
  const idx=tasks.findIndex((taks) => task.id ===id)
  if (idx !== -1){
    tasks.splice(idx,1)
  }
})*/
