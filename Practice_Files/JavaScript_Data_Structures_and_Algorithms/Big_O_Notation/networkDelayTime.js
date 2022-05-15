/**
 * **743. Network Delay Time**
 *
 * You are given a network of `n` nodes, labeled from `1` to `n`. You are also given `times`, a list of
 * travel times as directed edges `times[i] = (ui, vi, wi)`, where `ui` is the source node, `vi` is the
 * target node, and `wi` is the time it takes for a signal to travel from source to target.
 *
 * We will send a signal from a given node `k`. Return the time it takes for all the `n` nodes to receive
 * the signal. If it is impossible for all the `n` nodes to receive the signal, return `-1`.
 *
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const networkDelayTime = (times, n, k) => {
    // Initially we assume the time-taken to reach each node is a large value. Math.min() --> without any args will be large val (Infinity).
    let nodes = new Array(n).fill(Math.min());
    nodes;

    // K is staring node where we get the signal initally.So we dont have to wait for it.
    // since its array we assign k-1(index) as 0.
    nodes[k - 1] = 0;
    console.log(nodes);

    // iterate until we have found actual time for the signal
    let shouldComputeTime = true;
    while (shouldComputeTime) {
        /* we change to false initially thinking that we can find all actual times in first iteration &
		we dont have to recompute again(positive case) */
        shouldComputeTime = false;

        for (let [src, target, timeTaken] of times) {
            // decrementing because we need to access our actualTimeTaken array(index-based)
            src -= 1;
            target -= 1;

            // if source itself is large, it means we havent found a way to reach the source so just continue with next nodes
            if (nodes[src] === Math.min()) continue;

            // if not checking if time taken to reach target is lesser than what we assumed in our array
            /* If so, then change its time to correct time and now we need to iterate again from beginning in the next cycle
			because we have changed a time and now we need to recompute according to this time. */
            if (nodes[target] > nodes[src] + timeTaken) {
                nodes[target] = nodes[src] + timeTaken;
                // we need to recompute again as we did changes to a particular node's time
                shouldComputeTime = true;
            }
        }
    }
    nodes
    // the max value will be time taken to reach since its the last node
    let maxTimeToLastNode = Math.max(...nodes);
};

const times = [
        [2, 1, 1],
        [2, 3, 1],
        [3, 4, 1],
    ],
    n = 4,
    k = 2; // Output: 2;

console.log(networkDelayTime(times, n, k));
