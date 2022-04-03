let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
salaries;
const objalaries = Object.values(salaries);
const reduceNums = objalaries.reduce((acc, el) => acc + el, 0);
