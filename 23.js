// Given a set of numbers, return the additive inverse of each.
// Each positive becomes negatives, and the negatives become positives.

const invert = array => array.map(item => -item)

console.log(invert([1,-2,-3,5,3,-6]))