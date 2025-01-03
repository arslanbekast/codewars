// Implement a function that accepts 3 integer values a, b, c.
// The function should return true if a triangle can be built with the sides of given length and false in any other case.

function isTriangle(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return false;
    }
    return (a + b > c) && (a + c > b) && (b + c > a);
}

console.log(isTriangle(3, 4, 5)); // true
console.log(isTriangle(1, 2, 3)); // false
console.log(isTriangle(0, 4, 5)); // false
console.log(isTriangle(5, 1, 1)); // false

