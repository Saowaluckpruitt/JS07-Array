let john = { name: "John", age: 27 };
let jo = { name: "Jo", age: 21 };
let jin = { name: "Jin", age: 25 };

let arr = [john, jo, jin];
const getAverageAge = (arr) => {
  const sum = arr.reduce((acc, el) => acc + el.age, 0);
  return sum / arr.length;
};

console.log(getAverageAge(arr));
