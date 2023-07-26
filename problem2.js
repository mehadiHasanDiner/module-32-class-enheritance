// total array sum using for loop

const numbersArray = [1, 9, 17, 22];
let sum = 0;
for (let i = 0; i < numbersArray.length; i++) {
  sum = numbersArray[i] + sum;
}
console.log(sum);

// total array sum using reduce
const total = numbersArray.reduce((previous, current) => previous + current, 0);
console.log(total);
