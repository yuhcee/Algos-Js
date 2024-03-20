/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * **1669. Merge In Between Linked Lists**
 *
 * You are given two linked lists: `list1` and `list2` of sizes `n` and `m` respectively.
 *
 * Remove `list1`'s nodes from the `ath` node to the `bth` node, and put `list2` in their place.
 *
 * The blue edges and nodes in the following figure indicate the result:
 *
 * *Build the result list and return its head.*
 *
 * **Constraints:**
 *
 * - `3 <= list1.length <= 104`
 * - `1 <= a <= b < list1.length - 1`
 * - `1 <= list2.length <= 104`
 *
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeInBetween = (list1, a, b, list2) => {
    let current = list1;
    let count = 0;
    let nodeBeforeA = null;
    let nodeAfterB = null;

    // Find the node before position a
    while (current !== null && count < a - 1) {
        current = current.next;
        count++;
    }
    nodeBeforeA = current;

    // Find the node after position b
    while (current !== null && count < b + 1) {
        current = current.next;
        count++;
    }
    nodeAfterB = current;

    // Link nodeBeforeA to list2
    if (nodeBeforeA !== null) {
        nodeBeforeA.next = list2;
    } else {
        list1 = list2;
    }

    // Traverse list2 to find its last node
    current = list2;
    while (current.next !== null) {
        current = current.next;
    }

    // Link the last node of list2 to nodeAfterB
    current.next = nodeAfterB;

    return list1;
};

const list1 = [10, 1, 13, 6, 9, 5],
    a = 3,
    b = 4,
    list2 = [1000000, 1000001, 1000002];
// Output: [10,1,13,1000000,1000001,1000002,5]
// Explanation: We remove the nodes 3 and 4 and put the entire list2 in their place. The blue edges and nodes in the above figure indicate the result.
console.log(mergeInBetween(list1, a, b, list2));

const list11 = [0, 1, 2, 3, 4, 5, 6],
    a1 = 2,
    b1 = 5,
    list21 = [1000000, 1000001, 1000002, 1000003, 1000004];
// Output: [0,1,1000000,1000001,1000002,1000003,1000004,6]
// Explanation: The blue edges and nodes in the above figure indicate the result.
console.log(mergeInBetween(list11, a1, b1, list21));
