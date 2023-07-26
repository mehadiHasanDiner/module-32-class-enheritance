const number = [6, 9, 10, 11, 3, 4, 12, 13, 2, 14, 15];
const lessThan10 = number.filter((number) => number < 10);
console.log(lessThan10);

const greaterThanTen = number.filter((number) => number >= 10);
console.log(greaterThanTen);

const evenNumber = number.filter((number) => number % 2 === 0);
console.log(evenNumber);

const products = [
  { id: 1, name: "laptop", price: 45400 },
  { id: 1, name: "mobile", price: 90000 },
  { id: 1, name: "watch", price: 35000 },
  { id: 1, name: "tablet", price: 40000 },
];

const cheep = products.filter((product) => product.price < 100);
console.log(cheep);
const expensive = products.filter((product) => product.price > 100);
console.log(expensive);
const veryExpensive = products.filter((product) => product.price > 40000);
console.log(veryExpensive);
