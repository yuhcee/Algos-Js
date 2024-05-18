/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * **979. Distribute Coins in Binary Tree**
 *
 * You are given the `root` of a binary tree with `n` nodes where each node in
 * the tree has `node.val` coins. There are `n` coins in total throughout the
 * whole tree.
 *
 * In one move, we may choose two adjacent nodes and move one coin from one node
 * to another. A move may be from parent to child, or from child to parent.
 *
 * Return *the **minimum** number of moves required to make every node have
 * **exactly** one coin*.
 *
 * **Constraints:**
 *
 * - The number of nodes in the tree is `n`.
 * - `1 <= n <= 100`
 * - `0 <= Node.val <= n`
 * - The sum of all Node.val is `n`.
 *
 * @param {TreeNode} root
 * @return {number}
 */
const distributeCoins = function (root) {
    let moves = 0;

    // Helper function to perform post-order DFS and calculate the moves
    function dfs(node) {
        if (node === null) {
            return 0;
        }

        // Post-order traversal: process left and right children first
        const leftExcess = dfs(node.left);
        const rightExcess = dfs(node.right);

        // Current node's excess coins
        const excess = node.val + leftExcess + rightExcess - 1;

        // Update the total number of moves with the absolute value of excess
        moves += Math.abs(excess);

        return excess;
    }

    // Start DFS traversal from the root
    dfs(root);

    return moves;
};

const root = [3, 0, 0];
// Output: 2
// Explanation: From the root of the tree, we move one coin to its left child, and one coin to its right child.
console.log(distributeCoins(root));

const root1 = [0, 3, 0];
// Output: 3
// Explanation: From the left child of the root, we move two coins to the root [taking two moves]. Then, we move one coin from the root of the tree to the right child.
console.log(distributeCoins(root1));
