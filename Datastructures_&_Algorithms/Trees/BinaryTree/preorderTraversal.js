/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * **144. Binary Tree Preorder Traversal**
 *
 * Given the root of a binary tree, return the *preorder traversal of its nodes' values*.
 *
 * **Constraints:**
 *
 * - The number of nodes in the tree is in the range `[0, 100]`.
 * - `-100 <= Node.val <= 100`
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = function (root) {
    // Create a list to store the values of the nodes visited
    const values = [];

    // Define the recursive helper function
    function traverse(node) {
        // Base case: if the node is null, return
        if (node === null) return;

        // Add the value of the current node to the list
        values.push(node.val);

        // Recursively traverse the left and right subtrees
        traverse(node.left);
        traverse(node.right);
    }

    // Start the traversal at the root of the tree
    traverse(root);

    // Return the list of values
    return values;
};

// ITERATIVE APPROACH

function preorderTraversal(root) {
    // Create a stack to store the nodes visited
    const stack = [];

    // Create a list to store the values of the nodes visited
    const values = [];

    // Initialize the current node to the root of the tree
    let current = root;

    // Continue traversing the tree as long as there are nodes in the stack or the current node is not null
    while (stack.length > 0 || current !== null) {
        // If the current node is not null, add its value to the list and push it onto the stack
        if (current !== null) {
            values.push(current.val);
            stack.push(current);
            current = current.left;
        } else {
            // If the current node is null, pop the top node from the stack and set it as the current node
            current = stack.pop();
            current = current.right;
        }
    }

    // Return the list of values
    return values;
}

const root = [1, null, 2, 3];
// Output: [1,2,3]
console.log(preorderTraversal(root));

const root1 = [];
// Output: []
console.log(preorderTraversal(root1));

const root2 = [1];
// Output: [1]
console.log(preorderTraversal(root2));
