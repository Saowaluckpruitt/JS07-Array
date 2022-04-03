const array = [1, 2, 30, 400];
array.map((el) =>el*2)
// result: [2, 4, 60, 800]

const array = [1, 2, 3, 4];
array.map((el) => `${el}`)
// result: ["1", "2", "3", "4"]

const array = [1, '1', 2, {}];

array.map((el) => typeof((el))
// result: ["number", "string", "number", "object"]

const array = ['apple', 'banana', 'orange'];
array.map((el)  => el.toUpperCase())
// result: ["APPLE", "BANANA", "ORANGE"]

const array = [1, 3, 4, 5, 6, 7, 8];
array.map((el)=> el%2 === 0 ? "even" : "odd")
 
// result: ["odd", "odd", "even", "odd", "even", "odd", "even"]

const array = [1, -3, 2, 8, -4, 5];
array.map((el) => Math.abs(el))

// result: [1, 3, 2, 8, 4, 5]


const array = [100, 200.25, 300.84, 400.3];
array.map((el) =>  `${el.toFixed(2)}`)
// result: ["100.00", "200.25", "300.84", "400.30"]

const array = [0, 5, 10, 7, 6, 5, 0];
const months =array.map((el)=> {
    const date = new Date(2020,el,1)
    return date.toLocaleString("default",{month : "short"});
})
console.log(months)

// result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]

const array = [1, 16, 81, 256, 625, 1296];

array.map((el) =>  array.indexOf(el)+1)
// result: [1, 2, 3, 4, 5, 6]

const array = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];

array.map((el)=> el.name);

// result: ["apple", "banana", "watermelon"]

const array = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
array.map((el)=> el.age)
// result: [14, 18, 32]

const array = [
  { name: 'apple', surname: 'London' },
  { name: 'banana', surname: 'Bangkok' },
  { name: 'watermelon', surname: 'Singapore' }
];
array.map((el)=> `${el.name} ${el.surname}`)
// result: ["apple London", "banana Bangkok", "watermelon Singapore"]

const array = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-01' },
  { name: 'watermelon', birth: '1985-12-01' },
  { name: 'test', birth: '1985-04-10' },
  { name: 'test2', birth: '1985-04-01' }
];
array.map((el) => {
    const date = new Date()
    const birthday = new Date(el.birth)
    let age = date.getFullYear() - birthday.getFullYear();

    if (birthday.getMonth()>date.getMonth()){
        age -= 1
    }else if(birthday.getMonth()=== date.getMonth() && birthday.getDate() > date.getDate()){
        age -= 1 
    }

    el.age = age
    return el
})
// result: [
//   { name: "apple", birth: "2000-01-01", age: 21 },
//   { name: "banana", birth: "1990-10-01", age: 31 },
//   { name: "watermelon", birth: "1985-12-01", age: 36 },
// ]

const array = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-10' },
  { name: 'watermelon', birth: '1985-12-30' }
];
array.map((el)=>{
    const [year, _month, date] = el.birth.split("-");
    const d = new Date(el.birth);
    const month = d.toLocaleString("default",{month : "short"});

    return `<tr><td>${el.name}</td><td>${date} ${month.toLowerCase()} ${year}</td></tr>`
})
// result: [
//     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
//     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// ]