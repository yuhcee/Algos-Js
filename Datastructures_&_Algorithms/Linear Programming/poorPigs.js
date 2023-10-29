/**
 * **458. Poor Pigs**
 *
 * There are `buckets` buckets of liquid, where **exactly one** of the
 * buckets is poisonous. To figure out which one is poisonous, you
 * feed some number of (poor) pigs the liquid to see whether they will
 * die or not. Unfortunately, you only have `minutesToTest` minutes to
 * determine which bucket is poisonous.
 *
 * You can feed the pigs according to these steps:
 *
 * - Choose some live pigs to feed.
 * - For each pig, choose which buckets to feed it. The pig will
 * consume all the chosen buckets
 * simultaneously and will take no time. Each pig can feed from any
 * number of buckets, and each bucket can
 * be fed from by any number of pigs.
 * - Wait for `minutesToDie` minutes. You may **not** feed any other
 * pigs during this time.
 * - After `minutesToDie` minutes have passed, any pigs that have been
 * fed the poisonous bucket will die,
 * and all others will survive.
 * Repeat this process until you run out of time.
 *
 * Given `buckets`, `minutesToDie`, and `minutesToTest`, return *the
 * **minimum** number of pigs needed to figure out which bucket is
 * poisonous within the allotted time*.
 *
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
const poorPigs = function (buckets, minutesToDie, minutesToTest) {
    let rounds = Math.floor(minutesToTest / minutesToDie) + 1;
    let pigs = 0;

    while (Math.pow(rounds, pigs) < buckets) {
        pigs++;
    }

    return pigs;
};
const buckets = 4,
    minutesToDie = 15,
    minutesToTest = 15;

// Output: 2
/* Explanation: We can determine the poisonous bucket as follows:
At time 0, feed the first pig buckets 1 and 2, and feed the second pig buckets 2 and 3.
At time 15, there are 4 possible outcomes:
- If only the first pig dies, then bucket 1 must be poisonous.
- If only the second pig dies, then bucket 3 must be poisonous.
- If both pigs die, then bucket 2 must be poisonous.
- If neither pig dies, then bucket 4 must be poisonous. */

console.log(poorPigs(buckets, minutesToDie, minutesToTest));

const buckets1 = 4,
    minutesToDie1 = 15,
    minutesToTest1 = 30;
/* Output: 2
Explanation: We can determine the poisonous bucket as follows:
At time 0, feed the first pig bucket 1, and feed the second pig bucket 2.
At time 15, there are 2 possible outcomes:
- If either pig dies, then the poisonous bucket is the one it was fed.
- If neither pig dies, then feed the first pig bucket 3, and feed the second pig bucket 4.
At time 30, one of the two pigs must die, and the poisonous bucket is the one it was fed. */

console.log(poorPigs(buckets1, minutesToDie1, minutesToTest1));

const buckets2 = 5,
    minutesToDie2 = 5,
    minutesToTest2 = 20;
// Output: 1
console.log(poorPigs(buckets2, minutesToDie2, minutesToTest2));
