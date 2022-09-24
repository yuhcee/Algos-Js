/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **113. Path Sum II**
 *
 * Given the `root` of a binary tree and an integer `targetSum`, return *all **root-to-leaf** paths where the sum of the node
 * values in the path equals `targetSum`. Each path should be returned as a list of the node **values**, not node references*.
 *
 * A **root-to-leaf** path is a path starting from the root and ending at any leaf node. A **leaf** is a node with no children.
 *
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
const pathSum = function (root, targetSum) {
    const ans = [];

    const fun = (node, path, sum) => {
        if (!node) return;

        if (!node.left && !node.right) {
            if (sum === node.val) {
                ans.push([...path, node.val]);
            }
            return;
        }

        fun(node.left, [...path, node.val], sum - node.val);
        fun(node.right, [...path, node.val], sum - node.val);
    };

    fun(root, [], targetSum);

    return ans;
};

const root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1],
    targetSum = 22;
// Output: [[5,4,11,2],[5,8,4,5]]
/* Explanation: There are two paths whose sum equals targetSum:
5 + 4 + 11 + 2 = 22
5 + 8 + 4 + 5 = 22 */
console.log(pathSum(root, targetSum));

const root1 = [1, 2, 3],
    targetSum1 = 5;
// Output: [];
console.log(pathSum(root1, targetSum1));

const root2 = [1, 2],
    targetSum2 = 0;
// Output: [];
console.log(pathSum(root2, targetSum2));
