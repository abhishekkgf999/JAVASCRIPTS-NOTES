let students = [
  { id: 1, name: "Abhishek", age: 22 },
  { id: 2, name: "Kumar", age: 23 },
  { id: 3, name: "Ravi", age: 21 }
];

console.log(students[0].name); // Abhishek
console.log(students[1].age);  // 23


for (let student of students) {
  console.log(student.name, student.age);
}

students.forEach(s => console.log(`${s.name} is ${s.age} years  old`));


const fruits = [{name: "apple", color: "red", calories: 95},
{name: "orange", color: "orange", calories: 45},
{name: "banana", color: "yellow", calories: 105},
{name: "coconut", color: "white", calories: 159},
{name: "pineapple", color: "yellow", calories: 37}];

const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
console.log(maxFruit);
