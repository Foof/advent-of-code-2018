const fs = require('fs')

const inputRows = fs.readFileSync('./input.txt', 'utf8').split("\n")

function compareWords(id1, id2) {
    const chars1 = id1.split('')
    const chars2 = id2.split('')
    let differences = 0
    for (let i = 0; i < chars1.length; i++) {
        if (chars1[i] !== chars2[i]) differences++
    }
    return differences
}

function removeDifferences(id1, id2) {
    const chars1 = id1.split('')
    const chars2 = id2.split('')
    let result = ''
    for (let i = 0; i < chars1.length; i++) {
        if (chars1[i] === chars2[i]) result += chars1[i]
    }
    return result
}

function findSimilarBoxes(boxIds) {
    for (const id1 of boxIds) {
        for (const id2 of boxIds) {
            const differences = compareWords(id1, id2)
            if (differences === 1) {
                return removeDifferences(id1, id2)
            }
        }
    }
}

const result = findSimilarBoxes(inputRows)
console.log(result)