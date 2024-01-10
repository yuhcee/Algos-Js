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
 * @param {TreeNode} root - The root node of the binary tree
 * @param {number} start - The value of the node where the infection starts
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
const amountOfTime = (root, start) => {};
