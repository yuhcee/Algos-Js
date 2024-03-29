/**
 * **222. Count Complete Tree Nodes**
 *
 * Given the `root` of a **complete** binary tree, return the number of the nodes in the tree.
 *
 * According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree,
 * and all nodes in the last level are as far left as possible. It can have between `1` and `2h` nodes inclusive at
 * the last level `h`.
 *
 * Design an algorithm that runs in less than `O(n)` time complexity.
 *
 * **Constraints:**
 *
 * - The number of nodes in the tree is in the range `[0, 5 * 104]`.
 * - `0 <= Node.val <= 5 * 104`
 * - The tree is guaranteed to be **complete**.
 *
 * @param {TreeNode} root
 * @return {number}
 */
const countNodes = function (root) {
    if (!root) return 0;
    return countNodes(root.left) + countNodes(root.right) + 1;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const root = [1, 2, 3, 4, 5, 6];
// Output: 6

const root1 = [];
// Output: 0

const root2 = [1];
// Output: 1
