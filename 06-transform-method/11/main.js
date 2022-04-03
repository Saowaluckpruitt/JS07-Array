let str = "I live in Thailand";
const counstStr = str.toLowerCase();
const makeArr = Array.from(counstStr);
const counstName = makeArr.reduce((acc, el) => {
  const count = acc[el] || 0;
  acc[el] = 1 + count;
  return acc;
}, {});

// expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}
