// using for loop
const people = [
  { name: "Meena", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Suchorita", age: 22 },
];

let peopleSum = 0;
for (let i = 0; i < people.length; i++) {
  const peopleAll = people[i];
  peopleSum = peopleAll.age + peopleSum;
}
// console.log(peopleSum);

// using array.reduce
const peopleSum2 = people.reduce(
  (previous, current) => previous + current.age,
  0
);
console.log(peopleSum2);
