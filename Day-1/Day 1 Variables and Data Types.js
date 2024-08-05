// Day 1: Variables and Data Types

// Activity One: Variable Declaration

// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var numVar = 10;
console.log('Variable declared with var:', numVar);

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let strLet = "Hello, World!";
console.log('Variable declared with let:', strLet);

// Activity Two: Constant Declaration

// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const boolConst = true;
console.log('Variable declared with const:', boolConst);

// Activity Three: Data Types

// Task 4: Create variables of different data types and log each variable's type using the typeof operator.
let num = 42; // Number
let str = "JavaScript"; // String
let bool = false; // Boolean
let obj = { key: "value" }; // Object
let arr = [1, 2, 3]; // Array

console.log('Type of num:', typeof num);
console.log('Type of str:', typeof str);
console.log('Type of bool:', typeof bool);
console.log('Type of obj:', typeof obj);
console.log('Type of arr:', typeof arr);

// Activity Four: Reassigning Variables

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let reassignVar = 5;
console.log('Initial value:', reassignVar);
reassignVar = 10;
console.log('Reassigned value:', reassignVar);

// Activity Five: Understanding const

// Task 6: Try reassigning a variable declared with const and observe the error.
const constVar = 100;
console.log('Initial const value:', constVar);
// Uncommenting the line below will result in an error
// constVar = 200; // Error: Assignment to constant variable.
