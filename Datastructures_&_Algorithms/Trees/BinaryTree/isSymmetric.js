/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **101. Symmetric Tree**
 *
 * Given the `root` of a binary tree, *check whether it is a mirror of itself* (i.e., symmetric
 * around its center).
 *
 * **Constraints:**
 *
 * - The number of nodes in the tree is in the range `[1, 1000]`.
 * - `-100 <= Node.val <= 100`
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function (root) {
    if (!root) return true;
    return dfs(root.left, root.right);

    function dfs(leftNode, rightNode) {
        if (!leftNode && !rightNode) {
            return true;
        }
        if ((leftNode && !rightNode) || (!leftNode && rightNode) || leftNode.val !== rightNode.val) {
            return false;
        }
        return dfs(leftNode.right, rightNode.left) && dfs(leftNode.left, rightNode.right);
    }
};
