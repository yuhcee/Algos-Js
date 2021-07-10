// Write a simple Javascript function that given an array of N integers, return the smallest positive integer
// (greater than 0) that does not occur in A

/* for example,
given A= [1,5,7,4,1,2] the function should return 3.
Given A = [1,2,3] the function should return 4
Given A = [-1, -3] the function should return 1 */

/* write an efficient algorithm for the following assumptions
N is an integer within the range [1..100,000]
each element of array A is an integer within the range */

const smallestPostiveInteger = (N) => {
  const sortedUniqueValues = Array.from(new Set(N))
    .sort()
    .filter((uniqueValue) => uniqueValue > 0);

  if (sortedUniqueValues.length <= 0) {
    return 1;
  }

  for (let i = 0; i < sortedUniqueValues.length; i++) {
    if (sortedUniqueValues[i + 1] - sortedUniqueValues[i] == 1) {
      continue;
    } else {
      return sortedUniqueValues[i] + 1;
    }
  }
};

console.log(smallestPostiveInteger([0, 1, 3, 7, 9]));
console.log(smallestPostiveInteger([1, 5, 7, 4, 1, 2]));
console.log(smallestPostiveInteger([1, 2, 3]));
console.log(smallestPostiveInteger([]));
console.log(smallestPostiveInteger([-1, 22, 25]));
