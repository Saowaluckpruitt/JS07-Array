const sales = [
  { price: 1000, discount: 0.1 },
  { price: 500, discount: 0.05 },
  { price: 100 },
];

let summary = [];
for (let el of sales) {
  summary[summary.length] = { netPrice: el.sales * (1 - (el.discount || 0)) };
}
