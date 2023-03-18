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
const buildTree = function (inorder, postorder) {
    const n = inorder.length;
    const map = new Map();
    inorder.forEach((num, index) => map.set(num, index));

    let index_post = n - 1;

    return treeBuilder(0, n - 1);

    function treeBuilder(left, right) {
        if (index_post < 0 || left > right) return null;

        const curr_val = postorder[index_post--];
        const curr_node = new TreeNode(curr_val);

        const curr_index = map.get(curr_val);

        curr_node.right = treeBuilder(curr_index + 1, right);
        curr_node.left = treeBuilder(left, curr_index - 1);

        return curr_node;
    }
};

const inorder = [9, 3, 15, 20, 7],
    postorder = [9, 15, 7, 20, 3];
// Output: [3,9,20,null,null,15,7]
console.log(buildTree(inorder, postorder));
