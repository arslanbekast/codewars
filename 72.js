// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until
// a single-digit number is produced. The input will be a non-negative integer.

function digitalRoot(n) {
    let arrNumbers = n.toString().split('');
    while (arrNumbers.length > 1) {
        n = arrNumbers.reduce((a, b) => a + Number(b), 0);
        arrNumbers = n.toString().split('');
    }
    return n;
}


console.log(digitalRoot(12334))




