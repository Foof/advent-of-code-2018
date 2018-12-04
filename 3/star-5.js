const fs = require('fs')

const inputRows = fs.readFileSync('./input.txt', 'utf8').split("\n")

const fabric = inputRows.reduce((carry, claim) => {
    const parts = claim.split(' ')
    const coords = parts[2].replace(':', '').split(',').map(c => parseInt(c))
    const size = parts[3].split('x').map(s => parseInt(s))

    for (let y = coords[1]; y < coords[1] + size[1]; y++) {
        for (let x = coords[0]; x < coords[0] + size[0]; x++) {
            if (!carry[y]) carry[y] = []
            if (!carry[y][x]) carry[y][x] = 0
            carry[y][x]++
        }
    }

    return carry
}, [])

console.log(fabric.reduce((carry, row) => carry + row.reduce((c2, cell) => cell > 1 ? c2 + 1 : c2, 0), 0))
