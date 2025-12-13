console.log("--- Type Conversion Examples ---");

// --- Implicit Type Conversion (JavaScript does it automatically) ---

console.log("\n--- Implicit Conversion (Coercion) ---");

// 1. Number to String (when adding with a string)
let num = 10;
let message = "The number is: " + num;
console.log(`'The number is: ' + ${num}  -> "${message}" (type: ${typeof message})`); // Output: "The number is: 10"

// 2. String to Number (in arithmetic operations)
let strNum1 = "20";
let strNum2 = "5";
let difference = strNum1 - strNum2;
console.log(`'${strNum1}' - '${strNum2}'  -> ${difference} (type: ${typeof difference})`); // Output: 15

// 3. To Boolean (in logical contexts like 'if' statements)
let zero = 0;
let emptyString = "";
let nonZero = 5;
let text = "hello";

if (zero) {
    console.log(`'${zero}' is truthy.`);
} else {
    console.log(`'${zero}' is falsy.`); // This runs
}

if (emptyString) {
    console.log(`'${emptyString}' is truthy.`);
} else {
    console.log(`'${emptyString}' is falsy.`); // This runs
}

if (nonZero) {
    console.log(`'${nonZero}' is truthy.`); // This runs
}

if (text) {
    console.log(`'${text}' is truthy.`); // This runs
}


// --- Explicit Type Conversion (You tell JavaScript to do it) ---

console.log("\n--- Explicit Conversion (Manual) ---");

// 1. To String
let myNum = 123;
let myBool = true;

let numAsString = String(myNum); // Using String() function
let boolAsString = myBool.toString(); // Using .toString() method

console.log(`String(${myNum})       -> "${numAsString}" (type: ${typeof numAsString})`); // Output: "123"
console.log(`${myBool}.toString()  -> "${boolAsString}" (type: ${typeof boolAsString})`);   // Output: "true"


// 2. To Number
let strToConvert = "456";
let anotherStr = "3.14";
let pxValue = "75px";

let convertedNum = Number(strToConvert);       // Using Number() function
let convertedFloat = parseFloat(anotherStr);    // Using parseFloat() for decimals
let parsedInt = parseInt(pxValue);              // Using parseInt() for whole numbers

console.log(`Number('${strToConvert}')    -> ${convertedNum} (type: ${typeof convertedNum})`);     // Output: 456
console.log(`parseFloat('${anotherStr}') -> ${convertedFloat} (type: ${typeof convertedFloat})`); // Output: 3.14
console.log(`parseInt('${pxValue}')     -> ${parsedInt} (type: ${typeof parsedInt})`);       // Output: 75

// What happens if it can't be converted?
let invalidNumStr = "hello";
let resultInvalid = Number(invalidNumStr);
console.log(`Number('${invalidNumStr}')   -> ${resultInvalid} (type: ${typeof resultInvalid})`); // Output: NaN (Not-a-Number)


// 3. To Boolean
let valueZero = 0;
let valueNonZero = 100;
let valueEmptyString = "";
let valueText = "Hi";

let zeroAsBool = Boolean(valueZero);
let nonZeroAsBool = Boolean(valueNonZero);
let emptyStrAsBool = Boolean(valueEmptyString);
let textAsBool = Boolean(valueText);

console.log(`Boolean(${valueZero})        -> ${zeroAsBool} (type: ${typeof zeroAsBool})`);         // Output: false
console.log(`Boolean(${valueNonZero})     -> ${nonZeroAsBool} (type: ${typeof nonZeroAsBool})`);   // Output: true
console.log(`Boolean('${valueEmptyString}') -> ${emptyStrAsBool} (type: ${typeof emptyStrAsBool})`); // Output: false
console.log(`Boolean('${valueText}')      -> ${textAsBool} (type: ${typeof textAsBool})`);       // Output: true