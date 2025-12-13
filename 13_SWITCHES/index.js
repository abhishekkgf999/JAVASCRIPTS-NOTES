let dayOfWeek = 3; // Let's say 3 represents Wednesday
let dayName;

switch (dayOfWeek) {
  case 0:
    dayName = "Sunday";
    break; // Exit the switch after matching
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday"; // This case matches!
    break; // Execution stops here
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default: // If dayOfWeek is not 0-6
    dayName = "Invalid Day";
}

console.log(dayName); // Output: Wednesday