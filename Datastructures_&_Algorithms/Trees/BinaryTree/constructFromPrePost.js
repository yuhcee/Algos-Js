/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **889. Construct Binary Tree from Preorder and Postorder Traversal**
 *
 * Given two integer arrays, `preorder` and `postorder` where `preorder` is
 * the preorder traversal of a binary tree of **distinct** values and
 * `postorder` is the postorder traversal of the same tree, reconstruct and
 * return the binary tree.
 *
 * If there exist multiple answers, you can **return any** of them.
 *
 * **Constraints:**
 *
 * - `1 <= preorder.length <= 30`
 * - `1 <= preorder[i] <= preorder.length`
 * - All the values of `preorder` are unique.
 * - `postorder.length == preorder.length`
 * - `1 <= postorder[i] <= postorder.length`
 * - All the values of `postorder` are unique.
 * - It is guaranteed that `preorder` and `postorder` are the preorder
 * traversal and postorder traversal of the same binary tree.
 *
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const constructFromPrePost = function (preorder, postorder) {
    if (preorder.length === 0) return null;

    const rootVal = preorder[0];
    const root = new TreeNode(rootVal);

    if (preorder.length === 1) return root;

    const leftRootVal = preorder[1];
    const leftRootIndex = postorder.indexOf(leftRootVal);

    const leftPreorder = preorder.slice(1, leftRootIndex + 2);
    const leftPostorder = postorder.slice(0, leftRootIndex + 1);

    const rightPreorder = preorder.slice(leftRootIndex + 2);
    const rightPostorder = postorder.slice(leftRootIndex + 1, postorder.length - 1);

    root.left = constructFromPrePost(leftPreorder, leftPostorder);
    root.right = constructFromPrePost(rightPreorder, rightPostorder);

    return root;
};
