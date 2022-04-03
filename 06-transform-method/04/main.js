const arr = [-3, 2, 0, -7, 4, 6];

arr.sort((a, b) => {
  if (a ** 2 > b ** 2) return 1;
  else return -1;
});
console.log(arr);
