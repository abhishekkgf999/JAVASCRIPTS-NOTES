/*
Getters and setters in JavaScript are special methods used to get and set the values of an 
object's properties. They are often used to control access to properties, perform validation,
or execute actions when a property is read or written.


✅ What are Getters and Setters?

Getter → A special method to get the value of a property.

Setter → A special method to set/update the value of a property.

They let you control access to object properties.

*/

//---------------------------------------------- EXAMPLE 1 -------------------------------------------------------------

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }else{
            console.error("Width must be a positive number");
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        }else{
            console.error("Height must be a positive number");
        }
    }

    get width(){
        return this._width;
    }

    get height(){
        return this._height;
    }

    get area(){
        return this._width*this._height;
    }
}

const rectangle = new Rectangle(3, 4);

rectangle.width = -10000000;
rectangle.height = "pizza";

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);


//---------------------------------------------- EXAMPLE 2 -------------------------------------------------------------


class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstName){
        if(typeof newFirstName === "string" && newFirstName.length > 0){
            this._firstName = newFirstName;
        }
        else{
            console.error("First name must be a non-empty string");
        }
    }
    set lastName(newLastname){
        if(typeof newLastname === "string" && newLastname.length > 0){
            this._lastName = newLastname;
        }
        else{
            console.error("Last name must be a non-empty string");
        }
    }

    set age(newAge){
        if(typeof newAge === "number" && newAge > 0){
            this._age = newAge;
        }
        else{
            console.error("age must be a non-negative number");
        }
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get fullName(){
        return this._firstName + " " + this._lastName;
    }

    get age(){
        return this._age;
    }
}

const person = new Person("Spongebob", "Squarepants", 30);

// Use the getters and setters
console.log(person.firstName); // Output: Spongebob
console.log(person.lastName);  // Output: Squarepants
console.log(person.fullName);  // Output: Spongebob Squarepants
console.log(person.age);       // Output: 30

// Try to set invalid values
person.age = "thirty"; // This will log an error to the console
person.firstName = ""; // This will log an error to the console

console.log(person.age);      // Output: 30 (the age was not changed due to the setter)
console.log(person.fullName); // Output: Spongebob Squarepants (the name was not changed)