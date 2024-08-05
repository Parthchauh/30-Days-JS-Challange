// Arithmetic Operators

// Activity One
let a = 20;
let b = 20;

console.log('Addition: ', a + b); 
console.log('Subtraction: ', a - b);
console.log('Multiplication: ', a * b);
console.log('Division: ', a / b);
console.log('Remainder: ', a % b);

// Activity Two
a += b;
console.log('After shorthand assignment addition: ', a);

a -= b;
console.log('After shorthand assignment subtraction: ', a);

// Activity Three
if (a > b) {
    console.log("a is greater than b");
}

if (a >= b && b <= a) {
    console.log("a is greater than or equal to b and b is less than or equal to a");
}

if (a == b) {
    console.log("a is equal to b");
}

if (a === b) {
    console.log("a is strictly equal to b");
}

// Activity Four
if(a == b) {
    console.log("a is equal to b and a is greater than or equal to b");
}

if(a < b || a > b) {
    console.log("a is less than b or a is greater than b.");
}

// Activity Five
if(a != b) {
    console.log("a is not equal to b");
}

// Activity Six
let num = -1;
let message = num >= 0 ? "number is greater than zero" : "number is less than zero";
console.log(message);
