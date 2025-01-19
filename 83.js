// Write function that, given an integer number N, returns array of integers 1..N arranged in a way, so sum of each 2
// consecutive numbers is a square.
//
// Solution is valid if and only if following two criteria are met:
//
// Each number in range 1..N is used once and only once.
// Sum of each 2 consecutive numbers is a perfect square.

function square_sums_row(n) {
    const isPerfectSquare = (num) => {
        const sqrt = Math.sqrt(num);
        return sqrt === Math.floor(sqrt);
    };


    const graph = Array.from({ length: n + 1 }, () => []);

    for (let i = 1; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
            if (isPerfectSquare(i + j)) {
                graph[i].push(j);
                graph[j].push(i);
            }
        }
    }

    for (let i = 1; i <= n; i++) {
        graph[i].sort((a, b) => graph[a].length - graph[b].length);
    }

    const visited = Array(n + 1).fill(false);
    let result = [];

    function backtrack(path) {
        if (path.length === n) {
            result = path.slice();
            return true;
        }

        const last = path[path.length - 1];
        for (const neighbor of graph[last]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                path.push(neighbor);

                if (backtrack(path)) {
                    return true;
                }

                path.pop();
                visited[neighbor] = false;
            }
        }

        return false;
    }

    const totalEdges = graph.reduce((sum, edges) => sum + edges.length, 0) / 2;
    if (totalEdges < n - 1) {
        return false;
    }

    for (let i = 1; i <= n; i++) {
        visited[i] = true;
        if (backtrack([i])) {
            return result;
        }
        visited[i] = false;
    }

    return false;
}

console.log(square_sums_row(15));


