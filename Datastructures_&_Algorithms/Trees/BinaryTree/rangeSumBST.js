/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * **938. Range Sum of BST**
 *
 * Given the root node of a binary search tree and two integers `low`
 * and `high`, return *the sum of values of all nodes with a value in
 * the **inclusive** range `[low, high]`*.
 *
 * **Constraints:**
 *
 * - The number of nodes in the tree is in the range `[1, 2 * 104]`.
 * - `1 <= Node.val <= 105`
 * - `1 <= low <= high <= 105`
 * - All `Node.val` are unique.
 *
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
let rangeSumBST = function (root, low, high) {
    if (!root) {
        return 0;
    }

    let sum = 0;

    if (root.val >= low && root.val <= high) {
        sum += root.val;
    }

    if (root.val > low) {
        sum += rangeSumBST(root.left, low, high);
    }

    if (root.val < high) {
        sum += rangeSumBST(root.right, low, high);
    }

    return sum;
};

const root = [10, 5, 15, 3, 7, null, 18],
    low = 7,
    high = 15;
// Output: 32
// Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.
console.log(rangeSumBST(root, low, high));
