//#METHODS FOR GETTING INFORMATION

//1. .length property (not a method): Returns the number of characters in a string.   
let text = "Hello World";
console.log(text.length); // 11

//charAt(index): Returns the character at a specified index (position).
let str = "Apple";
console.log(str.charAt(0)); // "A"
console.log(str.charAt(3)); // "l"

//charCodeAt(index): Returns the Unicode (UTF-16) value of the character at a specified index.
let char = "A";
console.log(char.charCodeAt(0)); // 65

//indexOf(searchValue, fromIndex): Returns the first index at which a given substring can be found, or -1 if not found.
let sentence = "JavaScript is fun!";
console.log(sentence.indexOf("Script")); // 4
console.log(sentence.indexOf("java"));   // -1 (case-sensitive)

//lastIndexOf(searchValue, fromIndex): Returns the last index at which a given substring can be found, or -1.
let fullText = "hello world hello";
console.log(fullText.lastIndexOf("hello")); // 12

//includes(searchValue, fromIndex): Checks if a string contains a specified substring. Returns true or false. (Case-sensitive)
let phrase = "To be or not to be";
console.log(phrase.includes("be")); // true
console.log(phrase.includes("Be")); // false

//startsWith(searchValue, start): Checks if a string starts with a specified substring. Returns true or false
let file = "document.pdf";
console.log(file.startsWith("doc")); // true

//endsWith(searchValue, length): Checks if a string ends with a specified substring. Returns true or false.
let filename = "image.jpg";
console.log(filename.endsWith(".jpg")); // true


//#METHODS FOR EXTRACTING PARTS OF A STRING

//slice(startIndex, endIndex): Extracts a part of a string and returns a new string.

// endIndex is exclusive.

// Negative indices count from the end of the string.
let browser = "Mozilla";
console.log(browser.slice(0, 3));  // "Moz"
console.log(browser.slice(3));     // "illa" (from index 3 to end)
console.log(browser.slice(-3));    // "lla" (last 3 characters)

//substring(startIndex, endIndex): Similar to slice(), but handles negative indices differently (treats them as 0). It also swaps startIndex and endIndex if startIndex is greater than endIndex.
let data = "JavaScript";
console.log(data.substring(4, 8));  // "Scri"
console.log(data.substring(8, 4));  // "Scri" (swaps arguments)

//substr(startIndex, length) (Deprecated but still common): Extracts length characters starting from startIndex.
let lang = "Python";
console.log(lang.substr(2, 3)); // "tho" (starts at index 2, takes 3 chars)


//#METHODS FOR MODIFYING STRINGS (RETURN NEW STRINGS)

//replace(searchValue, newValue): Replaces the first occurrence of searchValue with newValue
let oldText = "Hello World, World is great!";
let newText = oldText.replace("World", "Universe");
console.log(newText); // "Hello Universe, World is great!"

//replaceAll(searchValue, newValue): Replaces all occurrences of searchValue with newValue. (ES2021)
let original = "cat, dog, cat, bird";
let updated = original.replaceAll("cat", "fish");
console.log(updated); // "fish, dog, fish, bird"

//toUpperCase(): Converts the entire string to uppercase.
let lower = "hello";
console.log(lower.toUpperCase()); // "HELLO"

//toLowerCase(): Converts the entire string to lowercase.
let upper = "WORLD";
console.log(upper.toLowerCase()); // "world"

//trim(): Removes whitespace from both ends of a string.
let messy = "   Extra spaces   ";
console.log(`'${messy.trim()}'`); // 'Extra spaces'

//trimStart() (or trimLeft()): Removes whitespace from the beginning of a string.
let messyStart = "   Hello";
console.log(`'${messyStart.trimStart()}'`); // 'Hello'

//trimEnd() (or trimRight()): Removes whitespace from the end of a string.
let messyEnd = "World   ";
console.log(`'${messyEnd.trimEnd()}'`); // 'World'

//concat(string1, string2, ...): Joins two or more strings. The + operator is often preferred for readability.
let part1 = "Web";
let part2 = "Development";
console.log(part1.concat(" ", part2)); // "Web Development"

//split(separator): Divides a string into an ordered list of substrings, puts these substrings into an array, and returns the array.
let csv = "apple,banana,cherry";
let fruits = csv.split(","); // ["apple", "banana", "cherry"]
console.log(fruits);

let sentence1 = "Hello World";
let words = sentence1.split(" "); // ["Hello", "World"]
console.log(words);

let characters = "JavaScript".split(""); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
console.log(characters);

//repeat(count): Returns a new string with the original string repeated a specified number of times.
let star = "*";
console.log(star.repeat(5)); // "*****"

//padStart(targetLength, padString): Pads the current string with another string (repeated, if needed) until the resulting string reaches the targetLength. Padding is applied from the start.
let num = "5";
console.log(num.padStart(3, "0")); // "005"

//padEnd(targetLength, padString): Similar to padStart, but padding is applied from the end.
let item = "Milk";
console.log(item.padEnd(10, ".")); // "Milk......"