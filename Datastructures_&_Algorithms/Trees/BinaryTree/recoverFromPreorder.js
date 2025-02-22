/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **1028. Recover a Tree From Preorder Traversal**
 *
 * We run a preorder depth-first search (DFS) on the `root` of a binary
 * tree.
 *
 * At each node in this traversal, we output `D` dashes (where `D` is the
 * depth of this node), then we output the value of this node.  If the
 * depth of a node is `D`, the depth of its immediate child is `D + 1`.
 * The depth of the `root` node is `0`.
 *
 * If a node has only one child, that child is guaranteed to be **the left
 * child**.
 *
 * Given the output `traversal` of this traversal, recover the tree and
 * return *its `root`*.
 *
 * **Constraints:**
 *
 * - The number of nodes in the original tree is in the range `[1, 1000]`.
 * - `1 <= Node.val <= 10^9`
 *
 * @param {string} traversal
 * @return {TreeNode}
 */
const recoverFromPreorder = function (traversal) {
    if (!traversal) return null;

    const stack = [];
    let i = 0;

    while (i < traversal.length) {
        // Determine the depth of the current node
        let depth = 0;
        while (i < traversal.length && traversal[i] === '-') {
            depth++;
            i++;
        }

        // Determine the value of the current node
        let val = '';
        while (i < traversal.length && traversal[i] !== '-') {
            val += traversal[i];
            i++;
        }
        const node = new TreeNode(Number(val));

        // If the stack is empty, this is the root node
        if (stack.length === 0) {
            stack.push(node);
        } else {
            // Pop nodes from the stack until we find the correct parent
            while (stack.length > depth) {
                stack.pop();
            }
            // The current node is a child of the node at the top of the stack
            const parent = stack[stack.length - 1];
            if (parent.left === null) {
                parent.left = node;
            } else {
                parent.right = node;
            }
            stack.push(node);
        }
    }

    return stack[0];
};

const traversal = '1-2--3--4-5--6--7';
// Output: [1,2,5,3,4,6,7]
console.log(recoverFromPreorder(traversal));
