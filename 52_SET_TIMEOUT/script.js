/*
The setTimeout() function in JavaScript is a built-in method that executes a function or a 
block of code after a specified delay has passed. It's a key part of asynchronous programming, 
allowing you to schedule tasks for later execution without blocking the main program flow.

------------------------------------------------------------------------------------------------------------------------

⏰ What is setTimeout?

It is a built-in JavaScript function used to schedule code to run later (after a delay).

It is asynchronous → does not block the rest of the program.

------------------------------------------------------------------------------------------------------------------------


🔹 Syntax

setTimeout(function, delay, param1, param2, ...);

-> function → the callback function to run.
-> delay → time in milliseconds (1000 ms = 1 sec).
-> param1, param2, ... → optional arguments passed to the callback.
*/


function sayHello(){
    console.log("Hello");
}

setTimeout(() => console.log("Hello"), 3000);

