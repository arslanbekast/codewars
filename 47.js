// An ordered sequence of numbers from 1 to N is given.
// One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

const findDeletedNumber = (arr, mixArr) => arr.reduce((sum, num) => sum + num, 0) - mixArr.reduce((sum, num) => sum + num, 0)

console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [3,2,4,6,7,8,1,9]))