const numbers = [12, 34, 56, 76, 23, 52];
const half = numbers.map((n) => n / 2);
const thirds = numbers.map((n) => n / 3);

// console.log(half);
// console.log(thirds);

const friends = ["Tom Hanks", "Tom Cruise", "Tom Bardy", "Tom Soliman"];
const firstLetter = friends.map((friend) => friend[0]);
// console.log(firstLetter);
const nameLength = friends.map((friend) => friend.length);
// console.log(nameLength);

const products = [
  { id: 1, name: "laptop", price: 45400 },
  { id: 1, name: "mobile", price: 90000 },
  { id: 1, name: "watch", price: 35000 },
  { id: 1, name: "tablet", price: 40000 },
];

// const items = products.map((product) => console.log(product.name));
const items = products.map((product) => product.name);
const prices = products.map((p) => p.price);
console.log(prices);
