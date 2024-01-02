// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
    let resultStr = ""
    for (let i = 0; i < str.length; i++) {
        resultStr += str[i] + str[i]
    }
    return resultStr;
}

console.log(doubleChar("String"))