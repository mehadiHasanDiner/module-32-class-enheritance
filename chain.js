const user = {
  id: 5001,
  name: "Thomas Alva Edision",
  address: {
    street: {
      first: "34/4, kochukhet lane",
      second: "third floor",
      third: "right side",
    },
    postOffice: "cantonment",
    city: "Dhaka City",
  },
};

// const userFloor = user;
// const userFloor = user.address.street;
// const userFloor = user.address.stret.second;
const userFloor = user.address.stret?.second;

// এখানে stret নামে কোনো প্রোপাটি নেই তাই এটা undefined আসবে। undefined-এর stret টা বের করতে গেলে ইরর দিবে।

// ইরর থেকে না চাইলে অথবা ডাটাটাকে পুরো লোড করতে চাইলে যেখানে undefined আসবে সেই প্রোপার্টির নামের ডটের আগে (?) মার্ক দিয়ে দিতে হবে। তাহলে ডাটা লোড করাটা স্টপ হবে। না। অর্থাাৎ পরবর্তি স্টেজে যাবে।

// (?) মার্ক দেওয়াার মানে হচ্ছে এই ডাটাটা আছে কিনা তা জানা নেই। তা চেক করা হচ্ছে।

console.log(userFloor);
