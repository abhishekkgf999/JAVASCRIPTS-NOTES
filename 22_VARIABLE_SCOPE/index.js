//GLOBAL SCOPE
let name = "Abhishek"; // global

function greet() {
  console.log(name); // ✅ accessible
}
greet();


//FUNCTION SCOPE
function test() {
  let age = 20;
  console.log(age); // ✅ accessible
}
test();
// console.log(age); // ❌ Error: age is not defined


//BLOCK SCOPE
if (true) {
  let x = 5;
  const y = 10;
  var z = 15;
  console.log(x, y, z); // ✅ 5 10 15
}
// console.log(x); // ❌ Error
// console.log(y); // ❌ Error
console.log(z); // ✅ 15 (because var is function-scoped, not block-scoped)
