/*
DATE OBJECTS = Date objects in JavaScript are used to work with dates and times. 
               They can store a specific point in time and provide methods to format, manipulate, and calculate dates.

🔹 What is a Date Object?

The Date object in JavaScript is used to work with dates and times.

It represents a single moment in time.

Internally, it stores time as milliseconds since Jan 1, 1970 (UTC) (the Unix Epoch).
*/

//current date and time
let now1  = new Date();
console.log(now1);


// Specific date (YYYY, MM, DD, HH, MM, SS, MS)
// Note: Month is 0-based → 0 = Jan, 11 = Dec
let birthday = new Date(2003, 11, 22, 10, 30);
console.log(birthday);

// Let's break down the components of this string:

// 2003: The year.

// 12: The month (December).

// 22: The day of the month.

// T: A literal separator that indicates the beginning of the time portion.

// 05: The hour (5 AM).

// 00: The minute.

// 00: The second.

// .000: The millisecond.

// Z: This stands for Zulu time, which is another name for UTC (Coordinated Universal Time). 
// It indicates that the time is in the UTC time zone, with zero offset.

// From date string
let d1 = new Date("2025-09-11");
console.log(d1);

// From timestamp (ms since Jan 1, 1970)
let d2 = new Date(0);
console.log(d2); // Thu Jan 01 1970

//GETTING DATE AND TIME
let today = new Date();

console.log(today.getFullYear());   // Year (2025)
console.log(today.getMonth());      // Month (0–11)
console.log(today.getDate());       // Day of month (1–31)
console.log(today.getDay());        // Day of week (0=Sun, 6=Sat)

console.log(today.getHours());      // Hours (0–23)
console.log(today.getMinutes());    // Minutes
console.log(today.getSeconds());    // Seconds
console.log(today.getMilliseconds());// Milliseconds

console.log(today.getTime());       // Timestamp (ms since 1970)

let d = new Date();

d.setFullYear(2030);
d.setMonth(11);   // December
d.setDate(25);
d.setHours(15, 45, 0); // 15:45:00

console.log(d);

let now = new Date();

console.log(now.toDateString());   // Thu Sep 11 2025
console.log(now.toTimeString());   // 20:15:45 GMT+0530 (India Standard Time)
console.log(now.toISOString());    // 2025-09-11T14:45:45.123Z
console.log(now.toLocaleDateString("en-US")); // 9/11/2025
console.log(now.toLocaleString("hi-IN"));     // 11/9/2025, 8:15:45 pm

let start = new Date("2025-01-01");
let end = new Date("2025-09-11");

let diff = end - start; // difference in ms
let days = diff / (1000 * 60 * 60 * 24);

console.log(days); // ~253 days
