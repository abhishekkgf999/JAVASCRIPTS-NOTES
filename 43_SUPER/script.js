/*
The super keyword in JavaScript is used inside a subclass to access and call methods 
or properties of its parent class. It's essential for implementing class inheritance, 
allowing a child class to build upon or override the functionality of its parent.


*/

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
}

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}

class Hawk extends Animal{
    constructor(name, age, flyingSpeed){
        super(name, age);
        this.flyingSpeed = flyingSpeed;
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 12);
const hawk = new Hawk("hawk", 3, 50);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);
