const numbers = [6, 9, 10, 11, 3, 4, 12, 13, 2, 14, 15];

// Find only give tbe first element of search. It does not give an array
const getThree = numbers.find((number) => number % 3 === 0);
console.log(getThree);

// filter give tbe all the element of search. It give an array
const getThreeAll = numbers.filter((number) => number % 3 === 0);
console.log(getThreeAll);

const products = [
  { id: 1, name: "laptop", price: 45400 },
  { id: 1, name: "mobile", price: 90000 },
  { id: 1, name: "watch", price: 35000 },
  { id: 1, name: "tablet", price: 25000 },
];

const cheap = products.find((product) => product.price < 40000);
console.log(cheap);
//array.find শুধু প্রথম ইলিমেন্ট টাকে দেয়, যেটা ফাইন্ড করা হয়, এটা শুধু একটা ্ইলিমেন্ট দেয়, কোনো এ্যারে দেয় না। বাকি ইলিমেন্ট গুলো শর্তের আন্ডারে ম্যাচ করলে তা দেয় না শুধু প্রথম যেটাকে পাবে সেটাকেই দিয়ে দিবে।
//  array.filter এটা সকল ইলিমেন্ট গুলোকে একটা এ্যারের মধ্যে দেয়  যে  শর্তের আন্ডারে ফিল্টার  করা হয়
