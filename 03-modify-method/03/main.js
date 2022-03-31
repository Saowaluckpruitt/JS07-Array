const animal = ["Dog", "Cat", "Rat"];
let result = animal.push("Fish");
console.log(animal);
console.log(result);

let resultAddfirst = animal.unshift("Horse");
console.log(animal);
console.log(resultAddfirst);

let addTwoEl = animal.push("Giraffe", "Snake");
console.log(animal);
console.log(addTwoEl);

let deleteHorse = animal.shift();
console.log(animal);
console.log(deleteHorse);

let deleteSnake = animal.pop();
console.log(animal);
console.log(deleteSnake);

let deleteDog = animal.shift();
console.log(animal);
console.log(deleteDog);

// last animal =['Cat', 'Rat', 'Fish', 'Giraffe']
