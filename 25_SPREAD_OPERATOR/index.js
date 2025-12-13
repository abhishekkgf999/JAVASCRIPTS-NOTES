/*
#SPREAD OPERATOR (...)
It allows an iterable (like an array or a string) to be expanded in places where zero or more arguments 
(for function calls) or elements (for array literals) or key-value pairs (for object literals) are expected.

*/

let num1 = [1,2,3,4,5];
let num2 = [...num1];
console.log(num2);


let fruits  = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);

//Passing Array Elements as Function Arguments
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Passes 1, 2, 3 as individual arguments to sum() -> Output: 6

console.log(sum(numbers)); // This would not work as expected (sum([1,2,3]) + undefined + undefined -> NaN)

//Copying Objects (Shallow Copy)
const user = { name: 'Alice', age: 30 };
const copiedUser = { ...user };

console.log(copiedUser); // { name: 'Alice', age: 30 }
console.log(user === copiedUser); // false

copiedUser.age = 31;
console.log(user);       // { name: 'Alice', age: 30 } (original unchanged)
console.log(copiedUser); // { name: 'Alice', age: 31 }
