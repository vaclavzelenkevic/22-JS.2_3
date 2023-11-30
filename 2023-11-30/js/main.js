'use strict'

// Why we need to use functions?
let num1 = 10;
let num2 = 20;
let result1 = num1 + num2;
// console.log(calculateSum(num1, num2));
// console.log(peopleRock);
let peopleJazz = 100;
let peopleRock = 258;
let result2 = peopleJazz + peopleRock;
let humanName = "Tadas";
// Functions
// Functions names:
// get..., check..., calculate..., ...
function calculateSum(a = 10, b = 20) {
  // console.log(typeof a);
  if (typeof a == "number" && typeof b == "number") {
    return a + b;
  } else {
    // console.log("Labas");
    return 0;
  }
  // humanName = "Egle"; // TODO!!!
}
console.log(humanName);
let funResult = calculateSum(num1, num2);
console.log(humanName);
console.log(funResult);
console.log(calculateSum(peopleJazz, peopleRock));
console.log(calculateSum("Hello, ", "World!"));
console.log(calculateSum({ age: 25 }, { age: 35 }));
console.log(calculateSum());
// Write function for age check ...
// function checkAge(age){
//     if(age >= 18){
//         return true;
//     } else {
//         confirm('Do you have permissions fro your parents?');
//         return false;
//     }
// }

// let answerAge = prompt('How old are you?', 18);
// if(checkAge(answerAge)){
//     alert('Access granted');
// } else {
//     alert('Access denied');
// }

// Function expression
function sayHello1(){
    console.log("Hello");
}
let animal = "Dog"; // Expression

let sayHello2 = function (){ // anonymous (unnamed) function
    console.log("Hello");
}

sayHello1();
sayHello2();

// Callback functions
function sayHello3(){
    console.log("Hello" + sayHello2());
}
sayHello3();

// Arrow functions
let func = (str1, str2) => {
    let str3 = str1 + str2;
    console.log(str3);
};
func("Greitai", " NAMO");
// PD16.1

function powerOfNumber(number){
    return Math.pow(number, 2);
}

