// Day 3: Control Structures

// Activity One: Variable Declaration(task 1)
let num =-1;

// Using the ternary operator to determine the message
const message = num > 0 ? "number is greater than zero" : "number is less than or equal to zero";

// Output the message
if (num > 0) {
    console.log(message); // Prints "number is greater than zero"
} 
else{
    console.log(message);
}

// Activity One: Variable Declaration(task 2)
let age=18;
if(age>=18){
    console.log("person is eligible for Voting.");
}
else{console.log("person is not eligible for voting.")}


let a = 10, b = 15, c = 20;

if (a > b && a > c) {
    // a is greater than both b and c
    console.log(`${a} is greater than b and c`);
    
    // Nested condition to check if b is greater than c
    if (b > c) {
        console.log(`${b} is greater than c`);
    } else {
        console.log(`${c} is greater than b`);
    }
} else if (b > a && b > c) {
    // b is greater than both a and c
    console.log(`${b} is greater than a and c`);
    
    // Nested condition to check if a is greater than c
    if (a > c) {
        console.log(`${a} is greater than c`);
    } else {
        console.log(`${c} is greater than a`);
    }
} else {
    // c is greater than both a and b
    console.log(`${c} is greater than a and b`);
    
    // No need for additional nested condition here as it's clear c is the greatest
}


//Acivity 3 (switch Case)
