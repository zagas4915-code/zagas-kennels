// LOOP

// FOR OF
// FOR LOOP
// while Loop

// FOR LOOP -+
//Initialization
// condition
// increment

for(let i = 0; i <= 20; i++){
    console.log(i);
}

// Loop through an array using FOR LOOP

let numbers = ['emeka','philip , mike, lilian'];

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

// while loop
// initialization comes first(outside);

let a = 0;

while(a <= 20){
    console.log(a);
    a++
}

let age = prompt("put your age");

while(age < 18){
    age = alert(`please your are not up to 18`);
}


// FOR OF

for (row of numbers){
    console.log(row);
}