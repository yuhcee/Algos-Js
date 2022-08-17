/**
 * A 2-D grid consisting of some blocked (represented as '#') and some unblocked
 * (represented as '.') cells is given. The starting position of a pointer is in the top-left
 * corner of the grid. It is guaranteed that the starting position is in an unblocked cell.
 * It is also guaranteed that the bottom-right cell is unblocked. Each cell of the grid is
 * connected with its right, left, top, and bottom cells (if those cells exist). It takes 1
 * second for a pointer to move from a cell to its adjacent cell. If the pointer can reach
 * the bottom-right corner of the grid within k seconds, return the string 'Yes'.
 * Otherwise, return the string 'No.
 *
 * Example
 * rows = 3
 * grid = ['..##','#.##','#...']
 * maxTime = 5
 *
 * ..##
 * #.##
 * #...
 *
 * It will take the pointer 5 seconds to reach the bottom right corner. As long as k is 5,
 * return 'Yes'.
 *
 */
/* const reachTheEndInTime = (grid, k) => {
    let m = grid.length;
    let n = grid[0].length;

    const distanceTraveled = gridTraveler(m, n);
    console.log(distanceTraveled);
    return distanceTraveled >= k ? 'Yes' : 'No';
};

const grid = ['..##', '#.##', '#...', '#...']; */
// const grid = ['.##', '.#.'];


const gridTraveler = (m, n, memo = {}) => {
    const key = m + ',' + n;

    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1;
    // console.log(m, n);
    // console.log(key);
    if (m === 0 || n === 0) return 0;

    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    // console.log(grid[memo[key]]);
    // console.log(memo[key]);
    console.log(memo);
    return memo[key];
};

console.log(gridTraveler(2, 1));
// console.log(reachTheEndInTime(grid, 6));
