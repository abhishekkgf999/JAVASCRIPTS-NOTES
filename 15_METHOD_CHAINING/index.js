/*
Method chaining (also called "cascading" or "fluent interface") is a programming technique where you can call multiple 
methods on an object in a single, continuous line of code, without having to store the result of each method call in a temporary variable.

For method chaining to work, each method in the chain must return the object itself (or a new object that can also be chained upon)
*/

// ---------- NO METHOD CHAINING ------------

let username = window.prompt("Enter your username: ");

username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();

username = letter + extraChars;
console.log(username);


//---------- METHOD CHAINING ---------------

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);
