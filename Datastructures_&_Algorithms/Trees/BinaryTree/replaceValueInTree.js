/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * **2641. Cousins in Binary Tree II**
 *
 * Given the `root` of a binary tree, replace the value of each node in
 * the tree with the **sum of all its cousins' values**.
 *
 * Two nodes of a binary tree are **cousins** if they have the same depth
 * with different parents.
 *
 * Return *the `root` of the modified tree*.
 *
 * **Note** that the depth of a node is the number of edges in the path
 * from the root node to it.
 *
 * **Constraints:**
 *
 * - The number of nodes in the tree is in the range `[1, 105]`.
 * - `1 <= Node.val <= 104`
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const replaceValueInTree = function (root) {
    if (!root) return null;

    let queue = [root];
    root.val = 0; // The root has no cousins

    while (queue.length > 0) {
        let levelSize = queue.length;
        let currentLevel = [];

        // Collect the nodes of the current level
        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            currentLevel.push(node);

            // Add child nodes to the queue for the next level
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        // Calculate the total sum of values at this level
        let totalSum = currentLevel.reduce((sum, node) => sum + (node.left ? node.left.val : 0) + (node.right ? node.right.val : 0), 0);

        // Update each node's value by the cousin sum (total sum - sibling sum)
        for (let node of currentLevel) {
            let siblingSum = 0;
            if (node.left) siblingSum += node.left.val;
            if (node.right) siblingSum += node.right.val;

            // Update the values of the children with the cousin sum
            if (node.left) node.left.val = totalSum - siblingSum;
            if (node.right) node.right.val = totalSum - siblingSum;
        }
    }

    return root;
};

const root = [5, 4, 9, 1, 10, null, 7];
// Output: [0,0,0,7,7,null,11]
/* Explanation: The diagram above shows the initial binary tree and the binary tree after changing the value of each node.
- Node with value 5 does not have any cousins so its sum is 0.
- Node with value 4 does not have any cousins so its sum is 0.
- Node with value 9 does not have any cousins so its sum is 0.
- Node with value 1 has a cousin with value 7 so its sum is 7.
- Node with value 10 has a cousin with value 7 so its sum is 7.
- Node with value 7 has cousins with values 1 and 10 so its sum is 11. */
console.log(replaceValueInTree(root));
