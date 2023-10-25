"use strict"

let fName = "Alexia Mckoy";
        //   0123456789A

let positionOfSpace = fName.indexOf(" ");

let firstName = fName.substring(0, positionOfSpace);
let lastName = fName.substring (positionOfSpace + 1);

let fullName = firstName + lastName;

console.log(fullName)

console.log(`First Name: ${firstName}`);
console.log(`Last Name: ${lastName}`);
