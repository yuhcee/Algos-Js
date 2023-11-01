/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **501. Find Mode in Binary Search Tree**
 *
 * Given the `root` of a binary search tree (BST) with duplicates,
 * return *all the mode(s) (i.e., the most frequently occurred
 * element) in it*.
 *
 * If the tree has more than one mode, return them in **any order**.
 *
 * Assume a BST is defined as follows:
 *
 * - The left subtree of a node contains only nodes with keys **less
 * than or equal** to the node's key.
 * - The right subtree of a node contains only nodes with keys
 * **greater than or equal to** the node's key.
 * - Both the left and right subtrees must also be binary search trees.
 *
 * **Constraints:**
 *
 * - The number of nodes in the tree is in the range `[1, 104]`.
 * - `-105 <= Node.val <= 105`
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
const findMode = function (root) {
    let currentCount = 0;
    let maxCount = 0;
    let previousVal = null;
    let modes = [];

    function inOrderTraversal(node) {
        if (!node) return;

        inOrderTraversal(node.left);

        if (previousVal === node.val) {
            currentCount++;
        } else {
            currentCount = 1;
        }
        previousVal = node.val;

        if (currentCount > maxCount) {
            maxCount = currentCount;
            modes = [node.val];
        } else if (currentCount === maxCount) {
            modes.push(node.val);
        }

        inOrderTraversal(node.right);
    }

    inOrderTraversal(root);
    return modes;
};
const root = [1, null, 2, 2];
// Output: [2]

const root1 = [0];
// Output: [0]
