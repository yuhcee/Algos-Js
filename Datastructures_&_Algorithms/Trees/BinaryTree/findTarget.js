/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **653. Two Sum IV - Input is a BST**
 *
 * Given the `root` of a Binary Search Tree and a target number `k`, return *`true` if there exist
 * two elements in the BST such that their sum is equal to the given target*.
 *
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
const findTarget = function (root, k) {
    if (!root) return false;
    const set = new Set();
    const stack = [root];

    while (stack.length) {
        const node = stack.pop();
        if (set.has(k - node.val)) return true;
        set.add(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    return false;
};
