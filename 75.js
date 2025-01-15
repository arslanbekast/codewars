// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those
// numbers in the form of a phone number.

function createPhoneNumber(numbers){
    let result ='('
    numbers.forEach((number, i) => {
        result += number
        if (i === 2) result += ') '
        if (i === 5) result += '-'
    })
    return result;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))




