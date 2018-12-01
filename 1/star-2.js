const fs = require('fs')

const inputRows = fs.readFileSync('./input.txt', 'utf8').split("\n")

const findFrequency = (inputRows) => {
    let currentFrequency = 0
    const visitedFrequencies = []
    while (true) {
        for (let row of inputRows) {
            currentFrequency += parseInt(row)
            if (visitedFrequencies.includes(currentFrequency)) {
                return currentFrequency
            }
            visitedFrequencies.push(currentFrequency)
        }
    }
}

const firstDuplicateFrequency = findFrequency(inputRows)

console.log('First duplicate frequency:', firstDuplicateFrequency)
