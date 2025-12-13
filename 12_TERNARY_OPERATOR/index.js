/*

condition ? value_if_true : value_if_false;


ternary operator = a shortcut to if{} and else{} statements
                   helps to assign a variable based on a condition

                   condition ? value_if_true : value_if_false;
*/


let age = 18;
let canVote = (age >= 18) ? "Yes, can vote" : "No, cannot vote";

console.log(canVote); // Output: "Yes, can vote"

age = 16;
canVote = (age >= 18) ? "Yes, can vote" : "No, cannot vote";
console.log(canVote); // Output: "No, cannot vote"