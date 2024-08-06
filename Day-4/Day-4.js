//Activity 1(For Loop)
for(let i=1;i<=10;i++)
{
    console.log(i);
}

//Multiplication table of 5
for(let j=1;j<=10;j++)
{
    console.log("Multipication table of 5 is=",5*j);
}

//Sum of 1 to 10 using while loop
let Sum=0,n=1;
while(n<=10){
    Sum=Sum+n;
    n++;
}
console.log("sum of 1 to 10 is=",Sum);

//10 to 1 reverse order
let Sum1=0,n1=10;
while(n1>=1){
    Sum1=Sum1+n1;
    n1--;
}
console.log("sum of 1 to 10 is=",Sum1);

//do while loop
let number=1;
do
{
    console.log(number);
    number++;
}
while(number<=5);

//factorial using do while loop
let n2=4;
let fact = 1;

do {
    fact = fact * n2;
    n2--;
} while (n2 > 0);

console.log(`The factorial of ${n2} is: ${fact}`);


//pattern
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row =row+"* ";
    }
    console.log(row);
}

//skip number
for(let a=1;a<=10;a++){
    if(a===5)
        continue;
    console.log(a);
}

//break demonstaration
for(let b=1;b<=10;b++)
{
    if(b===7)
        break;
    console.log(b);
}
