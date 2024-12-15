/**
 * **1792. Maximum Average Pass Ratio**
 *
 * There is a school that has classes of students and each class will be having
 * a final exam. You are given a 2D integer array `classes`, where `classes[i]
 * = [passi, totali]`. You know beforehand that in the `ith` class, there are
 * `totali` total students, but only `passi` number of students will pass the
 * exam.
 *
 * You are also given an integer `extraStudents`. There are another
 * `extraStudents` brilliant students that are **guaranteed** to pass the exam
 * of any class they are assigned to. You want to assign each of the
 * `extraStudents` students to a class in a way that **maximizes** the
 * **average** pass ratio across **all** the classes.
 *
 * The **pass ratio** of a class is equal to the number of students of the
 * class that will pass the exam divided by the total number of students of the
 * class. The **average pass ratio** is the sum of pass ratios of all the
 * classes divided by the number of the classes.
 *
 * Return the **maximum** possible average pass ratio after assigning the
 * `extraStudents` students. Answers within `10-5` of the actual answer will be
 * accepted.
 *
 * **Constraints:**
 *
 * - `1 <= classes.length <= 105`
 * - `classes[i].length == 2`
 * - `1 <= passi <= totali <= 105`
 * - `1 <= extraStudents <= 105`
 *
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
const maxAverageRatio = function (classes, extraStudents) {
    // Custom comparator for the max heap.
    // We want to maximize the increase in pass ratio by adding one student.
    const compare = (a, b) => {
        const improvementA = (a.passed + 1) / (a.total + 1) - a.passed / a.total;
        const improvementB = (b.passed + 1) / (b.total + 1) - b.passed / b.total;
        return improvementB - improvementA; // for max heap, reverse subtraction
    };

    // Use a max heap to always get the class where adding a student gives maximum improvement
    const pq = new MaxHeap(compare);

    for (const [passed, total] of classes) {
        pq.push({ passed, total });
    }

    // Distribute extra students
    for (let i = 0; i < extraStudents; i++) {
        const bestClass = pq.pop();
        bestClass.passed++;
        bestClass.total++;
        pq.push(bestClass);
    }

    // Calculate the average pass ratio
    let totalRatio = 0;
    for (const cls of pq.heap) {
        totalRatio += cls.passed / cls.total;
    }

    return totalRatio / classes.length;
};

// Simple MaxHeap implementation for illustration
class MaxHeap {
    constructor(comparator) {
        this.heap = [];
        this.comparator = comparator;
    }

    push(item) {
        this.heap.push(item);
        this._bubbleUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const result = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._bubbleDown(0);
        return result;
    }

    _bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.comparator(this.heap[parentIndex], this.heap[index]) <= 0) break;
            this._swap(parentIndex, index);
            index = parentIndex;
        }
    }

    _bubbleDown(index) {
        const lastIndex = this.heap.length - 1;
        while (true) {
            let smallestIndex = index;
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;

            if (leftChildIndex <= lastIndex && this.comparator(this.heap[smallestIndex], this.heap[leftChildIndex]) > 0) {
                smallestIndex = leftChildIndex;
            }
            if (rightChildIndex <= lastIndex && this.comparator(this.heap[smallestIndex], this.heap[rightChildIndex]) > 0) {
                smallestIndex = rightChildIndex;
            }
            if (smallestIndex === index) break;
            this._swap(index, smallestIndex);
            index = smallestIndex;
        }
    }

    _swap(i, j) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
}

const classes = [
        [1, 2],
        [3, 5],
        [2, 2],
    ],
    extraStudents = 2;
// Output: 0.78333
/* Explanation: You can assign the two extra students to the first class. The average pass ratio will be equal to (3/4 + 3/5 + 2/2) / 3 = 0.78333. */
console.log(maxAverageRatio(classes, extraStudents));
