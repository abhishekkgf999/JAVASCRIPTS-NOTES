/*
nested objects = Objects inside of other Objects.
                 Allows you to represent more complex data structures
                 Child Object is enclosed by a Parent Object

Person{Address{}, ContactInfo{}}
ShoppingCart{Keyboard{}, Mouse{}, Monitor(}}
*/

let student = {
  name: "Abhishek",
  age: 22,
  address: {
    city: "Delhi",
    pin: 110001,
    geo: {
      lat: 28.7041,
      lng: 77.1025
    }
  }
};

console.log(student.name);            // Abhishek
console.log(student.address.city);    // Delhi
console.log(student.address.geo.lat); // 28.7041
