/*
Imagine you're at a restaurant, and you order some food. You tell the waiter what you want. 
You don't just stand there staring at the kitchen; you go back to your table, chat, use your 
phone, etc. When your food is ready, the waiter calls you back to your table (or brings the food to you).

#What is a Callback in JavaScript?
In JavaScript, a callback function is simply a function that is passed as an argument to another function, 
with the intention that it will be executed later.

The "later" part is key!

#Why do we need them?
JavaScript is often asynchronous. This means it can start a task (like fetching data from the internet, or 
waiting for a user to click a button) and then immediately move on to the next line of code, without waiting 
for that task to finish.

If you is is where callbacks come in! You "tell" the first function, "Hey, when you're done,need to do something after that task is complete, you can't just put the code on the next line because 
it might run too soon. Th 
please call this function (the callback) and give it the result.

*/

function sum(a, b, callback){
    let result = a+b;
    callback(result);
}

function display(val){
    console.log(val);
}

// sum(2,3, (val) => {console.log(val);});
sum(2, 3, display);


