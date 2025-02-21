/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **1261. Find Elements in a Contaminated Binary Tree**
 *
 * Given a binary tree with the following rules:
 *
 * 1. `root.val == 0`
 * 2. For any `treeNode`:
 *  1. If `treeNode.val` has a value `x` and `treeNode.left != null`, then
 * `treeNode.left.val == 2 * `x` + 1`
 *  2. If `treeNode.val` has a value x and `treeNode.right != null`, then
 * `treeNode.right.val == 2 * x + 2`
 *
 * Now the binary tree is contaminated, which means all `treeNode.val` have
 * been changed to `-1`.
 *
 * Implement the `FindElements` class:
 *
 * - `FindElements(TreeNode* root)` Initializes the object with a
 * contaminated binary tree and recovers it.
 * - `bool find(int target)` Returns `true` if the `target` value exists in
 * the recovered binary tree.
 *
 * @param {TreeNode} root
 */
const FindElements = function (root) {};
