/**
 * **Get Latest K Requests**
 *
 *
 * Given `n` request ids as an array of strings, `requests`, and an
 * integer `k`, after all requests are received, find the `k` most recent
 * requests.
 *
 * Report the answer in order of most recent to least recent.
 *
 * Example:
 *
 * Suppose n = 5, requests - ['item 1', 'item2', 'item3', 'item 1',
 * 'Item3'] and k = 3.
 *
 * Starting from the right and moving left, collecting distinct requests,
 * there is `"item3"` followed by `"item1"`. Skip the second instance of
 * "item3" and find "item2". The answer is ['item3*, "item1*, item27.
 *
 * **Function Description**
 *
 * Complete the function `getLatestKRequests` in the editor below.
 *
 * `getLatestKRequests` takes the following arguments:
 * - str `requests(n)`: the request ids
 * - int `k`: the number of requests to report
 *
 * **Returns**
 * str[k]: the `k` most recent requests
 *
 * **Constraints**
 *
 * - 1 <=k <= n <= 105
 * - `requests[i]` consists of lowercase characters and digits only, `[a-2,
 * 0-9]`.
 *
 * @param {arr} requests
 * @param {num} K
 */
const getLatestKRequests = (requests, K) => {
    const uniqueRequests = new Set();
    const latestKRequests = [];

    for (let i = requests.length - 1; i >= 0; i--) {
        if (!uniqueRequests.has(requests[i])) {
            uniqueRequests.add(requests[i]);

            latestKRequests.push(requests[i]);

            if (latestKRequests.length === K) break;
        }
    }

    return latestKRequests;
};
