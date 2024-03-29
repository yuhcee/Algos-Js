/**
 * **2251. Number of Flowers in Full Bloom**
 *
 * You are given a **0-indexed** 2D integer array `flowers`, where
 * `flowers[i] = [starti, endi]` means the `ith` flower will be in
 * **full bloom** from `starti` to `endi` (**inclusive**). You are also
 * given a **0-indexed** integer array `people` of size `n`, where
 * `people[i]` is the time that the `ith` person will arrive to see the
 * flowers.
 *
 * Return *an integer array `answer` of size `n`, where `answer[i]` is
 * the **number** of flowers that are in full bloom when the `ith`
 * person arrives.
 *
 * **Constraints:**
 *
 * - `1 <= flowers.length <= 5 * 104`
 * - `flowers[i].length == 2`
 * - `1 <= starti <= endi <= 109`
 * - `1 <= people.length <= 5 * 104`
 * - `1 <= people[i] <= 109`
 *
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
const fullBloomFlowers = function (flowers, persons) {
    // flowers with earlier end times are given higher priority
    const heap = new MinPriorityQueue({
        compare: (a, b) => a[1] - b[1],
    });

    // sort flowers by start time
    flowers.sort((a, b) => a[0] - b[0]);

    // sort persons by arrival time
    const sortedPersons = persons.slice().sort((a, b) => a - b);

    const map = {};

    let i = 0;

    for (const person of sortedPersons) {
        // if a flower has bloomed prior to or at the same time the
        // person has arrived we push [start, end] to the heap
        while (i < flowers.length && flowers[i][0] <= person) {
            heap.enqueue(flowers[i]);
            ++i;
        }

        // remove from the heap any flower that has finished blooming
        // before the person arrived
        while (heap.size() && heap.front()[1] < person) {
            heap.dequeue();
        }

        // heap.size() represents the number of flowers in bloom when the
        // person arrived
        map[person] = heap.size();
    }

    return persons.map((person) => map[person]);
};

const flowers = [
        [1, 6],
        [3, 7],
        [9, 12],
        [4, 13],
    ],
    people = [2, 3, 7, 11];
// Output: [1,2,2,2]
/* Explanation: The figure above shows the times when the flowers are in full bloom and when the people arrive.
For each person, we return the number of flowers in full bloom during their arrival. */
console.log(fullBloomFlowers(flowers, people));

const flowers1 = [
        [1, 10],
        [3, 3],
    ],
    people1 = [3, 3, 2];
// Output: [2,2,1]
/* Explanation: The figure above shows the times when the flowers are in full bloom and when the people arrive.
For each person, we return the number of flowers in full bloom during their arrival. */
console.log(fullBloomFlowers(flowers1, people1));
