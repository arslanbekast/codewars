// Imagine you start on the 5th floor of a building, then travel down to the 2nd floor, then back up to the 8th floor.
// You have travelled a total of 3 + 6 = 9 floors of distance.
//
// Given an array representing a series of floors you must reach by elevator,
// return an integer representing the total distance travelled for visiting each floor in the array in order.

function elevatorDistance(array) {
    let result = 0;
    for (let i=0; i < array.length - 1; i++) {
        let nextRes = array[i] > array[i+1] ? array[i] - array[i+1] : array[i+1] - array[i]
        result += nextRes
    }
    return result
}

console.log(elevatorDistance([3,3]))