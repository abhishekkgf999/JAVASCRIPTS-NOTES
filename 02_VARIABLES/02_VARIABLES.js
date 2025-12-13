//VARIABLES - VAR, LET, CONST

//SCOPE
function testScope() {
  if (true) {
    var x = 10;
    let y = 20;
    const z = 30;
  }
  console.log(x); // ✅ Works (var is function scoped)
  console.log(y); // ❌ Error (let is block scoped)
  console.log(z); // ❌ Error (const is block scoped)
}
testScope();


//RE-DECLARATION
var a = 5;
var a = 10; // ✅ No error

let b = 5;
// let b = 10; // ❌ Error

const c = 5;
// const c = 10; // ❌ Error


//RE-ASSIGNMENT
var x = 1;
x = 2; // ✅ Works

let y = 3;
y = 4; // ✅ Works

const z = 5;
// z = 6; // ❌ Error (const can't be reassigned)


//HOISTING
/*
In JavaScript, hoisting refers to the mechanism where declarations of 
variables, functions, and classes are conceptually "moved" to the top 
of their scope during the compilation phase, before the code actually executes.


1. Declarations are processed first: When the JavaScript engine parses your code, it first identifies all variable and 
                                     function declarations.

2. Availability before execution: Because these declarations are processed upfront, you can sometimes use a variable or 
                                  call a function before its actual declaration appears in your written code.

3. Not a physical move: It's important to understand that the code isn't literally rewritten or moved. Hoisting is a 
                        conceptual model of how the JavaScript interpreter processes declarations.
*/

console.log(a); // undefined
var a = 10;

console.log(b); // ❌ Error: Cannot access 'b' before initialization
// let b = 20;

console.log(c); // ❌ Error: Cannot access 'c' before initialization
// const c = 30;


let first_name = "Bro";
let favoriteFood = "Pizza";
let email = "Bro@gmail.com";

console.log(`Your name is:- ${first_name}`);
console.log(`You like:- ${favoriteFood}`);
console.log(`Your email is:- ${email}`);

/*
Your name is:- Bro
You like:- Pizza
Your email is:- Bro@gmail.com
*/