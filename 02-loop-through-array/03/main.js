const sales = [
  { price: 1000, discount: 0.1 },
  { price: 500, discount: 0.05 },
  { price: 100 },
];

let summary = [];
for (let el of sale) {
  summary[summary.length] = { netPrice: el.sale * (1 - (el.discount || 0)) };
}
