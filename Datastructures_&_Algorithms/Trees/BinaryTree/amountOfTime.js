/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.left = (left === undefined ? null : left);
 *     this.right = (right === undefined ? null : right);
 * }
 */

/**
 * **2385. Amount of Time for Binary Tree to Be Infected**
 *
 * You are given the `root` of a binary tree with **unique** values, and
 * an integer `start`. At minute `0`, an **infection** starts from the
 * node with value `start`.
 *
 * Each minute, a node becomes infected if:
 *
 * - The node is currently uninfected.
 * - The node is adjacent to an infected node.
 *
 * Return *the number of minutes needed for the entire tree to be
 * infected*.
 *
 * Calculate the amount of time for the entire binary tree to be infected
 * 
 * @param {TreeNode} root - The root node of the binary tree
 * @param {number} start - The value of the node where the infection 
 * starts
 * @return {number} - The amount of time needed for the entire tree to
 * be infected.
 *
 * **Constraints:**
 *
 * - The number of nodes in the tree is in the range `[1, 105]`.
 * - `1 <= Node.val <= 105`
 * - Each node has a **unique** value.
 * - A node with a value of `start` exists in the tree.
 */
const amountOfTime = (root, start) => {
    let amount = 0;

    /**
     * Helper function to traverse the binary tree and calculate the infection time
     * @param {TreeNode} root - The current root node being processed
     * @param {number} start - The value of the node where the infection starts
     * @return {number} - The time taken for the infection to reach the current node
     */
    const traverse = (root, start) => {
        if (!root) {
            return 0;
        }

        let left = traverse(root.left, start);
        let right = traverse(root.right, start);

        if (root.val === start) {
            // If the current node is where the infection starts, update the amount
            amount = Math.max(left, right);
            return -1; // Signal that the start node is found
        } else if (left >= 0 && right >= 0) {
            // If both left and right subtrees are infected, return the maximum time
            return Math.max(left, right) + 1;
        } else {
            // If only one subtree is infected, update the amount and return the adjusted time
            amount = Math.max(amount, Math.abs(left - right));
            return Math.min(left, right) - 1;
        }
    };

    traverse(root, start);

    return amount;
};

const root = [1, 5, 3, null, 4, 10, 6, 9, 2],
    start = 3;
// Output: 4;
/* Explanation: The following nodes are infected during:
- Minute 0: Node 3
- Minute 1: Nodes 1, 10 and 6
- Minute 2: Node 5
- Minute 3: Node 4
- Minute 4: Nodes 9 and 2
It takes 4 minutes for the whole tree to be infected so we return 4. */
console.log(amountOfTime(root, start));

const root1 = [1],
    start1 = 1;
// Output: 0
// Explanation: At minute 0, the only node in the tree is infected so we return 0.
console.log(amountOfTime(root1, start1));
