"use strict"

let fName = "Siddalee Grace";
        //  0123456789A

let positionOfSpace = fName.indexOf(" ");

let firstName = fName.substring (0,positionOfSpace)
let lastName = fName.substring (positionOfSpace +1)

let fullName = firstName + lastName;

console.log (fullName)

console.log (`firstName: ${firstName}`);

console.log (`lastName: ${lastName}`);

