/*
The this keyword in JavaScript is a special keyword that refers to the 
context in which a function is being executed. Its value is not fixed; 
it is determined dynamically by how a function is called. Understanding 
this is crucial for working with objects, methods, and constructors


🔹 What is this?
this is a special keyword in JavaScript.

Its value depends on how a function is called, not where it’s defined.

Think of this as a reference to the object that is currently executing the function.

*/

//1. Global Context

//In browser → refers to window object.
// In Node.js → refers to {} (empty object in modules).

console.log(this);


// 2. Inside a Function

// In non–strict mode → this = global object (window).
// In strict mode → this = undefined.

function show() {
    console.log(this);
}
show(); 


// 3. Inside an Object Method
const person1 = {
    name: "Spongebob",
    favFood: "hamburger",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)},
}

person1.sayHello();
person1.eat();


//4. Arrow Functions

// Arrow functions do not have their own this.
// They use this from their surrounding (lexical) scope.

let person = {
    name: "Abhishek",
    greet: () => {
        console.log("Hi, I am " + this.name);
    }
};

person.greet(); // "Hi, I am undefined" (or empty) 
