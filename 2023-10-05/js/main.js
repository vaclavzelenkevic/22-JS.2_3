'use strict';

// if statement
let humanAge = 20;
if (humanAge >= 21){
    console.log('You can buy the alcohol drinks!');
};
// if-else statement
if (humanAge >= 21){
    console.log('You can buy the alcohol drinks!');
}else {
    console.log('You can buy only the milk!');
};
// if-else-if
if (humanAge < 0){
    console.log('Your age is wrong!');
} else {
    if (humanAge >= 21){
        console.log('You can buy the alcohol drinks!');
    }else if (humanAge >=16 && humanAge < 21){
        console.log('You can buy only the coca-cola!');
    }else {
        console.log('You can buy only the milk!');
    };
};
// Ternary operator ? == if
let meteoStation = 1;
let isRainingToday = (meteoStation == 1)?'Yes':'No';
console.log(isRainingToday);
// Switch statement
switch(meteoStation){
    case 1:
        console.log('It is raining ...');
        break;
    case 0:
        console.log('Sunny day ...');
        break;
    default:
        console.log('Other conditions');
        break;
};

// Loops: for, while, do-while
// For
for(let x = 0; x <= 10; x++){
    if(x == 5){
        console.log('It is five!');
    } else {
        console.log(x);
    };
};
// While
let intNumber = 3;
while(intNumber <= 5){
    console.log(intNumber);
    intNumber++;
};
// Do-while
do{
    console.log(intNumber);
    intNumber++;
} while (intNumber <= 5);
// Infinity loops, very bad practice :)
// for(;;){
//     console.log("I'm Infinity");
// };
// while(true){
//     console.log("I'm Infinity");
// };
// do {
//     console.log("I'm Infinity");
// } while(true);
// for-in, for-of
// For-in
const myObject = {
    a: 1,
    b: 2,
    c: 3
};
for(const property in myObject){
    console.log(property, ': ' + myObject[property]);
};
// For-of
let myArray = ['Tomas', 'Tadas', 'Tedy'];
let text = '';
for(let x of myArray){
    text += x;
    text += ' ';
};
console.log(text);

