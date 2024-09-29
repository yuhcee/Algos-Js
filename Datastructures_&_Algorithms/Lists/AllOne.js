/**
 * **432. All O`one Data Structure**
 *
 * Design a data structure to store the strings' count with the ability to
 * return the strings with minimum and maximum counts.
 *
 * Implement the `AllOne` class:
 *
 * - `AllOne()` Initializes the object of the data structure.
 * - `inc(String key)` Increments the count of the string `key` by `1`. If
 * `key` does not exist in the data structure, insert it with count `1`.
 * - `dec(String key)` Decrements the count of the string `key` by `1`. If
 * the count of `key` is `0` after the decrement, remove it from the data
 * structure. It is guaranteed that `key` exists in the data structure
 * before the decrement.
 * - `getMaxKey()` Returns one of the keys with the maximal count. If no
 * element exists, return an empty string `""`.
 * - `getMinKey()` Returns one of the keys with the minimum count. If no
 * element exists, return an empty string `""`.
 *
 * - **Note** that each function must run in `O(1)` average time
 * complexity.
 *
 * **Constraints:
 *
 * - `1 <= key.length <= 10`
 * - `key` consists of lowercase English letters.
 * - It is guaranteed that for each call to `dec`, `key` is existing in
 * the data structure.
 * - At most `5 * 104` calls will be made to `inc`, `dec`, `getMaxKey`,
 * and `getMinKey`.
 *
 */
const DoublyLinkedListNode = function (frequency, key, previous, next) {
    this.frequency = frequency;
    this.keys = new Set();
    if (key) this.keys.add(key);
    this.prev = previous || null;
    this.next = next || null;
};

const AllOne = function () {
    this.keyNodeMap = new Map(); // Map from key to DoublyLinkedListNode
    this.head = null; // Head of the doubly linked list
    this.tail = null; // Tail of the doubly linked list
};

AllOne.prototype.addKeyToDoublyLinkedList = function (key, node) {
    let newNode;
    if (!node) {
        // If no node is provided, this is a new key, add it to the frequency 1 bucket
        if (!this.head) {
            newNode = new DoublyLinkedListNode(1, key);
            this.head = this.tail = newNode;
        } else {
            if (this.head.frequency === 1) {
                this.head.keys.add(key);
                newNode = this.head;
            } else {
                newNode = new DoublyLinkedListNode(1, key, null, this.head);
                this.head.prev = newNode;
                this.head = newNode;
            }
        }
    } else {
        let currentNode = node;
        let nextNode = node.next;
        let newFrequency = currentNode.frequency + 1;

        if (!nextNode) {
            newNode = new DoublyLinkedListNode(newFrequency, key, currentNode, null);
            this.tail = newNode;
            currentNode.next = newNode;
        } else if (nextNode.frequency === newFrequency) {
            newNode = nextNode;
            newNode.keys.add(key);
        } else {
            newNode = new DoublyLinkedListNode(newFrequency, key, currentNode, nextNode);
            currentNode.next = newNode;
            nextNode.prev = newNode;
        }

        currentNode.keys.delete(key);
        if (currentNode.keys.size === 0) {
            this.removeNode(currentNode);
        }
    }
    return newNode;
};

AllOne.prototype.removeNode = function (node) {
    if (node === this.head && node === this.tail) {
        this.head = this.tail = null;
    } else if (node === this.head) {
        this.head = node.next;
        this.head.prev = null;
    } else if (node === this.tail) {
        this.tail = node.prev;
        this.tail.next = null;
    } else {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
};

AllOne.prototype.inc = function (key) {
    let currentNode = this.addKeyToDoublyLinkedList(key, this.keyNodeMap.get(key));
    this.keyNodeMap.set(key, currentNode);
};

AllOne.prototype.removeKeyFromDoublyLinkedList = function (key, node) {
    let currentFrequency = node.frequency;
    let reducedFrequency = currentFrequency - 1;
    let newNode;

    if (currentFrequency === 1) {
        node.keys.delete(key);
        if (node.keys.size === 0) {
            this.removeNode(node);
        }
        return null;
    } else {
        if (!node.prev) {
            newNode = new DoublyLinkedListNode(reducedFrequency, key, null, node);
            this.head = newNode;
            node.prev = newNode;
        } else if (node.prev.frequency === reducedFrequency) {
            newNode = node.prev;
            newNode.keys.add(key);
        } else {
            newNode = new DoublyLinkedListNode(reducedFrequency, key, node.prev, node);
            node.prev.next = newNode;
            node.prev = newNode;
        }

        node.keys.delete(key);
        if (node.keys.size === 0) {
            this.removeNode(node);
        }
    }
    return newNode;
};

AllOne.prototype.dec = function (key) {
    let currentNode = this.removeKeyFromDoublyLinkedList(key, this.keyNodeMap.get(key));
    if (currentNode) {
        this.keyNodeMap.set(key, currentNode);
    } else {
        this.keyNodeMap.delete(key);
    }
};

AllOne.prototype.getMaxKey = function () {
    if (this.tail) {
        return this.tail.keys.values().next().value; // Get the first key in the tail node
    }
    return '';
};

AllOne.prototype.getMinKey = function () {
    if (this.head) {
        return this.head.keys.values().next().value; // Get the first key in the head node
    }
    return '';
};

/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var maxKey = obj.getMaxKey()
 * var minKey = obj.getMinKey()
 */

const Input = ['AllOne', 'inc', 'inc', 'getMaxKey', 'getMinKey', 'inc', 'getMaxKey', 'getMinKey'][([], ['hello'], ['hello'], [], [], ['leet'], [], [])];
// Output[(null, null, null, 'hello', 'hello', null, 'hello', 'leet')];

/* Explanation
AllOne allOne = new AllOne();
allOne.inc("hello");
allOne.inc("hello");
allOne.getMaxKey(); // return "hello"
allOne.getMinKey(); // return "hello"
allOne.inc("leet");
allOne.getMaxKey(); // return "hello"
allOne.getMinKey(); // return "leet" */
