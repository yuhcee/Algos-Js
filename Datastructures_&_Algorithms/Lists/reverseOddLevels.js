/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val);
 *     this.left = (left===undefined ? null : left);
 *     this.right = (right===undefined ? null : right);
 * }
 */

/**
 * **2415. Reverse Odd Levels of Binary Tree**
 *
 * Given the `root` of a **perfect** binary tree, reverse the node values at
 * each **odd** level of the tree.
 *
 * - For example, suppose the node values at level 3 are `[2,1,3,4,7,11,29,18]
 * `, then it should become `[18,29,11,7,4,3,1,2]`.
 *
 * Return *the root of the reversed tree*.
 *
 * A binary tree is **perfect** if all parent nodes have two children and all
 * leaves are on the same level.
 *
 * The **level** of a node is the number of edges along the path between it and
 * the root node.
 *
 * **Constraints:**
 *
 * - The number of nodes in the tree is in the range `[1, 214]`.
 * - `0 <= Node.val <= 105`
 * - `root` is a **perfect** binary tree.
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const reverseOddLevels = function (root) {};

const root = [2, 3, 5, 8, 13, 21, 34];
// Output: [2,5,3,8,13,21,34]
/* Explanation: 
The tree has only one odd level.
The nodes at level 1 are 3, 5 respectively, which are reversed and become 5, 3.
 */
console.log(reverseOddLevels(root));
