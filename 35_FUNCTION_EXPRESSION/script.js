/*
A function expression in JavaScript is a way to define a function inside an expression, 
where a variable is assigned a function as its value. Unlike a function declaration, which 
is a standalone statement, a function expression is part of a larger expression.

---------------------------------------------------------------------------------------------------------------

## 🔹 What is a Function Expression?

 => A function expression means defining a function and assigning it to a variable (or constant).
 => Unlike function declarations, function expressions are not hoisted (you can’t call them before they are defined).

---------------------------------------------------------------------------------------------------------------

## 🔹 Syntax

const variableName = function(parameters) {
    // function body
    return something;
};

*/

const greet = function(name){
    return `Hello ${name}`;
};

console.log(greet("Abhishek"));


let square = function(num){         //This is called anonymous because the function has no name.
    return num*num;
};

console.log(square(5));

//named function
let factorial = function fact(n){
    if(n<=1)return 1;
    return n*fact(n-1);
};

console.log(factorial(5));  //120

let numebrs = [1,2,3,4];
let doubled  = numebrs.map((num) => num*2);
console.log(doubled);



// Function Declaration (hoisted)
sayHi(); // ✅ Works
function sayHi() {
    console.log("Hi!");
}

// Function Expression (not hoisted)
sayHello(); // ❌ Error: Cannot access 'sayHello' before initialization
const sayHello = function() {
    console.log("Hello!");
};


