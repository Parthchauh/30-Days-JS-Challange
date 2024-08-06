// Declare variables of different data types
let numberVariable = 42;
let stringVariable = "Hello, world!";
let booleanVariable = true;
let objectVariable = { key: "value" };
let arrayVariable = [1, 2, 3, 4, 5];
let functionVariable = function() { return "I am a function"; };
let nullVariable = null;
let undefinedVariable;

// Log the value and type of each variable
console.log("Value:", numberVariable, "Type:", typeof numberVariable);
console.log("Value:", stringVariable, "Type:", typeof stringVariable);
console.log("Value:", booleanVariable, "Type:", typeof booleanVariable);
console.log("Value:", objectVariable, "Type:", typeof objectVariable);
console.log("Value:", arrayVariable, "Type:", typeof arrayVariable);
console.log("Value:", functionVariable, "Type:", typeof functionVariable);
console.log("Value:", nullVariable, "Type:", typeof nullVariable);
console.log("Value:", undefinedVariable, "Type:", typeof undefinedVariable);


//Activity 2
let a=10;
console.log("this is simple A without Reassignment.",a);

a=30;
console.log("after reassignment of A the value of a is=",a);

const constVariable = "Initial value";
console.log("constVariable (initial):", constVariable);

// Attempting to reassign the `const` variable
try {
    constVariable = "Reassigned value"; // This will throw an error
} catch (error) {
    console.log("Error when reassigning constVariable:", error.message);
}

// You can also check the behavior within a block scope
if (true) {
    let blockScopedLet = "Block scoped let";
    const blockScopedConst = "Block scoped const";
    console.log("blockScopedLet:", blockScopedLet);
    console.log("blockScopedConst:", blockScopedConst);
}