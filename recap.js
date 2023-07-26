// destructuring
const { x, y, x, ...c } = {
  x: 45,
  y: 12,
  z: 33,
  name: "Sakib Al Hasan",
  salary: 4300000,
};

// ...c দিয়ে বাকি জিনিসগুলো পাওয়া যায়। এটাকে  rest operator ও বলে।
