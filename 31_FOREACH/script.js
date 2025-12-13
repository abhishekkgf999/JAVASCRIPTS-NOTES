/*
## 🔹 What is forEach?
* forEach is an array method in JavaScript.
* It executes a callback function once for each element in the array.
* It is mainly used to iterate through arrays.

------------------------------------------------------------------------------------------------------------------

## 🔹 Syntax

array.forEach(function(element, index, array) {
   // code to execute
});

* element → Current item of array
* index → Position of the element (optional)
* array → The array being traversed (optional)

------------------------------------------------------------------------------------------------------------------

## 🔹 Important Notes
* forEach does not return anything (always undefined).
* If you want to create a new transformed array, use map instead.
* You cannot break out of a forEach loop early (unlike for or for...of).

✅ Use forEach → when you just want to perform an action on each array element.
✅ Use map/filter/reduce → when you need a new array or result.
*/

//EXAMPLE 1:- SIMPLE ITERATION

let numbers = [10, 20, 30];

numbers.forEach(function(val){
    console.log(val);
    
});

//EXAMPLE 2:- WITH TWO PARAMETERS
let fruits = ["apple", "banana", "mango"];

fruits.forEach((fruit, index) => {
    console.log(index + ": " + fruit);
})


//EXAMPLE 3:- ACCESSING THE ARRAY
let nums = [10, 20, 30];

nums.forEach((val, i, arr)=>{
    arr[i] = val*i;
});

console.log(nums);


//ANOTHER EXAMPLE
let fruits2 = ["apple", "orange", "banana", "coconut"];

fruits2.forEach((fruit, i, fruits2) =>{
    fruits2[i] = fruit.toUpperCase();
});

console.log(fruits2);
