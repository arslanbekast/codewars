// Your goal in this kata is to implement a difference function,
// which subtracts one list from another and returns the result.

function arrayDiff(a, b) {
    let arr = [...a]
    for (const value of b) {
        arr = arr.filter(item => item !== value)
    }
    return arr
}


console.log(arrayDiff([1,2,3], [1,2]))




