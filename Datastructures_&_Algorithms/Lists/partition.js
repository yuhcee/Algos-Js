/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * **86. Partition List**
 *
 * Given the `head` of a linked list and a value `x`, partition it such that all
 * nodes **less than** `x` come before nodes **greater than or equal** to `x`.
 *
 * You should **preserve** the original relative order of the nodes in each of the
 * two partitions.
 *
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
const partition = (head, x) => {
    // before and after are the two pointers used to create the two list
    // beforeHead and afterHead are used to save the heads of the two lists.
    // All of these are initialized with the dummy nodes created.
    let beforeHead = new ListNode(0);
    let afterHead = new ListNode(0);

    let before = beforeHead; // first halves where nodes < x
    let after = afterHead; // second halves where nodes >= x

    let curr = head;

    while (curr) {
        // If the original list node is lesser than the given x,
        // assign it to the before list.
        if (curr.val < x) {
            before.next = curr;
            before = before.next;
        } else {
            // If the original list node is greater or equal to the given x,
            // assign it to the after list.
            after.next = curr;
            after = after.next;
        }
        // move ahead in the original list
        curr = curr.next;
    }
    // Last node of "after" list would also be ending node of the reformed list
    after.next = null;

    // Once all the nodes are correctly assigned to the two lists,
    // combine them to form a single list which would be returned.
    before.next = afterHead.next; // connect first halves to second halves

    return beforeHead.next; // return all halves combined
};

const head = [1, 4, 3, 2, 5, 2],
    x = 3;
// Output: [1,2,2,4,3,5]
console.log(partition(head));

const head1 = [2, 1],
    x1 = 2;
// Output: [1,2]
console.log(partition(head1));
