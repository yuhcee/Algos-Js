/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **652. Find Duplicate Subtrees**
 *
 * Given the `root` of a binary tree, return all **duplicate subtrees**.
 *
 * For each kind of duplicate subtrees, you only need to return the root node of any **one**
 * of them.
 *
 * Two trees are **duplicate** if they have the **same structure** with the **same node
 * values**.
 *
 * **Constraints:**
 *
 * - The number of the nodes in the tree will be in the range `[1, 5000]`
 * - `-200 <= Node.val <= 200`
 *
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
const findDuplicateSubtrees = function (root) {
    const duplicates = new Map();
    const set = new Set();

    const dfs = (node) => {
        // define the basic/leave node key as node as node value
        node.key = node.key || node.val;

        // perform DFS (postorder), and add left and right
        // node keys to the current node key
        if (node.left) {
            dfs(node.left);
            node.key += `-${node.left.key}`;
        } else {
            node.key += 'n'; // null
        }

        if (node.right) {
            dfs(node.right);
            node.key += `-${node.right.key}`;
        } else {
            node.key += 'n'; // null
        }

        // example node keys at this point:
        // ---------------------------------
        // 4nn
        // 2-4nnn
        // 3-2-4nnn-4nn
        // 1-2-4nnn-3-2-4nnn-4nn

        // add duplicated item to the map
        if (set.has(node.key)) {
            duplicates.set(node.key, node);
        } else {
            set.add(node.key);
        }
    };

    dfs(root);

    return Array.from(duplicates.values());
};

const root = [1,2,3,4,null,2,4,null,null,4];
// Output: [[2,4],[4]]