/**
 * **406. Queue Reconstruction by Height**
 *
 * You are given an array of people, `people`, which are the attributes of some people in a queue (not
 * necessarily in order). Each `people[i] = [hi, ki]` represents the `ith` person of height `hi` with
 * **exactly** `ki` other people in front who have a height greater than or equal to `hi`.
 *
 * Reconstruct and return *the queue that is represented by the input array `people`*. The returned queue
 * should be formatted as an array `queue`, where `queue[j] = [hj, kj]` is the attributes of the `jth`
 * person in the queue (`queue[0]` is the person at the front of the queue).
 *
 * @param {number[][]} people
 * @return {number[][]}
 */
const reconstructQueue = (people) => {
    const result = [];
    // sort people by height in descending order, if heights are same -> sort k by ascending order
    people.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]));

    // loop through sorted people
    for (const [height, k] of people) {
        // modify result index with people k
        result.splice(k, 0, [height, k]);
    }
};
