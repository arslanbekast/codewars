// Given an array of integers, find the one that appears an odd number of times.
//
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    const arr = [...new Set(A)]
    for (const item of arr) {
        const count = A.filter(el => el === item).length;
        if (count % 2 !== 0) {
            return item
        }
    }
}

console.log(findOdd([1,1,2]))
console.log(findOdd([0]))
console.log(findOdd([7]))
console.log(findOdd([0,1,0,1,0]))
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))




