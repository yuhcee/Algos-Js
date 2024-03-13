/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * **1171. Remove Zero Sum Consecutive Nodes from Linked List**
 *
 * Given the `head` of a linked list, we repeatedly delete consecutive
 * sequences of nodes that sum to `0` until there are no such sequences.
 *
 * After doing so, return the head of the final linked list.  You may return
 * any such answer.
 *
 * (Note that in the examples below, all sequences are serializations of
 * `ListNode` objects.)
 *
 * **Constraints:**
 *
 * - The given linked list will contain between `1` and `1000` nodes.
 * - Each node in the linked list has -`1000 <= node.val <= 1000`.
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
const removeZeroSumSublists = (head) => {
    let dummy = new ListNode(0);
    dummy.next = head;
    let map = new Map();
    let sum = 0;
    map.set(0, dummy);

    while (head) {
        sum += head.val;
        if (map.has(sum)) {
            let prev = map.get(sum);
            let temp = prev.next;
            let currSum = sum;
            while (temp !== head) {
                currSum += temp.val;
                map.delete(currSum);
                temp = temp.next;
            }
            prev.next = head.next;
        } else {
            map.set(sum, head);
        }
        head = head.next;
    }

    return dummy.next;
};

const head = [1, 2, -3, 3, 1];
// Output: [3,1]
// Note: The answer [1,2,1] would also be accepted.
console.log(removeZeroSumSublists(head));

const head1 = [1, 2, 3, -3, 4];
// Output: [1,2,4]
console.log(removeZeroSumSublists(head1));
