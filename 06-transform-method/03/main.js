const arr = [11, 17, 23, 13, 7, 19];
arr.sort((a, b) => {
  if (a > b) return -1;
  else return 1;
});
console.log(arr);
