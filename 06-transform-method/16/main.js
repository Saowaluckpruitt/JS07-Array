const persons = [
  { name: "John", sex: "M" },
  { name: "Jody", sex: "M" },
  { name: "Susan", sex: "F" },
  { name: "Kate", sex: "F" },
  { name: "Sid", sex: "M" },
];
const sexPerson = persons.reduce((acc, el) => {
  const value = acc[el.sex] || [];
  value.push(el.name);
  acc[el.sex] = value;
  return acc;
}, {});

// expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}
