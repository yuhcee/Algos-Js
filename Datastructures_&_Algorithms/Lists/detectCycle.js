/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * **142. Linked List Cycle II**
 *
 * Given the `head` of a linked list, return *the node where the cycle begins. If there is no cycle,
 * return `null`*.
 *
 * There is a cycle in a linked list if there is some node in the list that can be reached again by
 * continuously following the `next` pointer. Internally, `pos` is used to denote the index of the
 * node that tail's `next` pointer is connected to (**0-indexed**). It is `-1` if there is no cycle.
 * **Note that `pos` is not passed as a parameter**.
 *
 * **Do not modify** the linked list.
 *
 * **Constraints:**
 *
 * - The number of the nodes in the list is in the range `[0, 104]`.
 * - `-105 <= Node.val <= 105`
 * - `pos` is `-1` or a **valid index** in the linked-list.
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = function (head) {
    let node = head;

    while (node) {
        if (node.visited) {
            delete node.visited;
            return node;
        } else {
            node.visited = true;
            node = node.next;
        }
    }

    return null;
};

const head = [3, 2, 0, -4],
    pos = 1;
// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.
