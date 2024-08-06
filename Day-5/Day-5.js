function evenodd(number)
{
    if(number%2==0){
        console.log("even number");
    }
    else{
        console.log("odd number.")
    }
}
evenodd(9);

//Square root
function SquareRoot(n){
    let result=n*n;
    console.log("square root of a given number is=",result);
}
SquareRoot(10);

//Max of 2
function MaxOfTwo(n1,n2){
    if(n1>n2){
        console.log(n1,"is greter than",n2);
    }
    else{
        console.log(n1,"is not greter than",n2);
    }
}
MaxOfTwo(10,20);

//string concatenation
function concatenation(str1,str2){
    let result1=str1.concat(str2);
    console.log(result1);
}
concatenation("parth","chauhan");

//Arrow Function
let Sum=(a,b)=>a+b;
console.log("sum of a and b is=",Sum(10,20));

//special character check
const specialchar = (str) =>
{
    const specialcharpattern=/[!@#$%^&*(),.?":{}|<>]/g;
    return specialcharpattern.test(str);
};

console.log(specialchar("parth"));

//Activity 4
function product(num1,num2=20){
    console.log("product of n1 and n2 is=",num1*num2);
}
product(10);

function greetings(name,age=19){
    console.log(`welcome ${name} and your age is ${age}`);
}
greetings("parth");

// Higher-order function that takes a function, a number, and arguments for the function
const repeatFunctionWithArgs = (fn, times, ...args) => {
    for (let i = 0; i < times; i++) {
        fn(...args); // Call the function with the provided arguments
    }
};

// Example function that takes arguments
const greet = (name, message) => {
    console.log(`${name} says: ${message}`);
};

// Usage
repeatFunctionWithArgs(greet, 2, "Parth", "Good morning!"); 
// Should print "Alice says: Good morning!" two times

// Higher-order function that applies two functions sequentially
const applyFunctions = (fn1, fn2, value) => {
    const result1 = fn1(value); // Apply the first function
    return fn2(result1);       // Apply the second function to the result of the first
};

// Example functions to be used with applyFunctions
const double = x => x * 2;
const square = x => x * x;

// Usage
const result = applyFunctions(double, square, 3);
console.log(result); // Output: 36 (3 * 2 = 6, then 6 * 6 = 36)

