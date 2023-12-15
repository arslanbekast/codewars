// Create a method to see whether the string is ALL CAPS.

String.prototype.isUpperCase = function() {
    return this.valueOf() === this.valueOf().toUpperCase()
}

console.log('SSSS'.isUpperCase())