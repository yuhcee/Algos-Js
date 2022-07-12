/**
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val )
 *     this.left = (left === undefined ? null : left )
 *     this.right = (right === undefined ? null : right )
 * }
 *
 */

/**
 * **199. Binary Tree Right Side View**
 *
 * Given the `root` of a binary tree, imagine yourself standing on the **right side** of it, return
 * *the values of the nodes you can see ordered from top to bottom*.
 *
 * @param {TreeNode} root
 * @return {number[]}
 */

var rightSideView = (root) => {
    // return empty array if root is null
    if (!root) return [];

    const rightSide = [],
        queue = [[root]];

    // start BFS
    while (queue.length > 0) {
        const nodes = queue.pop(),
            newNodes = [];

        // get the last element at curr level
        const last = nodes.at(-1);

        // add its value to the rightSide arr
        rightSide.push(last.val);

        for (let node of nodes) {
            if (node.left) newNodes.push(node.left);
            if (node.right) newNodes.push(node.right);
        }

        if (newNodes > 0) queue.push(newNodes);
    }

    return rightSide;
};
