/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **112. Path Sum**
 *
 * Given the `root` of a binary tree and an integer `targetSum`, return `true` if the tree has a **root-to-leaf** path such that
 * adding up all the values along the path equals `targetSum`.
 *
 * A **leaf** is a node with no children.
 *
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
const hasPathSum = function (root, targetSum) {
    if (root === null) return false;

    targetSum -= root.val;

    if (root.left === null && root.right === null) return targetSum === 0;

    return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};

const root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1],
    targetSum = 22;
// Output: true
// Explanation: The root-to-leaf path with the target sum is shown.
console.log(hasPathSum(root, targetSum));

const root1 = [1, 2, 3],
    targetSum1 = 5;
// Output: false
/* Explanation: There two root-to-leaf paths in the tree:
(1 --> 2): The sum is 3.
(1 --> 3): The sum is 4.
There is no root-to-leaf path with sum = 5. */
console.log(hasPathSum(root1, targetSum1));
