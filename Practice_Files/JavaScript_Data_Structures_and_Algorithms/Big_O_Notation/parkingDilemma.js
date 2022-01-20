// k = number of cars to be covered
// n = number of cars currently parked
// cars[i] = the positions where they are parked

/* 
  keep track of length before the next idx
  keep track of counter = 1
 start counting from the smallest element in the arr
 if smallest elem is less than or equal to the next smallest elem
 increment counter by 1
 else increment counter by 1

*/


const parkingDilemma = (n, k) => {
  if (k > n.length) return 1;

  let distances = [];
  let carPositions = n.sort((a, b) => a - b);

  for (let i = 0; i < carPositions.length; i++) {
    let carCovered = carPositions.slice(i, k + i);
    if (carCovered.length < k) {
      break;
    }
    const min = Math.min(...carCovered);
    const max = Math.max(...carCovered);
    distances.push(max - min + 1);
  }
  let [minDistance] = distances;
  return minDistance;
};

const k = 3;
const n = [6, 2, 7, 12];
console.log(parkingDilemma(n, k));
