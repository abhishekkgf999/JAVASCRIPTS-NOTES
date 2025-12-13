// 1. Define the function
function greet(name) { // 'name' is a parameter (an input variable)
  console.log("Hello, " + name + "!");
}

// 2. Call (or "invoke" or "execute") the function
greet("Alice");   // "Alice" is an argument (the actual value passed)
greet("Bob");
greet("Charlie");

function add(num1, num2) {
  let sum = num1 + num2;
  return sum; // Send the 'sum' back as the result of the function call
}

let result1 = add(5, 3);      // result1 will be 8
let result2 = add(10, 20);    // result2 will be 30

console.log(result1); // 8
console.log(result2); // 30
console.log(add(1, 1)); // 2 (directly log the returned value)

//Function Expressions: Assigning a function to a variable.
const multiply = function(a, b) {
  return a * b;
};
console.log(multiply(4, 5)); // 20


//Arrow Functions (ES6+): A more concise syntax, often used for shorter functions.
const subtract = (a, b) => {
  return a - b;
};
console.log(subtract(10, 3)); // 7

// Even shorter for single-line returns:
const square = num => num * num;
console.log(square(7)); // 49