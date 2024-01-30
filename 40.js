// Complete the function that takes a non-negative integer n as input,
// and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

const powersOfTwo = n =>{
    resArr = []
    for (let i = 0; i <= n; i++) {
        resArr.push(2**i)
    }
    return resArr
}

console.log(powersOfTwo(2))