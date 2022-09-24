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
