// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.
// Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
//
// If the argument is itself not a perfect square then return either -1 or an empty value like None or null,
// depending on your language. You may assume the argument is non-negative.

function findNextSquare(sq) {
    const root = Math.sqrt(sq);
    if (Number.isInteger(root)) {
        const nextRoot = root + 1;
        return nextRoot * nextRoot;
    } else {
        return -1;
    }
}

// Пример использования:
console.log(findNextSquare(121)); // Вывод: 144
console.log(findNextSquare(625)); // Вывод: 676
console.log(findNextSquare(114)); // Вывод: -1
