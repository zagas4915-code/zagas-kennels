//VARIABLES

// Ways u can create a variable in javascript

// var
// let
// const

var myname = "michael";
console.log(myname);

let myname2 = "oduah";
console.log(myname2);

const num = 20;
console.log(num);

// VARIABLE NAMING CONVENSION

// Variables dont strat with numbers 
// Variables can start with special characters like dollar sing 

// camelcase naming format E.g "myName"
let myName = "myName";
console.log(myName);

// snakecase naming format E.g "my_name"
let my_name = "my_name";
console.log(my_name);


// DATA TYPE 

// 1) strings
// 2) numbers
// 3) boolean
// 4) null
// 5) undefined
// 6) array

let str = "python";
console.log(typeof(str), str);
// the typeof above is used to check for the data type 

let number = 8000;
console.log(number);

// boolean
// it gives a true or false 
let bool = false;
console.log(bool);

// null
let nul = null

// undefined
let und;
console.log(typeof(und));

// array

let arr = ['Python','Java', 'Ruby', 'C++'];
console.log(arr);

let arr2 = new Array("Ruby", "C++", "Java", "Python" );
console.log(arr2);


// OPERATORS

// Arithmetic operator
// assignment operator
// comparison operator
// logical operator


// Arithmetic operator

// addition
// subtraction
// multiplication
// division

let a = 40;
let b = 200;
let total = a + b;
console.log(total);


// Assignment operator

// =
// +=
// -=
// *=
 
let c = 40;
let d = 200;
c += d;
console.log(c)


let e = 40;
let f = 200;
e -= f;
console.log(e)



let g = 40;
let h = 200;
g *= h;
console.log(g)


// Comparising

// ==
// ===
// <
// >
// <=
// >=
// !=

let value1 = 100;
let value2 = 100;
let compare = value1 == value2;
console.log(compare);

let value3 = 100;
let value4 = 100;
let compare1 = value3 === value4;
console.log(compare1);

let value5 = 100;
let value6 = 100;
let compare2 = value5 <= value6;
console.log(compare2);

let value7 = 100;
let value8 = 100;
let compare3 = value7 >= value8;
console.log(compare3);

// LOGICAL OPERATOR

// AND
// OR

let i = value1 == value2 && value2 > value3;
console.log(e);


// STRING METHODS

// length
let len = "kitech";
console.log(len.length);


// lowercase
console.log(len.toLowerCase());


// uppercase
console.log(len.toUpperCase());

// replace
let text = "I am a developer";
console.log(text.replace('developer', 'Programmer'));

// trim

console.log(text.trim());


// ARRAY METHODS

let array = ['one','two','three','four','five','six','seven','eight','nine','ten'];

// console.log(array=1);

// CHANGING THE VALUE 
console.log(array[2] = 'ten');
console.log(array);

// adding into an array

// push

array.push('olivia');
console.log(array);

// pop
array.pop();
console.log(array);

// shift
array.shift();
console.log(array);

// unshift
array.unshift('stanley');
console.log(array);

// reverse
array.reverse();
console.log(array);

// sort

let numbers = [11, 101, 39, 48, 5];
console.log(numbers.sort((a,b) => a - b ));

// concat
console.log(array.concat(numbers));



///10/9/2025

//ASSOCIATIVE ARRAY(targeting them using their keys)
//key,value

let programme = {
    1: "python",
    2: "Javascrip",
    3: "MongoDb",
    4: "React",
    5: "php",
}

programme[1] = "Node.js";


//MULTI-DIMENSIONAL ARRAY

let multi =  [
    [ 'kizzy','mike', 'philip', 'lilian'],
    ['Laptop', 'phone','tablet'],
    ['owerri','Enugu', 'Lagos','Abuja']
]


 multi[2][3];
//  console. log(multi[2][3]);


//CONDITIONAL STATEMENT : it is used to control the flow of our programme.
//if(it is used for the first positive value )
//else if (it is used to give an alternative)
//switch
//Ternary operator

let age = 10;

if(age < 18 && age > 16){
    console.log('Almost There!!');
} else if (age >= 18 && age <= 70){
    console.log('you are eligible');
} else{
       console.log('None of the Above');
}

//switch

let weather = 'Raining';

switch(weather){
    case 'Raining':
         console.log('Its raining');
         break;

    case "Sunny":
          console.log('Its Sunny');
          break;

    case 'Thundering':
          console.log('Its Thundering');
          break;

    case 'Breezy':
          console.log('Its breezy');
          break;

    default:
          console.log ('None of the Above');

} 


//Ternary Operator
//Short form for if


//condition ? true : false

let cost = 60;

let price = cost >= 60 ? "Its too expensive" : "Its cheap";
console.log(price);


if(cost >= 60){
    console.log("Its too expensive");
} else{
    console.log("Its Cheap");
}
  

//FUNCTION
//it is a block of re-usuable code that performs a specific task

function display(){
    let num1 = 50;
    let num2 = 100;
    let total  = num1 + num2;
    // console.log(total);
    return total;
}
console.log(display());

//Function with Parameter
function addnumber(a,b){
    return a + b;
}
console.log(addnumber(70,90));
console.log(addnumber(90,90));

//15/08/2025



// document.getElementById("demo").innerHTML = "<h2> how are you doing </h3>";





