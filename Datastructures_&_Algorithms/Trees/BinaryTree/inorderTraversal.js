/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Given the `root` of a binary tree, return *the inorder traversal of its nodes' values*.
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function (root) {
    let res = [];

    const fn = (node) => {
        if (!node) return;
        fn(node.left);
        res.push(node.val);
        fn(node.right);
    };

    fn(root);

    return res;
};

const root = [1, null, 2, 3];
// Output: [1,3,2]
console.log(inorderTraversal(root));

const root1 = [];
// Output: []
console.log(inorderTraversal(root1));

const root2 = [1];
// Output: [1]
console.log(inorderTraversal(root2));
