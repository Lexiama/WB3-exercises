

"use strict";


                                //DO THIS

function displayMailingLabel(name, address, city, state, zip) {
    let line1 = name;
    let line2 = address;
    let line3 = `${city}, ${state}  ${zip}`;

    console.log(line1);
    console.log(line2);
    console.log(line3);
}

function addNumbers(num1, num2) {
    let result = num1 + num2;
    let message = `${num1} + ${num2} = ${result}`
    console.log(message);

}

function displayReceipt(totalDue, amountPaid) {
    console.log("Total Due: " + totalDue);
    console.log("Amount Paid: " + amountPaid);
    let changeDue = amountPaid - totalDue;
    changeDue = changeDue.toFixed(2);
    console.log("Change Due: " + changeDue);
}

displayMailingLabel("Big Bird", "123 Seasame Street", "Chicago", "IL", "60000")
displayMailingLabel("Mickey Mouse", "123 Disney Lane", "Orlando", "FL", "70000")

addNumbers(1,2);
addNumbers( 100, 505);

displayReceipt(195.99, 200);




                     //DO NOT DO BELOW




// first

function displayMailingLabel(name = "jane", address = "123 street", city = "brooklyn", state = "new york", zip = "12345") {
    console.log(name);
    console.log(address);
    console.log(city + ", " + state + " ," + zip);
}


displayMailingLabel();



// second


function addNumbers(num1 = "1", num2 = "2") {
    let sum = num1 + num2;
    let result = num1 + " + " + num2 + " = " + sum;
    console.log(result);
}

addNumbers ()


// third 

function displayReceipt( totalDue, amountPayed ) {
        console.log("totalDue:" + totalDue ); 
        console.log("amountPayed:" + amountPayed);
        let changeDue = amountPayed - totalDue;
        console.log ("change Due:" + changeDue);




}


displayMailingLabel (" ")