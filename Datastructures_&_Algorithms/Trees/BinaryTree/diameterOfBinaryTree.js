/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **543. Diameter of Binary Tree**
 *
 * Given the `root` of a binary tree, return *the length of the **diameter
 * ** of the tree.*
 *
 * The **diameter**  of a binary tree is the **length**  of the longest path
 * between any two nodes in a tree. This path may or may not pass through
 * the `root`.
 *
 * The **length** of a path between two nodes is represented by the number
 * of edges between them.
 *
 * **Constraints:**
 *
 * - The number of nodes in the tree is in the range `[1, 104]`.
 * `-100 <= Node.val <= 100`
 *
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = (root) => {
    let diameter = 0;

    const dfs = (node) => {
        if (!node) return [0, 0];

        const [leftDepth, leftDiameter] = dfs(node.left);
        const [rightDepth, rightDiameter] = dfs(node.right);

        const currentDepth = Math.max(leftDepth, rightDepth) + 1;
        const currentDiameter = Math.max(leftDiameter, rightDiameter, leftDepth + rightDepth);

        diameter = Math.max(diameter, currentDiameter);

        return [currentDepth, currentDiameter];
    };

    dfs(root);

    return diameter;
};

const root = [1, 2, 3, 4, 5];
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
console.log(diameterOfBinaryTree(root));
