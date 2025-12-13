/*
Destructuring in JavaScript is a powerful feature that allows you to extract 
values from arrays or properties from objects into distinct variables. 
It provides a more concise and readable syntax for unpacking data.


🔹 Destructuring

=> Destructuring is a way to unpack values from arrays or extract properties from objects into separate variables.
=> It makes code shorter and more readable.

*/

//------------------------------------------- EXAMPLE 1 -----------------------------------------------------------
//SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

[a,b] = [b,a];

console.log(a);
console.log(b);

//------------------------------------------- EXAMPLE 2 -----------------------------------------------------------
//SWAP 2 ELEMENTS IN AN ARRAY

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

//------------------------------------------- EXAMPLE 3 -----------------------------------------------------------
//EXTRACT VALUES FROM OBJECTS


let person = { name: "Abhishek", age: 22 };

// Destructuring
let { name, age } = person;

console.log(name); // Abhishek
console.log(age);  // 22

