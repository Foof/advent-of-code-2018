const fs = require('fs')

const inputRows = fs.readFileSync('./input.txt', 'utf8').split("\n")

let doubles = 0
let triples = 0
for (const row of inputRows) {
    let charCount = {}
    for (const char of row.split('')) {
        charCount.hasOwnProperty(char) ? charCount[char]++ : charCount[char] = 1
    }

    let double = 0
    let triple = 0
    for (const char in charCount) {
        if (charCount[char] === 2) double = 1
        if (charCount[char] === 3) triple = 1
    }

    doubles += double
    triples += triple
}

console.log('doubles', doubles)
console.log('triples', triples)
console.log('checksum', triples * doubles)
