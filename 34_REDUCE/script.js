/*
The reduce() method in JavaScript executes a reducer function on each element of an array, 
resulting in a single output value. It's a powerful and versatile method used for tasks like 
summing up numbers, flattening arrays, and counting occurrences of items.

------------------------------------------------------------------------------------------------------------------

## 🔹 What is reduce?

 reduce is an array method in JavaScript.
 It processes the array element by element and reduces it to a single value (like sum, product, max, min, object, etc.).
 You provide a callback function that combines values.

------------------------------------------------------------------------------------------------------------------

## 🔹 Syntax

array.reduce(function(accumulator, currentValue, index, array) {
    // return updated accumulator
}, initialValue);

*accumulator → stores the result as the array is processed
*currentValue → current element being processed
*index → index of current element (optional)
*array → original array (optional)
*initialValue → starting value of accumulator (optional but recommended)

*/

const arr = [5,1,3,2,6];

const output = arr.reduce(function (max, curr){
    if(curr > max){
        max = curr;
    }
    return max;
}, 0);

console.log(output);


//EXAMPLE 2

const users2 = [
    {firstName: "Abhishek", lastName: "Kumar", age: 21},
    {firstName: "Akshay", lastName: "Saini", age: 26},
    {firstName: "Elon", lastName: "Musk", age: 50},
    {firstName: "Satyam", lastName: "Kumar", age: 26}
];

const output2 = users2.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age]++;
    }else{
        acc[curr.age] = 1;
    }

    return acc;
}, {});

console.log(output2);


//EXAMPLE 3
const output3 = users2.filter((x) => x.age < 30).map((x) => x.firstName);

console.log(output3);

//EXAMPLE 4
//IMPLEMENTING SAME AS ABOVE USING REDUCE
const output4 = users2.reduce((acc, curr) => {
    if(curr.age < 30){
        acc.push(curr.firstName);
    }
    return acc;
}, []);

console.log(output4);

//---------------------------------------------------------------------------------

