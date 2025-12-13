// An empty array
let emptyArray = [];

// An array of strings
let fruits = ["Apple", "Banana", "Cherry"];

// An array of numbers
let scores = [85, 92, 78, 95];

// An array with mixed data types
let mixed = ["Hello", 123, true, null, { key: "value" }];

// Using the Array constructor (less common, usually for specific cases like pre-sized arrays)
let anotherEmptyArray = new Array();
let fiveNumbers = new Array(5); // Creates an array with 5 empty slots
let initialNumbers = new Array(1, 2, 3); // Same as [1, 2, 3]


let colors = ["Red", "Green", "Blue", "Yellow"];

console.log(colors[0]); // "Red" (first element)
console.log(colors[1]); // "Green"
console.log(colors[3]); // "Yellow"

// Accessing an index that doesn't exist returns 'undefined'
console.log(colors[10]); // undefined

let students = ["Alice", "Bob", "Charlie"];
console.log(students); // ["Alice", "Bob", "Charlie"]

students[1] = "Brenda"; // Change the element at index 1
console.log(students); // ["Alice", "Brenda", "Charlie"]

let items = ["Pen", "Pencil", "Eraser"];
console.log(items.length); // 3

// The last index in an array is always array.length - 1
console.log(items[items.length - 1]); // "Eraser"

//5. Common Array Methods (Just a Few Examples)

let fruits2 = ["Apple"];
fruits2.push("Banana", "Cherry"); // fruits is now ["Apple", "Banana", "Cherry"]

let fruits3 = ["Apple", "Banana", "Cherry"];
let lastFruit = fruits3.pop(); // lastFruit is "Cherry", fruits is now ["Apple", "Banana"]

// unshift(): Adds one or more elements to the beginning of an array.
let fruits4 = ["Banana"];
fruits4.unshift("Apple"); // fruits is now ["Apple", "Banana"]

//shift(): Removes the first element from an array and returns that element.
let fruits5 = ["Apple", "Banana"];
let firstFruit = fruits5.shift(); // firstFruit is "Apple", fruits is now ["Banana"]

//forEach(): Executes a provided function once for each array element. (Used for iteration)
let numbers = [10, 20, 30];
numbers.forEach(function(num) {
  console.log(num * 2);
});
// Output: 20, 40, 60