/**
 * Write a sort function that takes in three array elements and returns on sorted array without using the built-in function
 */

function sortArr(arr1, arr2, arr3) {
  var newArr = [...arr1, ...arr2, ...arr3];

  for (let i = 0; i < newArr.length; i++) {
    for (let j = i + 1; j < newArr.length; j++) {
      if (newArr[i] > newArr[j]) {
        let swap = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = swap;
        // [newArr[i], newArr[j]] = [newArr[j], swap];
      }
    }
  }
  return newArr;
}

console.log(sortArr([3, 2, 1], [6, 5, 4], [9, 8, 7]));
console.log(sortArr([8,7], [6,5,9], [4,2,1]));
console.log(sortArr([3,7,8],[4,8],[4,1]));
console.log(sortArr([7,8,0],[4.6,1,2],[-1,6]));