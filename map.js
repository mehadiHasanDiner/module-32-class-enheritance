/*
purpose:
1. get an array
2. for every elements of the array do something
3. store the result in the array
4. return the result array
5. ্একটি এ্যারে ধরে তার ইলিমেন্টগুলো  ফর লুপ দিয়ে আলাদা করে, আলাদা করা ইলিমেন্ট গুলো ডাবল বা জোড় বিজোাড় চেক করে আরেকটা নতুন এ্যারের মধ্যে পুশ করা। 
6. এই কাজটাকে সহজ এবং সর্টকাটভাবে array.map() দিয়ে করা যায়
*/

// const fiveTimes = [1, 2, 3, 4, 5, 6, 7].map((x) => x * 5);
// console.log(fiveTimes);

const numbers = [1, 2, 3, 4, 5, 6, 7];
const checkEven = (x) => x;

const checkEvenNumbers = numbers.map(checkEven);
console.log(checkEvenNumbers);
