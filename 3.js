// Convert number to reversed array of digits

function digitize(num) {
    return ('' + num).split('').reverse().map(digit => +digit);
}

console.log(digitize(123));