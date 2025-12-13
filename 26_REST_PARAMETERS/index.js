/*
REST PARAMETERS = (...rest) allow a function work with a variable number of arguments by bundling them into an array

                  spread = expands an array into seperate elements 
                  rest = bundles separate elements into an array
*/


function sumAll(...numbers) {
  // 'numbers' here is an array containing all arguments passed to sumAll
  let total = 0;
  for (let num of numbers) { // You can iterate over it like a normal array
    total += num;
  }
  return total;
}

console.log(sumAll(1, 2));             // Output: 3 (numbers = [1, 2])
console.log(sumAll(10, 20, 30));       // Output: 60 (numbers = [10, 20, 30])
console.log(sumAll(5, 5, 5, 5, 5, 5)); // Output: 30 (numbers = [5, 5, 5, 5, 5, 5])
console.log(sumAll());                 // Output: 0 (numbers = [])