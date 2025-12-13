let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B"); // This will be executed
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

let time = 10; // Current time is 11:34:46 PM IST

if (time < 12) {
  console.log("Good Morning!");
} else if (time < 18) {
  console.log("Good Afternoon!");
} else {
  console.log("Good Evening!"); // This will be executed for time = 23 (11 PM)
}