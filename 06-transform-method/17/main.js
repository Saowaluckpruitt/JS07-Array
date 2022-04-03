let str = "31 45 12 67 34 86 23 37 19 41";
let isVarible = str
  .split(" ")
  .map((el) => +el)
  .filter((el) => el < 40)
  .reduce((acc, el) => acc + el);
console.log(isVarible);
