/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **2265. Count Nodes Equal to Average of Subtree**
 *
 * Given the `root` of a binary tree, return *the number of nodes
 * where the value of the node is equal to the **average** of the
 * values in its **subtree**.
 *
 * **Note**:
 *
 * - The average of `n` elements is the **sum** of the `n` elements
 * divided by `n` and **rounded down** to the nearest integer.
 * - A **subtree** of `root` is a tree consisting of `root` and all of
 * its descendants.
 *
 * **Constraints**:
 *
 * - The number of nodes in the tree is in the range `[1, 1000]`.
 * - `0 <= Node.val <= 1000`
 *
 * @param {TreeNode} root
 * @return {number}
 */
const averageOfSubtree = function (root) {
    let result = 0;

    function postOrderTraversal(node) {
        if (!node) return [0, 0]; // [sum, count]

        const [leftSum, leftCount] = postOrderTraversal(node.left);
        const [rightSum, rightCount] = postOrderTraversal(node.right);

        const sum = leftSum + rightSum + node.val;
        const count = leftCount + rightCount + 1;
        const average = Math.floor(sum / count);

        if (node.val === average) {
            result++;
        }

        return [sum, count];
    }

    postOrderTraversal(root);
    return result;
};

const root = [4, 8, 5, 0, 1, null, 6];
// Output: 5
/* Explanation: 
For the node with value 4: The average of its subtree is (4 + 8 + 5 + 0 + 1 + 6) / 6 = 24 / 6 = 4.
For the node with value 5: The average of its subtree is (5 + 6) / 2 = 11 / 2 = 5.
For the node with value 0: The average of its subtree is 0 / 1 = 0.
For the node with value 1: The average of its subtree is 1 / 1 = 1.
For the node with value 6: The average of its subtree is 6 / 1 = 6. */

const root1 = [1];
// Output: 1
// Explanation: For the node with value 1: The average of its subtree is 1 / 1 = 1.
