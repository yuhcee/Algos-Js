/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * **19. Remove Nth Node From End of List**
 *
 * Given the `head` of a linked list, remove the `nth` node from the end of the list and
 * return its head.
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
    if (!head.next) return null;
    var current = head;
    var delay = head;

    while (current) {
        if (n < 0) delay = delay.next;
        else n--;
        current = current.next;
    }
    if ((delay === head) & (n === 0)) head = delay.next;
    else delay.next = delay.next.next;
    return head;
};

const head = [1, 2, 3, 4, 5],
    n = 2;
// Output: [1,2,3,5]
console.log(removeNthFromEnd(head, n));

const head1 = [1],
    n1 = 1;
// Output: []
console.log(removeNthFromEnd(head1, n1));

const head2 = [1, 2],
    n2 = 1;
// Output: [1]
console.log(removeNthFromEnd(head2, n2));
