"use strict"

let startDate = new Date("July 11, 2022");
let endDate = new Date("November 11, 2022");

// Subtracting 
let datediff= endDate - startDate;

// Converting milliseconds to days
datediff = datediff / (1000 * 60 * 60 * 24);

// Rounding to nearest whole number
datediff = Math.round(datediff);


console.log("Number of days between the two dates:", datediff);
