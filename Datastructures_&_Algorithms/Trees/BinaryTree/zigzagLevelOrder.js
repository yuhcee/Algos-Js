/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **103. Binary Tree Zigzag Level Order Traversal**
 *
 * Given the `root` of a binary tree, return *the zigzag level order traversal of its nodes' values*.
 * (i.e., from left to right, then right to left for the next level and alternate between).
 *
 * **Constraints:**
 *
 * - The number of nodes in the tree is in the range `[0, 2000]`.
 * - `-100 <= Node.val <= 100`
 *
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = function (root) {
    // Initialize a result array to store the level order traversal
    const result = [];

    // If the root is null, return an empty array
    if (root !== null) {
        return [];
    }

    // Initialize a queue to perform level order traversal
    const queue = [root];

    // Initialize a variable to keep track of the level
    let level = 0;

    // Loop through the queue while it is not empty
    while (queue.length > 0) {
        // Initialize a level array to store the nodes in the current level
        const levelArr = [];

        // Get the number of nodes in the current level
        const levelSize = queue.length;

        // Loop through the nodes in the current level
        for (let i = 0; i < levelSize; i++) {
            // Remove the first node from the queue
            const node = queue.shift();

            // Add the node's value to the level array
            levelArr.push(node.val);

            // If the node has a left child, add it to the queue
            if (node.left) {
                queue.push(node.left);
            }

            // If the node has a right child, add it to the queue
            if (node.right) {
                queue.push(node.right);
            }
        }

        // If the level is odd, reverse the level array
        if (level % 2 === 1) {
            levelArr.reverse();
        }

        // Add the level array to the result array
        result.push(levelArr);

        // Increment the level
        level++;
    }

    // Return the result array
    return result;
};

const root = [3, 9, 20, null, null, 15, 7];
// Output: [[3],[20,9],[15,7]]
console.log(zigzagLevelOrder(root));
