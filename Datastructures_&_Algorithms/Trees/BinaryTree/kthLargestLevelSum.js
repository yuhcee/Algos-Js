/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **2583. Kth Largest Sum in a Binary Tree**
 *
 * You are given the `root` of a binary tree and a positive integer
 * `k`.
 *
 * The **level sum** in the tree is the **sum** of the values of the
 * nodes that are on the same level.
 *
 * Return *the `kth` **largest** level sum in the tree (not
 * necessarily distinct)*. If there are fewer than `k` levels in the
 * tree, return `-1`.
 *
 * **Note** that two nodes are on the same level if they have the same
 * distance from the root.
 *
 * **Constraints:**
 *
 * - The number of nodes in the tree is `n`.
 * - `2 <= n <= 105`
 * - `1 <= Node.val <= 106`
 * - `1 <= k <= n`
 *
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthLargestLevelSum = function (root, k) {
    if (!root) return -1;

    let levelSums = [];
    let queue = [root];

    // Perform BFS to calculate level sums
    while (queue.length > 0) {
        let levelSize = queue.length;
        let levelSum = 0;

        // Process all nodes at the current level
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            levelSum += node.val;

            // Add children to the queue for the next level
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        // Add the sum of the current level to the levelSums array
        levelSums.push(levelSum);
    }

    // Sort the level sums in descending order
    levelSums.sort((a, b) => b - a);

    // Check if there are enough levels for k
    if (k > levelSums.length) {
        return -1;
    }

    // Return the kth largest level sum (1-based index)
    return levelSums[k - 1];
};

const root = [5, 8, 9, 2, 1, 3, 7, 4, 6],
    k = 2;
// Output: 13
/* Explanation: The level sums are the following:
- Level 1: 5.
- Level 2: 8 + 9 = 17.
- Level 3: 2 + 1 + 3 + 7 = 13.
- Level 4: 4 + 6 = 10.
The 2nd largest level sum is 13. */
console.log(kthLargestLevelSum(root, k));

const root1 = [1, 2, null, 3],
    k1 = 1;
// Output: 3
// Explanation: The largest level sum is 3.
console.log(kthLargestLevelSum(root1, k1));
