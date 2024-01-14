// Given a string, you must decide whether or not it contains a valid phone number.
// If it does, return the corrected phone number as a string ie. '02078834982' with no whitespace or special characters,
// else return "Not a phone number".

function isItANum(str) {
    str = str.replace(/[^+\d]/g, '')
    if (str.length === 11 && str[0] === '0') {
        return str
    }
    return "Not a phone number"
}

console.log(isItANum("sjfniebienvr12312312312ehfWh"))