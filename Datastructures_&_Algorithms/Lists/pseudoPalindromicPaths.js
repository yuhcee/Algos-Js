/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Given a binary tree where node values are digits from 1 to 9. A path in the binary tree is said to be
 * **pseudo-palindromic** if at least one permutation of the node values in the path is a palindrome.
 *
 * Return *the number of **pseudo-palindromic** paths going from the root node to leaf nodes*.
 *
 * @param {TreeNode} root
 * @return {number}
 */
const pseudoPalindromicPaths = function (root) {
    let count = 0;

    const digits = new Array(10).fill(true);

    const f = (node) => {
        if (!node) return;

        digits[node.val] = !digits[node.val];

        if (!node.left && !node.right) {
            if (digits.filter((num) => num === false).length <= 1) count += 1;
            digits[node.val] = !digits[node.val];
            return;
        }

        f(node.left);
        f(node.right);

        digits[node.val] = !digits[node.val];
    };

    f(root);

    return count;
};
