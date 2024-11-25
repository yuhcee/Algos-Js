/**
 * **773. Sliding Puzzle**
 *
 * On an `2 x 3` board, there are five tiles labeled from `1` to `5`, and an
 * empty square represented by `0`. A **move** consists of choosing 0 and a
 * 4-directionally adjacent number and swapping it.
 *
 * The state of the board is solved if and only if the board is `[[1,2,3],[4,5,
 * 0]]`.
 *
 * Given the puzzle board `board`, return *the least number of moves required
 * so that the state of the board is solved.* If it is impossible for the state
 * of the board to be solved, return `-1`.
 *
 * **Constraints:**
 *
 * - `board.length == 2`
 * - `board[i].length == 3`
 * - `0 <= board[i][j] <= 5`
 * - Each value `board[i][j]` is unique.
 *
 * @param {number[][]} board
 * @return {number}
 */
const slidingPuzzle = function (board) {
    const target = '123450'; // Target state
    const start = board.flat().join(''); // Initial state as a string

    // Possible moves for each index in a 2x3 grid
    const moves = [
        [1, 3], // Index 0: Move right (1) or down (3)
        [0, 2, 4], // Index 1: Move left (0), right (2), or down (4)
        [1, 5], // Index 2: Move left (1) or down (5)
        [0, 4], // Index 3: Move up (0) or right (4)
        [1, 3, 5], // Index 4: Move up (1), left (3), or right (5)
        [2, 4], // Index 5: Move up (2) or left (4)
    ];

    const queue = [[start, start.indexOf('0'), 0]]; // [state, index of 0, move count]
    const visited = new Set([start]);

    while (queue.length > 0) {
        const [state, zeroIndex, movesCount] = queue.shift();

        // Check if we've reached the target state
        if (state === target) return movesCount;

        // Generate all possible states by moving the zero
        for (const nextIndex of moves[zeroIndex]) {
            const newState = state.split('');
            [newState[zeroIndex], newState[nextIndex]] = [newState[nextIndex], newState[zeroIndex]];
            const newStringState = newState.join('');

            if (!visited.has(newStringState)) {
                visited.add(newStringState);
                queue.push([newStringState, nextIndex, movesCount + 1]);
            }
        }
    }

    return -1; // If no solution is found
};

const board = [
    [1, 2, 3],
    [4, 0, 5],
];
// Output: 1
// Explanation: Swap the 0 and the 5 in one move.
console.log(slidingPuzzle(board));

const board1 = [
    [1, 2, 3],
    [5, 4, 0],
];
// Output: -1
// Explanation: No number of moves will make the board solved.
console.log(slidingPuzzle(board1));

const board2 = [
    [4, 1, 2],
    [5, 0, 3],
];
// Output: 5
/* Explanation: 5 is the smallest number of moves that solves the board.
An example path:
After move 0: [[4,1,2],[5,0,3]]
After move 1: [[4,1,2],[0,5,3]]
After move 2: [[0,1,2],[4,5,3]]
After move 3: [[1,0,2],[4,5,3]]
After move 4: [[1,2,0],[4,5,3]]
After move 5: [[1,2,3],[4,5,0]] */
console.log(slidingPuzzle(board2));
