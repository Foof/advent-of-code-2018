const fs = require('fs')

const inputRows = fs.readFileSync('./input.txt', 'utf8').split("\n")

const resultingFrequency = inputRows.reduce((carry, row) => {
    return carry + parseInt(row)
}, 0)

console.log('Resulting frequency:', resultingFrequency)
