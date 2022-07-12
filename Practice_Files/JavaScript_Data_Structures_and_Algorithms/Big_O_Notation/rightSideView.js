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
    console.log(rightSide);
    return rightSide;
};
const root = [1, 2, 3, null, 5, null, 4];
// Output: [1,3,4]
console.log(rightSideView(root));

const root1 = [1, null, 3];
// Output: [1,3]
console.log(rightSideView(root1));

const root2 = [];
// Output: []
console.log(rightSideView(root2));

// ===================== ADD RECURSIVE SOLUTION =======================
// var rightSideView = (root, level = 0, res = []) => {
//     if (root === null) {
//         return res
//     }

//     if (level >= res.length) {
//         res.push(root.val)
//     }

//     rightSideView(root.right, level + 1, res)
//     rightSideView(root.left, level + 1, res)

//     return res
// }
