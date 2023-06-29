const person = {
  name: "Alice",
  lastName: "Parker",
  student: true,
  totalSteps: 200,
  walk: function (steps) {
    this.totalSteps += steps;
  }
};

console.log(person.student);

console.log(person.lastName);

console.log(person.name);

person.walk(250);

console.log(person.totalSteps);