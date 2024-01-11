/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **1026. Maximum Difference Between Node and Ancestor**
 *
 * Given the `root` of a binary tree, find the maximum value `v` for
 * which there exist **different** nodes `a` and `b` where `v = |a.val -
 * b.val|` and `a` is an ancestor of `b`.
 *
 * A node `a` is an ancestor of `b` if either: any child of `a` is equal
 * to `b` or any child of `a` is an ancestor of `b`.
 *
 * **Constraints:**
 *
 * - The number of nodes in the tree is in the range `[2, 5000]`.
 * - `0 <= Node.val <= 105`
 *
 * @param {TreeNode} root
 * @return {number}
 */
const maxAncestorDiff = function (root) {
    function iterate(node, max, min) {
        if (!node) return max - min;

        max = Math.max(max, node.val);
        min = Math.min(min, node.val);

        return Math.max(iterate(node.left, max, min), iterate(node.right, max, min));
    }
    return iterate(root, root.val, root.val);
};
