// TEMPLATE LITERAL -- better way to concatenate string 

let name = "michael";
let location = "lagos";

let result;

result = "my name is " + name + ", i am from" + location + "......";
console.log(result);

// for template literal

result = `hello ${name}, i heard u relocated to ${location}`;

// function

function myname(name){
    return `hello ${name}`;
}
console.log(myname('kizzy'));