let arr = ["React", "Vue", "Angular"];
const copySorted = (arr) =>
  arr.slice().sort((a, b) => {
    if (a > b) return 1;
    else return -1;
  });
let sorted = copySorted(arr);
console.log(arr);
console.log(sorted);
