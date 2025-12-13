/*
In JavaScript, an object is a fundamental data type used to store collections of 
related data and more complex entities. Think of an object as a container that holds 
data in key-value pairs. The keys (also called property names) are strings, and the 
values can be any valid JavaScript data type, including other objects, arrays, or functions.


🔹 What is an Object?
In JavaScript, an object is a collection of key–value pairs.

Keys (called properties) are always strings or symbols.

Values can be any data type: number, string, boolean, array, function, or even another object.
*/


const person1 = {
    firstName : "Spongebob",
    lastName: "squarePants",
    age: 30,
    isEmployed: true,
    sayHello : () => console.log("Hi! I am Spongebob!")
    
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
