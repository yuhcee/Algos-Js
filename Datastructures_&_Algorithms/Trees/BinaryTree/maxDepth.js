// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

/**
 * **104. Maximum Depth of Binary Tree**
 *
 * Given the root of a binary tree, return *its maximum depth*.
 *
 * A binary tree's **maximum depth** is the number of nodes along the longest path from the root node down to the
 * farthest leaf node.
 *
 * **Constraints:**
 *
 * - The number of nodes in the tree is in the range `[0, 104]`.
 * - `-100 <= Node.val <= 100`
 *
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root) {
    // If the root is null, the tree has depth 0
    if (!root) {
        return 0;
    }

    // Recursively compute the maximum depth of the left and right subtrees
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    // The depth of the entire tree is the maximum of the depths of the left and right subtrees,
    // plus one for the root node itself
    return Math.max(leftDepth, rightDepth) + 1;
};
const root = [3, 9, 20, null, null, 15, 7];
// Output: 3
console.log(maxDepth(root));

const root1 = [1, null, 2];
// Output: 2
console.log(maxDepth(root1));
