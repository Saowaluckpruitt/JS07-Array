const alphabets = ["a", "b", "a", "c", "a", "d"];
const inofAlpha = [];
alphabets.forEach((elements, index) => {
  if (elements === "a") {
    inofAlpha.push(index);
  }
});
console.log(inofAlpha);
