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
 * **Constraints:**
 *
 * - `TreeNode.val == -1`
 * - The height of the binary tree is less than or equal to `20`
 * - The total number of nodes is between `[1, 104]`
 * - Total calls of `find()` is between `[1, 104]`
 * - `0 <= target <= 106`
 *
 * @param {TreeNode} root
 */
const FindElements = function (root) {
    this.recoveredValues = new Set();
    this.recoverTree(root, 0);
};

FindElements.prototype.recoverTree = function (node, value) {
    if (node === null) return;
    node.val = value;
    this.recoveredValues.add(value);
    this.recoverTree(node.left, 2 * value + 1);
    this.recoverTree(node.right, 2 * value + 2);
};

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
    return this.recoveredValues.has(target);
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
