/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * **2471. Minimum Number of Operations to Sort a Binary Tree by Level**
 *
 * You are given the `root` of a binary tree with **unique values**.
 *
 * In one operation, you can choose any two nodes **at the same level** and
 * swap their values.
 *
 * Return *the minimum number of operations needed to make the values at each
 * level sorted in a **strictly increasing order***.
 *
 * The **level** of a node is the number of edges along the path between it and
 * the root node.
 *
 * **Constraints:**
 *
 * - The number of nodes in the tree is in the range `[1, 105]`.
 * - `1 <= Node.val <= 105`
 * - All the values of the tree are **unique**.
 *
 * @param {TreeNode} root
 * @return {number}
 */
const minimumOperations = function (root) {
    if (!root) return 0;

    const queue = [root];
    let totalSwaps = 0;

    // Level-order traversal
    while (queue.length > 0) {
        const levelSize = queue.length;
        const levelValues = [];

        // Collect all values at the current level
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            levelValues.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        // Count minimum swaps to sort this level
        totalSwaps += countSwaps(levelValues);
    }

    return totalSwaps;
};

/**
 * Count the minimum swaps needed to sort the array
 * @param {number[]} arr
 * @return {number}
 */
function countSwaps(arr) {
    const n = arr.length;
    const sortedArr = [...arr].sort((a, b) => a - b);
    const indexMap = new Map();

    // Map value to its index in the sorted array
    for (let i = 0; i < n; i++) {
        indexMap.set(sortedArr[i], i);
    }

    // Visited array for cycle detection
    const visited = Array(n).fill(false);
    let swaps = 0;

    for (let i = 0; i < n; i++) {
        if (visited[i] || indexMap.get(arr[i]) === i) continue;

        // Detect cycle
        let cycleLength = 0;
        let j = i;

        while (!visited[j]) {
            visited[j] = true;
            j = indexMap.get(arr[j]);
            cycleLength++;
        }

        // For a cycle of length k, we need (k - 1) swaps
        if (cycleLength > 0) {
            swaps += cycleLength - 1;
        }
    }

    return swaps;
}

const root = [1, 4, 3, 7, 6, 8, 5, null, null, null, null, 9, null, 10];
// Output: 3
/* Explanation:
- Swap 4 and 3. The 2nd level becomes [3,4].
- Swap 7 and 5. The 3rd level becomes [5,6,8,7].
- Swap 8 and 7. The 3rd level becomes [5,6,7,8].
We used 3 operations so return 3.
It can be proven that 3 is the minimum number of operations needed.
 */
console.log(minimumOperations(root));

const root1 = [1, 3, 2, 7, 6, 5, 4];
// Output: 3
/* Explanation:
- Swap 3 and 2. The 2nd level becomes [2,3].
- Swap 7 and 4. The 3rd level becomes [4,6,5,7].
- Swap 6 and 5. The 3rd level becomes [4,5,6,7].
We used 3 operations so return 3.
It can be proven that 3 is the minimum number of operations needed. */
console.log(minimumOperations(root1));
