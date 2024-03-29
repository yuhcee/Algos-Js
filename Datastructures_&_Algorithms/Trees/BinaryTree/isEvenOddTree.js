/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **1609. Even Odd Tree**
 *
 * A binary tree is named **Even-Odd** if it meets the following conditions:
 *
 * - The root of the binary tree is at level index `0`, its children are at level index `1`, their children are at level index `2`, etc.
 * - For every **even-indexed** level, all nodes at the level have odd
 * integer values in strictly **increasing** order (from left to right).
 * - For every **odd-indexed** level, all nodes at the level have even
 * integer values in strictly **decreasing** order (from left to right)
 *
 * Given the `root` of a binary tree, return `true` if the binary tree is
 * **Even-Odd**, otherwise return `false`.
 *
 * **Constraints:**
 *
 * - The number of nodes in the tree is in the range `[1, 105]`.
 * - `1 <= Node.val <= 106`
 *
 * @param {TreeNode} root
 * @return {boolean}
 */
const isEvenOddTree = (root) => {
    if (!root) return false;

    const queue = [[root, 0]];

    while (queue.length > 0) {
        const levelSize = queue.length;
        let prevValue = null;

        for (let i = 0; i < levelSize; i++) {
            const [node, level] = queue.shift();

            // Check if the current node's value satisfies the conditions based on the level
            if (
                (level % 2 === 0 && (node.val % 2 !== 1 || (prevValue !== null && node.val <= prevValue))) ||
                (level % 2 !== 0 && (node.val % 2 !== 0 || (prevValue !== null && node.val >= prevValue)))
            ) {
                return false;
            }

            prevValue = node.val;

            // Enqueue left and right children with their corresponding level indices
            if (node.left) queue.push([node.left, level + 1]);
            if (node.right) queue.push([node.right, level + 1]);
        }
    }

    return true;
};

const root = [1, 10, 4, 3, null, 7, 9, 12, 8, 6, null, null, 2];
// Output: true
/* Explanation: The node values on each level are:
Level 0: [1]
Level 1: [10,4]
Level 2: [3,7,9]
Level 3: [12,8,6,2]
Since levels 0 and 2 are all odd and increasing and levels 1 and 3 are all even and decreasing, the tree is Even-Odd. */
console.log(isEvenOddTree(root));

const root1 = [5, 4, 2, 3, 3, 7];
// Output: false
/* Explanation: The node values on each level are:
Level 0: [5]
Level 1: [4,2]
Level 2: [3,3,7]
Node values in level 2 must be in strictly increasing order, so the tree is not Even-Odd. */
console.log(isEvenOddTree(root1));

const root2 = [5, 9, 1, 3, 5, 7];
// Output: false
// Explanation: Node values in the level 1 should be even integers.
console.log(isEvenOddTree(root2));
