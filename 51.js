function isPronicNumber(num) {
    if (typeof num !== 'number' || num < 0 || !Number.isInteger(num)) {
        return false;
    }

    for (let i = 0; i * (i + 1) <= num; i++) {
        if (i * (i + 1) === num) {
            return true;
        }
    }

    return false;
}

console.log(isPronicNumber(0));
console.log(isPronicNumber(6));
console.log(isPronicNumber(12));
console.log(isPronicNumber(7));
console.log(isPronicNumber(-1));
console.log(isPronicNumber(0));