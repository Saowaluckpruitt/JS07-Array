const products = [
  { id: 1, name: "Crystal" },
  { id: 4, name: "Namthip" },
  { id: 5, name: "Nestle" },
];
const deleteId = products.reduce((acc, el) => {
  const id = el.id;
  delete el.id;
  acc[id] = el;
  return acc;
}, {});
