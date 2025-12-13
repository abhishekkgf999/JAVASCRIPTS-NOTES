// The sort() method in JavaScript is an array method that sorts the elements of
// an array in place and returns the sorted array. By default, it sorts elements 
// as strings in alphabetical and ascending order. This can lead to unexpected results when sorting numbers.

// ⚙️ How It Works (and a Common Pitfall)
// When sort() is used without a custom function, it converts each element to a string and compares their UTF-16 code unit values.

let numbers1 = [10, 2, 5, 20];

// The default sort() will not work as expected
numbers1.sort(); 
console.log(numbers1); // Output: [10, 2, 20, 5]

// The output is [10, 2, 20, 5] because the numbers are 
// treated as strings: "10" comes before "2", "20" comes before "5", etc.

let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

fruits.sort();

console.log(fruits);

// 🛠️ Sorting with a Compare Function
// To sort numbers correctly or to implement a custom sorting logic, 
// you must provide a compare function as an argument to the sort() method.

// The compare function takes two arguments (a and b) and should return:

// A negative value if a should come before b.

// A positive value if b should come before a.

// Zero if the order should remain unchanged.

// Sorting Numbers (Ascending Order)
// To sort numbers in ascending order, the compare function should return a - b.


let numbers = [10, 2, 5, 20];

numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [2, 5, 10, 20]


// Sorting Numbers (Descending Order)
// To sort numbers in descending order, the compare function should return b - a.



let numbers2 = [10, 2, 5, 20];

numbers2.sort((a, b) => b - a);
console.log(numbers2); // Output: [20, 10, 5, 2]


let people = [
  { name: "Charlie", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 }
];

// Sort by age in ascending order
people.sort((a, b) => a.age - b.age);
console.log(people);
