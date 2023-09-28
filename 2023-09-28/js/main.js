"use strict";
// Objects, expressions, functions

// var, let, const

// Objects:
// {
//     key:value
// }

// expressions:
// let a = 10

// functions:
// functionA();
let a = 10;
a = 'Labas';
console.log(console.log(a));
// a-z, A-Z, 0-9, _, $
let _ = 'Kazkas';
console.log(_);

let $ = 'Kazkas';
console.log($);

// let 1name = 'Tomas';
// identifier starts immediately after numeric
// camelCase (variables, functions);
function myFunction(){

}
let userRegistrationName = 'Tomas';
// PascalCase (Classes)
String;
// CONSTANT_CASE (constants)
const RED_COLOR = '#FF0000';
const PI_NUMBER = 3.1428;
// do not use --> xyz, uz, ...

let age = 25;
console.log(age);
age = 32; 
console.log(age);

const color = "RED";
console.log(color);
// color = "GREEN";
// invalid assignment to const 'color'

// const carModel;
// missing = in const declaration
// console.log(carModel);

// Scope
// console.log(dogName);
let dogName = 'Tuzikas';
// can't access lexical declaration 'dogName' before initialization

{
    dogName = 'Reksas';
    console.log(dogName);
}
console.log(dogName);

// function myDog(){
//     dogName = 'Katinas';
// }
// console.log(dogName);

// Boolean: false (0), true(1 arba ne 0)
let boolExp = 1 > 0;
console.log(boolExp);
// Number: 1, 1.5, 1/2, ...
let decNumber = 10;
console.log(decNumber);
let realNumber = 10.548;
console.log(realNumber);
console.log(1/2);
// Number --> Precision -2^53 + 1 to 2^53 - 1
// BigInt
let bigNumber = 10n;
// String '', "", ``
let text = 'It is ';
let animalName = `${text}papuga`;
console.log(animalName);
console.log(`${animalName}` + ' afrikoj');
// undefined
let nothing;
console.log(nothing);
// null
nothing = null;
console.log(nothing);
// Symbol
// ???
// Casting
let castString = 10;
console.log(typeof String(castString));
// Conversion to String
console.log('10' + 10);
console.log(10 + '10');
// Conversion to Number
console.log(10 + Number('10'));
console.log('10'/2);
console.log(2/'10');
console.log(10/0);
console.log(0/0.5);
console.log('I am a cat'/0);
console.log(NaN/NaN);
console.log(NaN/0);
console.log(Infinity/NaN);
console.log(Infinity/Infinity);
console.log(typeof (1 > 0));
console.log(typeof console.log());
