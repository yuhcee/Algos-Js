const bubbleSort = (arr) => {
    for (let i = arr.length; i > 0; i--) {
        let noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
};

const swap = (arr, idx1, idx2) => {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;

    return arr;
};

console.log(bubbleSort([0, 1, 3, 4, 2]));
