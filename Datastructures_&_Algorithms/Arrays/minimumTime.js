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
