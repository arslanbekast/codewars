// A format for expressing an ordered list of integers is to use a comma separated list of either

function solution(list) {
    let result = [];
    let start = list[0];
    let end = start;

    for (let i = 1; i <= list.length; i++) {
        if (list[i] === end + 1) {
            end = list[i];
        } else {
            if (end - start >= 2) {
                result.push(`${start}-${end}`);
            } else {
                for (let j = start; j <= end; j++) {
                    result.push(j.toString());
                }
            }
            start = list[i];
            end = start;
        }
    }

    return result.join(',');
}

console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));