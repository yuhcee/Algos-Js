/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * **206. Reverse Linked List**
 *
 * Given the `head` of a singly linked list, reverse the list, and return
 * *the reversed list*.
 *
 * **Constraints:**
 *
 * - The number of nodes in the list is the range `[0, 5000]`.
 * - `-5000 <= Node.val <= 5000`
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let nextTemp = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }

    return prev;
};

const head = [1, 2, 3, 4, 5];
// Output: [5,4,3,2,1]
console.log(reverseList(head));