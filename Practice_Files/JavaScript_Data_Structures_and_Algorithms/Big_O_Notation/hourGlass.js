/**
 * Given a 6 x 6 2D Array, arr:
 * An hourglass in A is a subset of values with indices falling in this pattern in arr's graphical representation:
 *
 * There are 16 hourglasses in arr. An hourglass sum is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum. The array will always be 6 x 6.
 *
 * @param arr
 * @returns Sum of highest HourGlass
 */
function hourglassSum(arr) {
  let totalSum = -Infinity;
  let currentSum = 0;

  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 4; j++) {
      currentSum =
        arr[i - 1][j - 1] +
        arr[i - 1][j] +
        arr[i - 1][j + 1] +
        arr[i][j] +
        arr[i + 1][j - 1] +
        arr[i + 1][j] +
        arr[i + 1][j + 1];

      if (currentSum > totalSum) totalSum = currentSum;
    }
  }
  return totalSum;
}

const arr = [
  [-1, -1, 0, -9, -2, -2],
  [-2, -1, -6, -8, -2, -5],
  [-1, -1, -1, -2, -3, -4],
  [-1, -9, -2, -4, -4, -5],
  [-7, -3, -3, -2, -9, -9],
  [-1, -3, -1, -2, -4, -5],
];

console.log(hourglassSum(arr));
