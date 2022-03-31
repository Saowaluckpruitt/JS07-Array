/*let Num = +prompt("enter your num");
let num = new Num();
for (let i = 0; i < num.length; i++) {
  sum = 0;
  sum += i;
}
console.log(sum);*/
let num;
let sum = 0;
const isValid = (number) => {
  if (number === null || number.trim() === "" || isNaN(number)) return false;
  return true;
};
const newArr = [];
while (1) {
  num = prompt("Enter your number");
  if (!isValid(num)) {
    break;
  }
  newArr[newArr.length] = +num;
}
console.log(newArr);
for (let el of newArr) {
  sum += el;
}
console.log(sum);
