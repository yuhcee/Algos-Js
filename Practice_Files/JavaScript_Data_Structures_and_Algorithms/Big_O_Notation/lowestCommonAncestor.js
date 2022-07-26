/**
 * Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

 * According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
 * @param {TreeNode} root 
 * @param {*} p 
 * @param {*} q 
 * @returns {number} number
 */
/* const lowestCommonAncestor = (root, p, q) => {
    if (!root) return null;

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if ((left && right) || root.val === p.val || root.val === q.val) {
        return root;
    } else if (left) {
        return left;
    } else if (right) {
        return right;
    } else {
        return null;
    }
}; */

const lowestCommonAncestor = (root, p, q) => {};
console.log(lowestCommonAncestor([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 1)); // 3
console.log(lowestCommonAncestor([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 4)); // 5
