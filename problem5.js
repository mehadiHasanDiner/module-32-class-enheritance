let data = {
  location: [
    {
      latitude: "34.5, 37.8",
      longitude: "98.77, 58.7",
      city: "Hyderabad",
      country: "India",
    },
  ],
};

const allData = data.location;
const totalData = allData.map((x) => x.city);
console.log(totalData);
