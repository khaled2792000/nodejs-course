//arrow functions
function Add(a, b) {
  return a + b;
}
const add = (a, b) => a + b;

////////////////////////////////
// Template literals
// Concatenation
const name = "Alice";
const age = 30;
const message1 = "Welcome, " + name + "! You are " + age + " years old.";

// Template Literals
const message2 = `Welcome, ${name}! You are ${age} years old.`;

////////////////////////////////
// array methods
const numbers = [1, 2, 3, 4, 5];
numbers.filter((n) => n % 2 === 0); // [2, 4]
numbers.map((n) => n * 2); // [2, 4, 6, 8, 10]
numbers.reduce((total, n) => total + n, 0); // 15
numbers.forEach((n) => console.log(n)); // 1 2 3 4 5
numbers.find((n) => n === 3); // 3
numbers.findIndex((n) => n === 3); // 2
numbers.every((n) => n < 10); // true
numbers.some((n) => n > 10); // false
numbers.sort((a, b) => b - a); // [5, 4, 3, 2, 1]
numbers.reverse(); // [5, 4, 3, 2, 1]
numbers.slice(0, 2); // [1, 2]
numbers.splice(0, 2); // [1, 2]
numbers.pop(); // [1, 2, 3, 4]
numbers.push(6); // [1, 2, 3, 4, 6]
numbers.includes(3); // true

////////////////////////////////
// object methods
const person = {
  name: "Alice",
  age: 30,
  greet: function () {
    console.log(`Hello, my name is ${this.name}!`);
  },
};

person.greet(); // Hello, my name is Alice!

////////////////////////////////
// destructuring
const { name, age } = person;
console.log(name); // Alice
console.log(age); // 30

////////////////////////////////
// array destructuring
const [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3, 4, 5]

////////////////////////////////
// default parameters
function greet(name = "World") {
  console.log(`Hello, ${name}!`);
}
greet(); // Hello, World!
