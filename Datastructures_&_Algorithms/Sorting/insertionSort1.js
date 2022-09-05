function insertionSort1(n, arr) {
  // Write your code here
  let lastElem = +arr.slice(-1).join();

  for (let i = arr.length - 1; i > 0; i--) {
    let nextElem = arr[i - 1];
    console.log(nextElem, lastElem, i);
    if (nextElem > lastElem) {
      arr.splice(i, 1, nextElem);
    } else {
      console.log(nextElem);
      arr.splice(i, 1, lastElem);
    }
    console.log(arr.join(' '));
  }
}

// console.log(insertionSort1(5, [2, 4, 6, 8, 3]));
console.log(insertionSort1(5, [1, 2, 4, 5, 3]));
