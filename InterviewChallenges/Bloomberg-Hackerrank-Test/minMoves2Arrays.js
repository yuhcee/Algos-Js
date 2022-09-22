/**
 * **6. Minimum moves**
 *
 * There are two arrays of integers `arr1` and `arr2`. One move is defined as an **increment** or **decrement** of 
 * an element in an array.
 *
 * Determine *the **minimum number of moves** to match `arr1` with `arr2`*.
 *
 * **No reordering of the digits is allowed**.
 *
 * **Example:** \
 *    arr1 = [123, 543],\
 *    arr2 = [321, 279]
 *
 * - Match arr1[0] = 123 with arr2[0] = 321
 *      - Increment 1 twice to get 3(2 moves).
 *      - Decrement 3 twice to get 1(2 moves).
 *      - 4 moves are needed to match 123 with 321.
 *
 * - Match arr1[1] = 543 with arr2[1] = 279
 *      - Decrement 5 three times to get 2(3 moves).
 *      - Increment 4 three times to get 7(3 moves).
 *      - Increment 3 six times to get 9(6 moves).
 *      - 12 moves are needed to match 543 with 279.
 * - 16 total moves are needed to match the arrays arr1 and arr2.
 */

const minMoves2 = (arr1, arr2) => {
    let totalMoves = 0;

    for (let i = 0; i < arr2.length; i++) {
        let a = Array.from(String(arr1[i]), Number),
            b = Array.from(String(arr2[i]), Number),
            n = b.length;
        totalMoves += getMoves(a, b, n);
    }

    function getMoves(a, b, n) {
        let moves = 0;

        for (let i = 0; i < n; i++) {
            if (a[i] > b[i]) {
                moves += Math.abs(a[i] - b[i]);
            } else if (a[i] < b[i]) {
                moves += Math.abs(a[i] - b[i]);
            }
        }
        return moves;
    }

    return totalMoves;
};

const arr1 = [311],
    arr2 = [221];
console.log(minMoves2(arr1, arr2));

const arr11 = [123, 543],
    arr22 = [321, 279];
console.log(minMoves2(arr11, arr22));
