// class = syntactic sugar
class Instructor {
  name;
  designation = "Web course Instructor";
  team = "web team";
  location;
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  startSupportSession(time) {
    console.log(`start the support session @ ${time}`);
  }
  createQuiz(module) {
    console.log(`please create quiz for module ${module}`);
  }
}

const aamir = new Instructor("aamir", "mumbai");
console.log(aamir);
aamir.startSupportSession("9:00");
aamir.createQuiz(60);

const soliman = new Instructor("soliman khan", "Dhaka");
console.log(soliman);
