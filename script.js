
// var myName = "olivia";
// console.log(myName);

// LET

let myName2 = "vivian";
console.log(myName2);

// CONST
// const means constant
// Note: You cant redeclare constant
const num = 20;
console.log(num);


// VARIABLE NAMING CONVENSION
// 1.Variables do not start Number
// 2.it can start with special characters like dollar sign
// 3.Camel case naming format
// 4.snakecase naming format

// camelcase
let myName = "olivia";

// snakecase
let my_name = "olivia";


// DATA TYPES
// 1.STRING
// 2.Number
// 3.null 
// 4.Boolean
// 5.Undefined
// 6.Array


//  String
let str = "python";
console.log(str);

// Number
let number = 100;
console.log(number);

// Boolean
let bool =  false;
console.log(bool);

// null
// it means assigning an empty value
let nul = null;
console.log(nul);

// undefined
// Creating a variable without defining anything
let und;
console.log(und);

// Array
// They can be used to store multiple values
let array = ['python','java','ruby','c++'];
console.log(array);
// 
let array2 = new Array(1,2,3,4,5,);
console.log(array2);

//8/9/2025

// OPERATORS

// Arithmetic Operator
// Assignment Operator
// Comparison Operator
// Logical Operator

// ARITHMETIC 
// Addition
// subtraction
// multiplication
// division

let a = 40;
let b = 100;
let total = a / b;
console.log(total);


// ASSIGNMENT OPERATOR
// =
// +=
// -=
// *=

let c = 60;
let d = 30;
c += d;
console.log(c);


// COMPARISON OPERATOR
// ==(equals to,it checks the value)
// ===(stricty identical)
// <
// >
// <=
// >=
// !=(not equal to )

let value1 = 100;
let value2 = 200;
let value3 = 500;
let compare = value1  !=  value2;
console.log(compare);

// LOGICAL OPERATOR
// AND(&&) the must be True True
// OR(||) at least one condition must be correct


let e = value1 == value2 || value2 > value3;
console.log(e);



// STRING METHODS
// length
let len = "Kitech is a developer";
console.log(len.length);

// Uppercase
console.log(len.toUpperCase());

//Lowercase
console.log(len.toLocaleLowerCase());


//Replace

let text = "i am a developer";
console.log(text.replace('developer', 'programmer'));

//Trim(It is used to replace white spaces)

console.log(text.trim());


//ARRAY METHODS
// INDEXTED
let arr = ['jayden','Frankies', 'Olivia', 'Victor' ,'Kelvin', 'Chris', 'Timothy', 'Micheal', 'Decency','Daniel', 'Divine', 'Kene', 'Dikachi', 'Princeton', 'Joshua', 'Esther', 'Raymond', 'Joseph', 'Uchenna'];



//CHANGING THE VALUE
console.log(arr[2] = 'Kizzy');
console.log(arr);

//ADDING INTO ARRAY
//Push (it is used to add something from the back)

arr.push('Olivia');
console.log(arr);

//pop(It is used to remove somethingfrom the back)
arr.pop('kizzy');
console.log(arr);


//unshift (it is used to add something from the front)
arr.unshift('stanley');

//Shift(It is used to remove something from the front of the array.)
arr.shift('stanley');

//Reverse(it is used reverse something from the back to front)
arr.reverse();
console.log(arr);

//Sort
let numbers = [11,10,9,8,5];
console.log(numbers.sort(() => a - b));

//Concat(it means joining something together)
console.log(numbers.concat(arr));



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