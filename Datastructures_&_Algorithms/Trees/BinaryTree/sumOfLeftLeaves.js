/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **404. Sum of Left Leaves**
 *
 * Given the `root` of a binary tree, return *the sum of all left leaves.*
 *
 * A **leaf** is a node with no children. A **left leaf** is a leaf that is the
 * left child of another node.
 *
 * **Constraints:**
 *
 * - The number of nodes in the tree is in the range `[1, 1000]`.
 * - `-1000 <= Node.val <= 1000`
 *
 * @param {TreeNode} root
 * @return {number}
 */
const sumOfLeftLeaves = function (root) {
    let sum = 0;

    const dfs = (node, isLeft) => {
        if (!node) return;

        if (!node.left && !node.right && isLeft) {
            sum += node.val;
        }

        dfs(node.left, true);
        dfs(node.right, false);
    };

    dfs(root, false);

    return sum;
};
