"use strict"


function getSupplier(code) {
    let pos = code.indexOf(':');
    return code.slice(0, pos);
}

function getProductNumber(code) {
    let startPos = code.indexOf(':') + 1;
    let endPos = code.indexOf('-');
    return code.slice(startPos, endPos);
}

function getSize(code) {
    let pos = code.indexOf('-') + 1;
    return code.slice(pos);
}

// Testing the functions
let sample = "DI:12345-M";
console.log(getSupplier(sample));  // Outputs: DI
console.log(getProductNumber(sample));  // Outputs: 12345
console.log(getSize(sample));  // Outputs: M
