// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.
//
// The order of the sequence has to stay the same.

const distinct = arr => Array.from(new Set(arr))

console.log(distinct([1,1,1,2,2,2,2,3,5,3,6]))