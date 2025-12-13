/*
= -> assignment operator

== -> comparison operator (compare if values are equal)

=== -> strict equality operator (compare if values & datatypes are equal)

!= -> inequality operator

!== -> strict inequality operator

*/

// Values and Types are the same
console.log(10 === 10);        // true (number === number)
console.log("hello" === "hello"); // true (string === string)
console.log(true === true);    // true (boolean === boolean)

// Values are the same, but Types are different
console.log(10 === "10");      // false (number !== string)
console.log(0 === false);      // false (number !== boolean)
console.log(null === undefined); // false (null !== undefined)

// Values and Types are the same (but for objects/arrays, it's about reference)
let arr1 = [1, 2];
let arr2 = [1, 2];
let arr3 = arr1;

console.log(arr1 === arr2);    // false (different objects in memory)
console.log(arr1 === arr3);    // true (same object in memory)