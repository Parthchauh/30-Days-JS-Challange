// Day 3: Control Structures

// Activity One: Variable Declaration(task 1)
let num = -1;

// Using the ternary operator to determine the message
const message = num > 0 ? "number is greater than zero" : "number is less than or equal to zero";

// Output the message
if (num > 0) {
    console.log(message); // Prints "number is greater than zero"
} else {
    console.log(message); // Prints "number is less than or equal to zero"
}

// Activity One: Variable Declaration(task 2)
let age = 18;
if (age >= 18) {
    console.log("person is eligible for Voting.");
} else {
    console.log("person is not eligible for voting.");
}

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

// Activity 3 (switch Case)
//Task 1
let Day1 = "Monday";
let Day2 = "Tuesday";
let Day3 = "Wednesday";
let Day4 = "Thursday";
let Day5 = "Friday";
let Day6 = "Saturday";
let Day7 = "Sunday";

// Prompt user for day number and convert to a number
// const daynum = parseInt(prompt("Enter day number (1-7):"));
const daynum=3; 
let dayname;

switch (daynum) {
    case 1:
        dayname = Day1;
        break;
    case 2:
        dayname = Day2;
        break;
    case 3:
        dayname = Day3;
        break;
    case 4:
        dayname = Day4;
        break;
    case 5:
        dayname = Day5;
        break;
    case 6:
        dayname = Day6;
        break;
    case 7:
        dayname = Day7;
        break;
    default:
        dayname = "Invalid day number";
}

console.log(`Day ${daynum} is ${dayname}`);

//Task 2 Activity 3
let Score = 99;

switch (true) {
    case (Score >= 90 && Score <= 100):
        console.log("A");
        break;
    case (Score >= 80 && Score < 90):
        console.log("B");
        break;
    case (Score >= 70 && Score < 80):
        console.log("C");
        break;
    case (Score >= 60 && Score < 70):
        console.log("D");
        break;
    default:
        console.log("Invalid Score");
}

//Ternary Operator
let num1=9;

const result=num1%2==0?"Number is Even":"Numeber is Odd";
console.log(result);

//leap year 
function isLeapYear(year) {
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
        // Check if the year is divisible by 100
        if (year % 100 === 0) {
            // If divisible by 100, it must also be divisible by 400
            if (year % 400 === 0) {
                return true; // It is a leap year
            } else {
                return false; // It is not a leap year
            }
        } else {
            return true; // It is a leap year
        }
    } else {
        return false; // It is not a leap year
    }
}

let year=2023;
if(isLeapYear(year)){
    console.log(`${year} is a leap year`);
}
else{
    console.log(`${year} is not a leap year.`);
}