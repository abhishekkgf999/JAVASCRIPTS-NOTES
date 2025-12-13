/*
## 🔹 What is an Arrow Function?

 An arrow function is a shorter way to write a function expression.
 Introduced in ES6 (2015).
 Syntax uses => instead of the function keyword.
 They do not have their own this (important difference!).


## 🔹 Syntax

const functionName = (parameters) => {
    // function body
    return value;
};
*/

const add1 = function(a,b){
    return a+b;
};

const add2 = (a,b) => a+b;

console.log(add1(2,3));
console.log(add2(2,3));


//🔹 Example 2: One-liner (Implicit Return)
// If the function has only one expression, you can skip {} and return:

const numbers = [1,2,3,4,5];

const squares = numbers.map((ele) => Math.pow(ele, 2));     //Example 4: As Callback

console.log(squares);


//🔹 Example 3: No Parameters
const greet = () => console.log("Konishiwa");
greet();

