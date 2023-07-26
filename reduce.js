// Array reduce
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// .reduce (accumulatorFunction, initialValue)
// accumulatorFunction use to parameters
// const total = number.reduce((previous, current) => previous + current, 0);

const total = number.reduce((previous, current) => {
  console.log(previous, current);
  return previous + current;
}, 0);
console.log(total);
