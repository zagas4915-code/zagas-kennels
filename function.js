// function with parameter

// function expression -- assigning a function to a variable

const myfunc = function(a,b){
    return `hello ${a}. Hello ${b}`;
}

console.log(myfunc("michael", "oduah"));

// arrow function

const myfunction = (a,b) =>{
    return a + b;
}

console.log(myfunction(10, 10));

// u can also do it like this

const arrow = (a,b) => (a + b);
console.log(arrow(100,400));


// SCOPE
// Global scope

let myGlobe = "I am a developer";

function global(){
    let check = "Local value";
    console.log(check);
    // this "check" above only works inside the function. it wont work outside it 
}

console.log(myGlobe);


// hoisting 

// console.log(checkhoist());

function cheackhoist(){
    return "i am a developer";
}
// hoisting doesnt work with an arrow function 


// DATA FUNCTION 

const today = new Date ()
let others;

 others = today.getDate();
 others = today.getMonth();
 others = today.getDay();
 console.log(others);


//  Math function 
// round -- this rounds to the nearest whole number 
// floor -- this rounds down to the nearest whole number 
// ceil --- this rounds up the nearest whole number   
// sqrt
// power
// abs
// max
// min

let math;

math = Math.round(2.5);
math = Math.floor(2.5);
math = Math.ceil(2.5);
math = Math.sqrt(100);
math = Math.pow(10,2);
math = Math.abs(-10);
math = Math.max(10,20,30,40,100);
math = Math.min(10,20,30,40,100);

console.log(math)

// check if a number is even or odd

let number = 55;

if(number % 2 == 0){
    alert(`${number} is an even number`);
}
else{
    alert(`${number} is an odd number`);
}


// this is anyother way of doing it 

let Numbers = Number(prompt("choose a number"));

if(Numbers % 2 == 0){
    alert(`${Numbers} is an even number`);
}
else{
    alert(`${Numbers} is an odd number`);
}