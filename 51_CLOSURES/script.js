/*
Closures in JavaScript are a powerful and fundamental concept. 
A closure is created when an inner function "remembers" and has 
access to the variables from its outer (enclosing) scope, even 
after the outer function has finished executing.

🔹 What is a Closure?

A closure is created when a function “remembers” variables from its outer scope, 
even after that outer function has finished executing.
 */

function main(){
    let name = "Abhishek KUmar";
    function dispay(){
        console.log(name);
    }

    return dispay;
}

let name = main();
name();

function createCounter(){
    let count = 0;
    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }

    return {increment};
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();

function createBankAccount(initialBalance){
    let balance = initialBalance;

    return {
        deposit(amount){
            balance += amount;
            console.log(`Deposited: ${amount}, Balance: ${balance}`);
        }, 

        withdraw(amount){
            if(amount <= balance){
                balance -= amount;
                console.log(`Withdrew: ${amount}, Balance: ${balance}`);
            }else{
                console.log(("Insufficient funds"));
            }
        }, 
        getBalance(){
            return balance;
        }
    };
}

let account = createBankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance());
