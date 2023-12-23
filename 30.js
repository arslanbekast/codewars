// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language )
// that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

const min = list => {
    let result = list[0]
    for (let i = 1; i < list.length; i++) {
        if (list[i] < result) {
            result = list[i]
        }
    }
    return result;
}

const max = list => {
    let result = list[0]
    for (let i = 1; i < list.length; i++) {
        if (list[i] > result) {
            result = list[i]
        }
    }
    return result;
}

console.log(min([4,6,2,1,9,63,-134,566]))
console.log(max([4,6,2,1,9,63,-134,566]))