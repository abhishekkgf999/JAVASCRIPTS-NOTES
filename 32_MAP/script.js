/*
The map() method in JavaScript is an array method that creates a new array by calling a provided 
function on every element in the original array. It's a powerful tool for transforming data because 
it always returns a new array of the same length, without modifying the original array.

* map is an array method in JavaScript.
* It creates a new array by applying a callback function to each element of the original array.
* Unlike forEach, it returns a new array instead of just looping.
*/

const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const studetsUpper = students.map(upperCase);

console.log(studetsUpper);

function upperCase(element){
    return element.toUpperCase();
}


//-------------------------------------------------------------------------------------------------------

const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
//-------------------------------------------------------------------------------------------------------


const users = [
    {firstName: "Abhishek", lastName: "Kumar", age: 21},
    {firstName: "Akshay", lastName: "Saini", age: 26},
    {firstName: "Elon", lastName: "Musk", age: 50},
    {firstName: "Satyam", lastName: "Kumar", age: 23}
];

const output = users.map(x => x.firstName + " " + x.lastName);

console.log(output);

