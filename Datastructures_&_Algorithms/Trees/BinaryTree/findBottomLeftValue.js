/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **513. Find Bottom Left Tree Value**
 *
 * Given the `root` of a binary tree, return the leftmost value in the last
 * row of the tree.
 *
 * **Constraints:**
 *
 * - The number of nodes in the tree is in the range `[1, 104]`.
 * `-231 <= Node.val <= 231 - 1`
 *
 * @param {TreeNode} root
 * @return {number}
 */
const findBottomLeftValue = (root) => {
    if (!root) return null;

    let leftmostValue = root.val;
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        leftmostValue = queue[0].val; // Update leftmost value for each level

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return leftmostValue;
};

const root = [2, 1, 3];
// Output: 1
console.log(findBottomLeftValue(root));
