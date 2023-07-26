const student = {
  name: "Kolim uddin",
  age: 15,
  class: "Ten",
  marks: {
    marks: 78,
    physics: 89,
    chemistry: 65,
  },
};

// Dot notation
const marks = student.marks;
const math = student.marks.math;

// Braket notation
const chemistry = student["marks"]["chemistry"];
const subject = "math";
// const subject = "math", এখানে প্রোপাটি কে একটা ভেরিয়াবেলের মধ্যে রাখা হয়েছে, এখন এই ভেরিয়াবেল দিয়ে অবজেক্টের প্রোপার্টিকে একসেস করতে ভেরিয়াবেলে আগে (.) দিয়ে করলে ্ প্রপার্টি পাওয়া যাবে না। এক্ষেত্রে ভেরিয়াবেলটাকে একটা এ্যারের মধ্যে নিয়ে প্রপার্টি একসেস করতে হবে। এ্যারের ব্রাকেটের আগে কোনো (.) দেওয়া যাবে না
const subjectMarks = student.marks[subject];
console.log(subjectMarks);
