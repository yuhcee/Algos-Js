/**
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
  // Write your code here
  let output = ' ',
    hash = '#',
    integer = n,
    times = 0;

  while (n-- > 0) {
    times = integer - n;
    console.log(`${output.repeat(n)}${hash.repeat(times)}`);
  }
  return ' ';
}

console.log(staircase(6));
