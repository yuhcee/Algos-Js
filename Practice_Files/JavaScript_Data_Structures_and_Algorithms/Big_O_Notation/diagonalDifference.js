/**
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  // Write your code here
  let difference,
    topLeftDownRight = 0,
    topRightDownLeft = 0;

  for (let i = 0; i < arr.length; i++) {
    let currIndex = arr[i].length - 1;
    (topLeftDownRight += arr[i][currIndex - i]),
      (topRightDownLeft += arr[currIndex - i][currIndex - i]);
  }

  difference = Math.abs(topLeftDownRight - topRightDownLeft);
  return difference;
}

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);
