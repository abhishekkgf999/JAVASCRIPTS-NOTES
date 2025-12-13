let age = 20;
let hasLicense = true;

if (age >= 18 && hasLicense) { // Both conditions must be true
  console.log("Eligible to drive.");
}

let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) { // At least one condition must be true
  console.log("It's a day off!");
}

let isLoggedIn = false;
if (!isLoggedIn) { // Checks if isLoggedIn is NOT true
  console.log("Please log in.");
}