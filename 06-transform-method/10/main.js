let names = ["Jack", "John", "Bill", "John", "Rick", "Bill", "John"];
const counstName = names.reduce((acc, el) => {
  const count = acc[el] || 0; // if  we dont have this condition it will be undefined for first loop so it will return to be NaN so we have or for make it true to return 0
  acc[el] = 1 + count;
  return acc;
}, {});

// const acc = {};
// const el = "Jack"
// acc[el] === undefined

// const count = undefined || 0;

// const acc = {Jack: 1};
// const el = "Jack"
// acc[el] === 1

// const count = 1 || 0;
