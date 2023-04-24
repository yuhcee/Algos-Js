/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **662. Maximum Width of Binary Tree**
 *
 * Given the `root` of a binary tree, return *the **maximum width** of the given
 * tree*.
 *
 * The **maximum width** of a tree is the maximum **width** among all levels.
 *
 * The **width** of one level is defined as the length between the end-nodes (the
 * leftmost and rightmost non-null nodes), where the null nodes between the
 * end-nodes that would be present in a complete binary tree extending down to
 * that level are also counted into the length calculation.
 *
 * It is **guaranteed** that the answer will in the range of a **32-bit** signed
 * integer.
 *
 * **Constraints**
 *
 * - The number of nodes in the tree is in the range `[1, 3000]`.
 * - `100 <= Node.val <= 100`
 *
 * @param {TreeNode} root
 * @return {number}
 */
const widthOfBinaryTree = function (root) {
    // Check if the root node exists
    if (!root) {
        // If not, return 0 because there's no tree to traverse
        return 0;
    }

    // Initialize the maximum width to 0
    let maxWidth = 0;
    // Create a queue to perform the BFS traversal
    const queue = [{ node: root, index: 1 }];

    // While there are nodes in the queue
    while (queue.length) {
        // Get the size of the current level
        const levelSize = queue.length;
        // Initialize the index of the leftmost non-null node to null
        let leftmostIndex = null;

        // Loop through each node in the current level
        for (let i = 0; i < levelSize; i++) {
            // Get the next node from the front of the queue
            const { node, index } = queue.shift();

            // If this is the first node in the level, set the leftmostIndex to its index
            if (i === 0) {
                leftmostIndex = index;
            }

            // Add the left child to the queue if it exists
            if (node.left) {
                // The left child's index is double the parent's index
                queue.push({ node: node.left, index: index * 2 });
            }

            // Add the right child to the queue if it exists
            if (node.right) {
                // The right child's index is double the parent's index plus 1
                queue.push({ node: node.right, index: index * 2 + 1 });
            }
        }

        // Calculate the width of the current level
        const width = queue.length ? queue[0].index - leftmostIndex + 1 : 0;
        // Update the maximum width if necessary
        maxWidth = Math.max(maxWidth, width);
    }

    // Return the maximum width
    return maxWidth;
};

const root = [1, 3, 2, 5, 3, null, 9];
// Output: 4
// Explanation: The maximum width exists in the third level with length 4 (5,3,null,9).
console.log(widthOfBinaryTree(root));

const root2 = [1, 3, 2, 5, null, null, 9, 6, null, 7];
Output: 7;
// Explanation: The maximum width exists in the fourth level with length 7 (6,null,null,null,null,null,7).
console.log();

const root3 = [1, 3, 2, 5];
// Output: 2
// Explanation: The maximum width exists in the second level with length 2 (3,2).
console.log(widthOfBinaryTree(root3));
