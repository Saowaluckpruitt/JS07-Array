let alphabets = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
const set = new Set(alphabets);
const unique = Array.from(set);
console.log(unique);
