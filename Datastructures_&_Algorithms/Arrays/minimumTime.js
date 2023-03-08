/**
 * **2187. Minimum Time to Complete Trips**
 *
 * You are given an array `time` where `time[i]` denotes the time taken by the `ith` bus to complete
 * one trip.
 *
 * Each bus can make multiple trips **successively**; that is, the next trip can start **immediately
 * after** completing the current trip. Also, each bus operates **independently**; that is, the trips
 * of one bus do not influence the trips of any other bus.
 *
 * You are also given an integer `totalTrips`, which denotes the number of trips all buses should
 * make **in total**. Return *the **minimum time** required for all buses to complete **at least**
 * `totalTrips` trips*.
 *
 * **Constraints:**
 *
 * - `1 <= time.length <= 105`
 * - `1 <= time[i], totalTrips <= 107`
 *
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
const minimumTime = function (time, totalTrips) {
    function getOutcome(t) {
        return time.reduce((acc, cur) => acc + Math.floor(t / cur), 0);
    }

    const minTime = Math.min(...time);
    let low = 1,
        high = totalTrips * minTime;
    // find earliest high such that
    // getOutcome(high) >= totalTrips
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        const outcome = getOutcome(mid);
        if (outcome >= totalTrips) high = mid;
        else low = mid + 1;
    }

    return high;
};

const time = [1, 2, 3],
    totalTrips = 5;
// Output: 3
/* Explanation:
- At time t = 1, the number of trips completed by each bus are [1,0,0]. 
  The total number of trips completed is 1 + 0 + 0 = 1.
- At time t = 2, the number of trips completed by each bus are [2,1,0]. 
  The total number of trips completed is 2 + 1 + 0 = 3.
- At time t = 3, the number of trips completed by each bus are [3,1,1]. 
  The total number of trips completed is 3 + 1 + 1 = 5.
So the minimum time needed for all buses to complete at least 5 trips is 3. */
console.log(minimumTime(time, totalTrips));

const time1 = [2],
    totalTrips1 = 1;
// Output: 2
/* Explanation:
There is only one bus, and it will complete its first trip at t = 2.
So the minimum time needed to complete 1 trip is 2. */
console.log(minimumTime(time1, totalTrips1));

const time2 = [2, 4, 6, 10],
    totalTrips2 = 15;
// Output: 16
/* Explanation:
There is only one bus, and it will complete its first trip at t = 2.
So the minimum time needed to complete 1 trip is 2. */
console.log(minimumTime(time2, totalTrips2));
