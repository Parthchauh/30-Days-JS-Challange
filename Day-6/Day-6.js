// Create an array with numbers from 1 to 5
const Arr = [1, 2, 3, 4, 5];

// Loop through the array and log each element
for (let i = 0; i < Arr.length; i++) {
    console.log(Arr[i]);
}

console.log(Arr[0],"And",Arr[4]);

//Push,pop,shift,unshift
Arr.push(6);
// Print the updated array
console.log("Array after push:");
for (let i = 0; i < Arr.length; i++) {
    console.log(Arr[i]);
}

Arr.pop();
console.log("Array after pop:");
for (let i = 0; i < Arr.length; i++) {
    console.log(Arr[i]);
}

Arr.shift();
console.log("Array after Shift:");
for (let i = 0; i < Arr.length; i++) {
    console.log(Arr[i]);
}

Arr.unshift(1);
console.log("Array after unShift:");
for (let i = 0; i < Arr.length; i++) {
    console.log(Arr[i]);
}

//Array map method
const array=[1,2,3,4,5];
const doubleArr=array.map(num=>num*2);

console.log("original array:",array);
console.log("double Array:",doubleArr);

// Create an array with numbers from 1 to 10
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use the filter method to create a new array with only even numbers
const evenArr = arr.filter(num => num % 2 === 0);

// Log the new array
console.log("Original array:", arr);
console.log("Even numbers array:", evenArr);


// Create an array with numbers
const arr1= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use the reduce method to calculate the sum of all numbers in the array
const sum = arr1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Log the result
console.log("The sum of all numbers in the array is:", sum);

//Array iteration
for(let i=0;i<arr.length;i++)
{
    console.log("Array elements=",arr[i]);
}

arr.forEach(element => {
    console.log(element);
});

// Create a two-dimensional array (matrix)
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Log the entire matrix to the console
console.log("Matrix:");
matrix.forEach(row => {
    console.log(row.join(' ')); // Join elements of each row with a space and log
});

//Access Element
console.log(matrix[1][2]);