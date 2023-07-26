// problem-1
const oddArray = [1, 3, 5, 7, 9];
const evenArray = oddArray.map((number) => number + 1);
// console.log(evenArray);

// problem-2

const numberArray = [33, 50, 79, 78, 90, 101, 30];
const problem2 = numberArray.filter((number) => number % 10 == 0);
console.log(problem2);

const numberArray2 = [33, 50, 79, 78, 90, 101, 30];
const problem3 = numberArray2.find((number) => number % 10 == 0);
console.log(problem3);
