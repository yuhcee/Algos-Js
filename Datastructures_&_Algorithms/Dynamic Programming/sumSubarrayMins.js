/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
    const MOD = Math.pow(10, 9) + 7;
    const n = arr.length;
    const stack = [];
    const leftBound = new Array(n).fill(-1);
    const rightBound = new Array(n).fill(n);

    for (let i = 0; i < n; i++) {
        while (stack.length && arr[i] < arr[stack[stack.length - 1]]) {
            const idx = stack.pop();
            rightBound[idx] = i;
        }
        if (stack.length > 0) leftBound[i] = stack[stack.length - 1];

        stack.push(i);
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
        const countLeft = i - leftBound[i];
        const countRight = rightBound[i] - i;
        const result = arr[i] * countLeft * countRight;

        ans += result;
    }

    return ans % MOD;
};
