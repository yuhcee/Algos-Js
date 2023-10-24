/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **515. Find Largest Value in Each Tree Row**
 *
 * Given the `root` of a binary tree, return *an array of the largest
 * value in each row of the tree (**0-indexed**)*.
 *
 * **Constraints:**
 *
 * - The number of nodes in the tree will be in the range `[0, 104]`.
 * - `-231 <= Node.val <= 231 - 1`
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
const largestValues = function (root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        let levelSize = queue.length;
        let maxValue = -Infinity;

        for (let i = 0; i < levelSize; i++) {
            let currentNode = queue.shift();
            maxValue = Math.max(maxValue, currentNode.val);

            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }

        result.push(maxValue);
    }

    return result;
};

const root = [1, 3, 2, 5, 3, null, 9];
// Output: [1,3,9]
console.log(largestValues(root));
