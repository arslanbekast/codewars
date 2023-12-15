// Consider an array/list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array (true means present).

const countSheeps = sheep => {
    let result = 0;
    for (sh of sheep) {
        if (sh) result += 1
    }
    return result
}

let sheep = [true, true, false, false, true]
console.log(countSheeps(sheep))
