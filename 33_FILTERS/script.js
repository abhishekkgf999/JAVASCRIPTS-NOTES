/*
## 🔹 What is filter?

 filter is an array method in JavaScript.
 It creates a new array containing only the elements that pass a condition (i.e., when the callback returns true).
 Original array remains unchanged.

------------------------------------------------------------------------------------------------------------------

## 🔹 Syntax

let newArray = array.filter(function(element, index, array) {
    return condition; // true → keep element, false → skip
});


 element → current item
 index → position of item (optional)
 array → the original array (optional)

------------------------------------------------------------------------------------------------------------------

## 🔹 Key Differences: map vs filter vs forEach

| Feature           | forEach             | map                   | filter                     |
| ----------------- | -----------------   | -------------------   | -------------------------- |
| Returns new array | ❌ No               | ✅ Yes (same length) | ✅ Yes (may be smaller)     |
| Purpose           | Loop/side effects   | Transform values      | Select specific elements   |
| Skips elements?   | ❌ No              | ❌ No                 | ✅ Yes (if condition fails) |

---

✅ Use filter → when you want a subset of the array.
✅ Often used with map (first filter, then transform).

*/

//EXAMPLE 1:- FILTER EVEN NUMBERS
let numbers = [1,2,3,4,5,6];

let evens = numbers.filter(function isEven(element){
    return element%2 == 0;
});

function isOdd(elements){
    return elements%2 != 0;
}

console.log(evens);

let odds = numbers.filter(isOdd);
console.log(odds);

//FILTER STRINGS BY LENGTH
let words = ["hi", "hello", "world", "js"];

let longWords = words.filter(word => word.length > 2);

console.log(longWords);


//FILTER OBJECTS
let students = [
    {name: "Abhishek", marks : 85},
    {name: "Varun", marks : 89},
    {name: "Vivek", makrs : 34}
];

let passed = students.filter(student => student.marks>=50);
console.log(passed);
