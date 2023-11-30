'use strict'
// JavaScript String data type
// String data type methods --> String class
// String declaration and initialization

let text = "JavaScript is the best programming language!";
console.log(text);
let carName1 = "Lada";
let carName2 = 'Toyota';
let carName3 = `Mercedes car auto say ${text}`;
console.log(carName3);
console.log(carName3.length);
// Escape symbols --> \
let message = "On \"Monday\" we\n are\t going\r to\v cinema.";
console.log(message);
let newText = new String("Labas");
console.log(newText);
// String methods
let otherMessage = "I'm beautifull today!";
console.log(otherMessage.length);
let names = "Tomas, Tadas, Dovile, Ruta";
let partOfNames = names.slice(7, 21);
console.log(partOfNames);
console.log(partOfNames.substring(2, 7));
let otherNames = names.replace("Tomas, Tadas","Julija, Eva");
console.log(otherNames);
console.log(names.replaceAll(/a/g, "labas"));
let concatString = names + otherNames;
console.log(concatString);
console.log(names.concat(otherMessage));
console.log(names.charAt(10));
let strangeText = "      Labas     ";
console.log(strangeText.trim());
console.log(strangeText.trimStart());
console.log(strangeText.trimEnd());
console.log(strangeText.toUpperCase());
console.log(names.toLowerCase());
console.log("TADAS".charAt(0).toLowerCase());
console.log(names.split(","));


// JavaScript Arrays
const myCars = ["BMW", 200, "Ferrari"]; // TODO
//array elements: 1       2         3
//indexes:        0       1         2
console.log(myCars);

myCars[0] = "Lada";
console.log(myCars);
myCars[3] = "Audi";
console.log(myCars);
let animalsOther1 = ["Dog", "Cat", "Frog"];
let animalsOther2 = ["Dog", "Cat", "Frog"];
let animals = new Array("Dog", "Cat", "Frog");
console.log(animals);
for(let i = 0; i < animalsOther2.length + 1; i++){
    console.log("<li>" + animalsOther2[i] + "</li>")
}
animalsOther1.push("Katinas");
console.log(animalsOther1);
animalsOther1.pop();
console.log(animalsOther1);
animalsOther1.splice(1, 0, "Turtle");
console.log(animalsOther1);
animalsOther1.shift();
console.log(animalsOther1);
console.log(animalsOther1.concat(animalsOther2));
console.log(animalsOther2.sort());

let numbers = [1, 2, 10, 45, -78, 0, 5];
console.log(numbers.sort(function(a, b){a - b}));

let myArray = [1, 2, 3, 4, 5];
console.log(myArray);
