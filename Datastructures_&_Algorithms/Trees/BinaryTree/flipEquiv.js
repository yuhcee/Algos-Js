/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * **951. Flip Equivalent Binary Trees**
 *
 * For a binary tree **T**, we can define a **flip operation** as follows:
 * choose any node, and swap the left and right child subtrees.
 *
 * A binary tree **X** is flip equivalent to a binary tree **Y** if and
 * only if we can make **X** equal to **Y** after some number of flip
 * operations.
 *
 * Given the roots of two binary trees `root1` and `root2`, return `true`
 * if the two trees are flip equivalent or `false` otherwise.
 *
 * **Constraints:**
 *
 * - The number of nodes in each tree is in the range `[0, 100]`.
 * - Each tree will have unique node values in the range `[0, 99]`.
 *
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const flipEquiv = function (root1, root2) {
    // Base case 1: Both nodes are null, they are flip equivalent
    if (!root1 && !root2) return true;

    // Base case 2: One is null but the other isn't, not flip equivalent
    if (!root1 || !root2) return false;

    // Base case 3: Values of current nodes don't match, not flip equivalent
    if (root1.val !== root2.val) return false;

    // Check both possibilities: either without flip or with flip
    const withoutFlip = flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right);
    const withFlip = flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left);

    return withoutFlip || withFlip;
};

const root1 = [1, 2, 3, 4, 5, 6, null, null, null, 7, 8],
    root2 = [1, 3, 2, null, 6, 4, 5, null, null, null, null, 8, 7];
// Output: true
// Explanation: We flipped at nodes with values 1, 3, and 5.
console.log(flipEquiv(root1, root2));

const root11 = [],
    root21 = [];
// Output: true
console.log(flipEquiv(root11, root21));
