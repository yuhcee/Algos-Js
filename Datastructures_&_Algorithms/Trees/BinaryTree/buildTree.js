/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **106. Construct Binary Tree from Inorder and Postorder Traversal**
 *
 * Given two integer arrays `inorder` and `postorder` where `inorder` is the inorder traversal
 * of a binary tree and `postorder` is the postorder traversal of the same tree, construct and
 * return *the binary tree*.
 *
 * **Constraints:**
 *
 * - `1 <= inorder.length <= 3000`
 * - `postorder.length == inorder.length`
 * - `-3000 <= inorder[i], postorder[i] <= 3000`
 * - `inorder` and `postorder` consist of **unique** values.
 * - Each value of `postorder` also appears in `inorder`.
 * - `inorder` is **guaranteed** to be the inorder traversal of the tree.
 * - `postorder` is **guaranteed** to be the postorder traversal of the tree.
 *
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = function (inorder, postorder) {};
