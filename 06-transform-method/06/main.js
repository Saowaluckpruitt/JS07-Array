let arr = ["React", "Vue", "Angular"];
arr.sort((a, b) => {
  if (a > b) return 1;
  else return -1;
});
console.log(arr);
