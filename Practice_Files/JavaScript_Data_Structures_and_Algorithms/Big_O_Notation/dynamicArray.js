/**
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function dynamicArray(n, queries) {
  const arr = new Array(n).fill([]);
  const answers = [];
  let lastAnswer = 0;

  for (let i = 0; i < queries.length; i++) {
    const q = queries[i];
    let x = q[1];
    let y = q[2];
    let idx = (x ^ lastAnswer) % n;

    if (q[0] === 1) {
      arr[idx] = [...arr[idx], y];
    } else {
      lastAnswer = arr[idx][y % arr[idx].length];
      answers.push(lastAnswer);
    }
  }

  return answers;
}

const queries = [
  [1, 0, 5],
  [1, 1, 7],
  [1, 0, 3],
  [2, 1, 0],
  [2, 1, 1],
];
console.log(dynamicArray(2, queries));
