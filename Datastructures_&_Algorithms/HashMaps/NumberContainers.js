/**
 * **2349. Design a Number Container System**
 *
 * Design a number container system that can do the following:
 *
 * - **Insert** or **Replace** a number at the given index in the system.
 * - **Return** the smallest index for the given number in the system.
 *
 * Implement the `NumberContainers` class:
 *
 * - `NumberContainers()` Initializes the number container system.
 * - `void change(int index, int number)` Fills the container at `index`
 * with the `number`. If there is already a number at that `index`, replace
 * it.
 * - `int find(int number)` Returns the smallest index for the given
 * `number`, or `-1` if there is no index that is filled by number in the
 * system.
 *
 * **Constraints:**
 *
 * - `1 <= index, number <= 10^9`
 * - At most `10^5` calls will be made **in total** to `change` and `find`.
 */
const NumberContainers = function () {
    this.indexToNumber = new Map(); // Maps index to number
    this.numberToIndices = new Map(); // Maps number to a sorted list of indices
};

/**
 * @param {number} index
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function (index, number) {
    // If the index already has a number, remove it from the old number's indices
    if (this.indexToNumber.has(index)) {
        const oldNumber = this.indexToNumber.get(index);
        const indices = this.numberToIndices.get(oldNumber);
        const indexPos = indices.indexOf(index);
        if (indexPos !== -1) {
            indices.splice(indexPos, 1);
        }
        if (indices.length === 0) {
            this.numberToIndices.delete(oldNumber);
        }
    }

    // Update the index to the new number
    this.indexToNumber.set(index, number);

    // Add the index to the new number's indices
    if (!this.numberToIndices.has(number)) {
        this.numberToIndices.set(number, []);
    }
    const newIndices = this.numberToIndices.get(number);
    // Insert the index in a sorted manner
    let insertPos = 0;
    while (insertPos < newIndices.length && newIndices[insertPos] < index) {
        insertPos++;
    }
    newIndices.splice(insertPos, 0, index);
};
