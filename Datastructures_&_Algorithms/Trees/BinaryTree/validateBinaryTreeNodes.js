/**
 * **361. Validate Binary Tree Nodes**
 *
 * You have n binary tree nodes numbered from `0` to `n - 1` where node
 * `i` has two children `leftChild[i]` and `rightChild[i]`, return
 * `true` if and only if **all** the given nodes form **exactly one**
 * valid binary tree.
 *
 * If node `i` has no left child then `leftChild[i]` will equal `-1`,
 * similarly for the right child.
 *
 * Note that the nodes have no values and that we only use the node
 * numbers in this problem.
 *
 * **Constraints:**
 *
 * - `n == leftChild.length == rightChild.length`
 * - `1 <= n <= 104`
 * - `-1 <= leftChild[i], rightChild[i] <= n - 1`
 *
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
const validateBinaryTreeNodes = function (n, leftChild, rightChild) {
    const parentCount = new Array(n).fill(0);
    const visited = new Array(n).fill(false);

    for (let i = 0; i < n; i++) {
        if (leftChild[i] !== -1) {
            parentCount[leftChild[i]]++;
        }
        if (rightChild[i] !== -1) {
            parentCount[rightChild[i]]++;
        }
    }

    let rootCount = 0;
    let root = -1;
    for (let i = 0; i < n; i++) {
        if (parentCount[i] === 0) {
            rootCount++;
            root = i;
        } else if (parentCount[i] > 1) {
            return false;
        }
    }

    if (rootCount !== 1) return false;

    const dfs = (node) => {
        if (node === -1 || visited[node]) return;
        visited[node] = true;
        dfs(leftChild[node]);
        dfs(rightChild[node]);
    };

    dfs(root);

    for (let i = 0; i < n; i++) {
        if (!visited[i]) return false;
    }

    return true;
};

const n = 4,
    leftChild = [1, -1, 3, -1],
    rightChild = [2, -1, -1, -1];
// Output: true
console.log(validateBinaryTreeNodes(n, leftChild, rightChild));

const n1 = 4,
    leftChild1 = [1, -1, 3, -1],
    rightChild1 = [2, 3, -1, -1];
// Output: false
console.log(validateBinaryTreeNodes(n1, leftChild1, rightChild1));

const n2 = 2,
    leftChild2 = [1, 0],
    rightChild2 = [-1, -1];
// Output: false
console.log(validateBinaryTreeNodes(n2, leftChild2, rightChild2));
