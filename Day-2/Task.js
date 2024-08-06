let taska = 10;
let taskb = 20;

// Using template literals to include variable values in the string
console.log(`taska = ${taska}, taskb = ${taskb}, taska + taskb = ${taska + taskb}`);
console.log(`taska - taskb = ${taska-taskb}`);
console.log(`taska * taskb = ${taska*taskb}`);
console.log(`taska / taskb = ${taska/taskb}`);
console.log(`taska % taskb = ${taska%taskb}`);

//Activity 2
if(taska<taskb && taskb>taska){
    console.log("task b is greter than task a");
}

if(taska>taskb || taskb>taska){
    console.log("either a is greter than b or b is greter than a");
}

let num1=0;
let message1=num1>=0?"number is greter than or equal to 0":"number is less than 0";
console.log(message1);