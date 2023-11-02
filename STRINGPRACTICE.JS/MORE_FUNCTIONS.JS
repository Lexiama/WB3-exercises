"use strict"

function displayMailingLabel (name, address, city, state, zip) {
    let line1 = name;
    let line2 = address;
    let line3 = city + "," + state + ", " + zip;

    console.log(line1);
    console.log (line2);
    console.log (line3);

}







displayMailingLabel ("spongebob", "123bikni bottom", "brooklyn" , "nyc" , "12345");