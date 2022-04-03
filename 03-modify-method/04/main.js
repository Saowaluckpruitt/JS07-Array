const first = (arr, n) => {
  if (n === "undefined" || n === 1) {
    return arr.find((el) => el[1]);
  } else {
    return arr.slice(0, n);
  }
};
console.log(first([7, 8, 0]));
