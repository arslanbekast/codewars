// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

function getMiddle(s) {
    const length = s.length;
    const middle = Math.floor(length / 2);
    if (length % 2 !== 0) {
        return s[middle];
    }
    else {
        return s[middle - 1] + s[middle];
    }
}

console.log(getMiddle("testing"))