/*
A constructor in JavaScript is a special function used to create and initialize objects. 
When you create an object using the new keyword, the constructor function is called automatically 
to set up the new object's initial properties and behaviors.

---------------------------------------------------------------------------------------------------------------------------------------------------

## 🔹 What is a Constructor?

 => A constructor in JavaScript is a special kind of function used to create and initialize objects.
 => By convention, constructor function names start with a capital letter.
 => You use the new keyword with a constructor to create an object.


*/

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Mercedes", "AMG", 2023, "blue");
const car3 = new Car("Mahindra", "Thar", 2022, "green");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);

//-------------------------------- EXAMPLE 1 ----------------------------------------------

function Person(name, age){
    this.name = name;
    this.age = age;
    this.greet = function(){
        console.log("Hi, my name is "+ this.name);
    };
}

let user1 = new Person("Abhishek",21);
let user2 = new Person("Varun",22);

user1.greet();
user2.greet();

//-------------------------------- EXAMPLE 2 ----------------------------------------------
//ADDING METHODS WITH PROTOTYPE
/*
=>Instead of defining methods inside the constructor (which duplicates them for every object),
  we attach them to the prototype
*/
function Person2(name, age) {
    this.name = name;
    this.age = age;
}

Person2.prototype.greet2 = function() {
    console.log("Hello, I am " + this.name);
};

let user = new Person2("Abhishek", 21);
user.greet2(); // Hello, I am Abhishek
