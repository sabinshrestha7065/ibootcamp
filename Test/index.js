const points = [21, 23, 55, 5];
const lowestNumber = points.sort();

// console.log(lowestNumber);

// reference type 1. object 2. array 3.function

let intro = {
  name: "manish", // object!
  age: 23,
};

intro.name = "sabin";
intro["name"] = "bipana";
let selection = "name";
intro[selection] = "school";

// console.log(intro.name);

// Array

const colors = ["red", "blue", "green", "yellow"];

colors[2] = "lightgreen";
// colors.pop("yellow")
// colors.push("black")
// console.log(colors)

// function

// performind of task
function info(firstName, secondName) {
  // console.log("hello" + " " + firstName + " " + secondName);
  // template form
  console.log(`hello ${firstName} ${secondName}`);
}
//  info("manish", "shrestha");

// calculating a value

function square(number) {
  return number * number;
}
// console.log(square(4));

const basicSalary = 50000;
const overTime = 20;
const rate = 10;

function wages() {
  console.log(basicSalary + overTime * rate);
}

// wages();

const saritaIntro = {
  name: "sarita",
  age: 29,
  bod: "2056_03_9",
  place: "biratanager",

  informationOfSarita: function () {
    console.log(this.name + " " + this.age + " " + this.bod + " " + this.place);
  },
};
// saritaIntro.informationOfSarita();

// for loop

for (i = 0; i <= 5; i++) {
  // console.log("hello world", i);
}

//  template string

const age = 23;
const firstName = "manish";

// console.log(`my name is ${firstName} and i am ${age} years old.`);

// loops => For

for (let i = 0; i <= 5; i++) {
  if (i % 2 !== 0);
//   console.log(i);
}


const studentName = {
  first1: "manish",
  second2: "sabin",
  third: "babin",
  fourth: "bina",
};

function prename() {
    return studentName.first1;
};

// console.log(prename());

// Boolean
const num1 = 24;
const num2 = 24;

// console.log(num1 > num2);
// document.write(num1 > num2);



