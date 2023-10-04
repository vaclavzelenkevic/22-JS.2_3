'use strict'
// JavaScript data types:
// Primitive:
// String, Boolean, Number, BigInt
// undefined, null, Symbol
// Reference:
// Object, Array, Function
// String
let humanName = 'Tomas';
console.log(humanName);
console.log(humanName + ' - the type is ' + typeof humanName);
// Boolean: true or false (default)
let myBoolean = true; // true is literal
console.log(myBoolean);
let myBooleanExpression = (10 > 0); 
console.log(myBooleanExpression);
console.log(myBooleanExpression + ' - the type is ' + typeof myBooleanExpression);
console.log(undefined > 0);
console.log(null > 0);
// Number
let myNumber = 10;
console.log(myNumber + ' - the type is ' + typeof myNumber);
myNumber = '10'; // dynamic programming
console.log(myNumber + ' - the type is ' + typeof myNumber);
let myRealNumber = 10.5646465;
console.log(myRealNumber);
console.log(myRealNumber + ' - the type is ' + typeof myRealNumber);
// BigInt
let myBigInt = 646546544n;
console.log(myBigInt + ' - the type is ' + typeof myBigInt);
// Unbdefined
let myUndefined = undefined;
console.log(myUndefined + ' - the type is ' + typeof myUndefined);
// Null
let myNull = null; // null is not object --> JavaScript Bug
console.log(myNull + ' - the type is ' + typeof myNull);
let manoPomidorai = undefined; // No box for value
manoPomidorai = null; // Empty box without value
// Object
let myObject = {
    myObjectSize: 100,
    myObjectColor: 'Red'
};
console.log(myObject);
console.log(myObject + ' - the type is ' + typeof myObject)
// Array
let myArray = ['Tomas', 'Tadas', 'Egle', 'Dovile'];
console.log(myArray);
console.log(myArray + ' - the type is ' + typeof myArray);
// Fuction
function myFunction(){
    console.log('Labas :)');
};
myFunction();
console.log(myFunction() + ' - the type is ' + typeof myFunction());
console.log(function mf(){});
// ---------------------------------------------------------------------------
// JavaScript operators:
// Arithmetic operators:
// +, -, /, *, %, **, ++, --
let number1 = 10;
let number2 = 3;
console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 / number2);
console.log(number1 * number2);
console.log(number1 % number2);
console.log(number1 ** number2); // x^y --> 10^3 --> 1000 (10*10*10)
console.log(number1++); // number1 = number1 + 1
console.log(number1);
console.log(++number1);
console.log(number1--);
console.log(number1);
console.log(--number1);
console.log(number1++ + number2++); // 10, 3 --> 13
console.log(number1, number2);
number1 = 2;
number2 = 6;
console.log(number1++ + number2++ / number1--);
// Assignments operators:
// =, +=, -=, *=, /=, %=, **=, ? (ternary)
let variable = 12;
console.log(variable);
variable += 10; // the same --> variable = variable + 10;
console.log(variable);
variable -= 5;
console.log(variable);
variable *= 5;
console.log(variable);
variable /= 5;
console.log(variable);
variable %= 3;
console.log(variable);
variable **= 5;
console.log(variable);
let isTrue = (5 > 0)?'YES':'NO';
console.log(isTrue);
// Logic operators:
// &&, ||, !
let op1 = true;
let op2 = false;
// &&
console.log(op1 && op1); // true
console.log(op1 && op2); // false
console.log(op2 && op1); // false
console.log(op2 && op2); // false
// ||
console.log(op1 || op1); // true
console.log(op1 || op2); // true
console.log(op2 || op1); // true
console.log(op2 || op2); // false
// !
console.log(!op2); // true
console.log(!op1); // false
// Comparison operators
// ==, ===, !==, !=, >, >=, <, <=
let num1 = 10;
let num2 = '10';
console.log(num1 == num2); // True, value == value
console.log(num1 === num2); // False, value + type === value + type
console.log(num1 != num2); // False
console.log(num1 !== num2); // True
console.log(num1 > num2); // False
console.log(num1 >= num2); // True
console.log(num1 < num2); // False
console.log(num1 <= num2); // True
// Bitwise operators:
// &, |, ~, ^, <<, >>, >>>
// 10 --> 0000 1010
// 2023 --> 2000 + 0 + 20 + 3
// 10^n --> 2*10^3 + 0*10^2 + 2*10^1 + 3*10^0
// 10 --> 0,1,2,3,4,5,6,7,8,9
// 2 --> 0,1
// 2^n --> 1b = 0 or 1
//     --> 1B = 8b = 0000 0000
// 2^0, 2^1, 2^2, ....
// 10 --> 0000 1010
let bitNumber1 = 5;
let bitNumber2 = 3;
console.log(bitNumber1 & bitNumber2);
// 5 --> 0000 0101
// 3 --> 0000 0011
//     & 0000 0001 --> 1
console.log(bitNumber1 | bitNumber2);
// 5 --> 0000 0101
// 3 --> 0000 0011
//     | 0000 0111 --> 7
console.log(bitNumber1 ^ bitNumber2);
// 5 --> 0000 0101
// 3 --> 0000 0011
//     ^ 0000 0110 --> 6
console.log(~bitNumber1);
// 5 --> 0000 0101
//     ~ 1111 1010 --> -6
console.log(bitNumber1 << 1);
// 5 --> 0000 0101
//    << 0000 1010 --> 10
console.log(bitNumber1 >> 1);
// 5 --> 0000 0101
//    >> 0000 0010 --> 2
console.log(bitNumber1 >>> 1);
// 5 --> 0000 0101
//    >> 0000 0010 --> 2
// Swap operation
let box1 = 10;
let box2 = 20;
console.log(box1, box2);
let box3 = undefined;
box3 = box1;
box1 = box2;
box2 = box3;
console.log(box1, box2);
// Swap operation with bitwise operators
