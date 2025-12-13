/*
In JavaScript, the static keyword is used to define static methods and static 
properties within a class. Static members belong to the class itself, not to any 
specific instance (object) of the class.


That means:

You call them using the class name, not the object name.

Objects created from the class cannot access static members directly.
*/


//-------------------------------------- EXAMPLE 1 ----------------------------------------------
class MathUtil{
    static PI = 3.1414141;

    static getDiameter(radius){
        return radius*2;
    }

    static getCircumference(radius){
        return 2*this.PI*radius;
    }

    static getArea(radius){
        return this.PI*radius*radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(12));
console.log(MathUtil.getArea(12));


//-------------------------------------- EXAMPLE 2 ----------------------------------------------

class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online`);
    }

    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount();
console.log(User.userCount);

