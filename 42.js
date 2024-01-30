// Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

function monkeyCount(n) {
    let resArr = []
    for (let i = 1; i <= n; i++) {
        resArr.push(i)
    }
    return resArr
}

console.log(monkeyCount(10))