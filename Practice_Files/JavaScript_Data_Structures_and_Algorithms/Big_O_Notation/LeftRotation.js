/**
 * A left rotation operation on an array of size  shifts each of the array's elements  unit to the left. Given an integer, , rotate the array that many steps left and return the result.
 * Example
 *  
 * d = 2;
 * arr = [1, 2, 3, 4, 5];
 * 
 * After  rotations,arr = [3, 4, 5, 1, 2].
 * Function Description

 * Complete the rotateLeft function in the editor below.

 * rotateLeft has the following parameters:

 * int d: the amount to rotate by
 * int arr[n]: the array to rotate
 * Returns int[n]: the rotated array
 * 
 * Input Format

 * The first line contains two space-separated integers that denote n, 
   the number of integers, and d, the number of left rotations to perform.
 * The second line contains n space-separated integers that describe arr.
 * @param d 
 * @param arr 
 * @returns int[n]: the rotated array
 */
function rotateLeft(d, arr) {
  // Write your code here
  const removed = arr.splice(0, d);
  return [...arr, ...removed];
}
const arr = [1, 2, 3, 4, 5];
const d = 4;
console.log(rotateLeft(d, arr));
