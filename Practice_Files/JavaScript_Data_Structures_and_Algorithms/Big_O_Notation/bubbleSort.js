const bubbleSort = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let noSwaps = true;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }
        if (noSwaps) {
            break;
        }
    }
    return arr;
};

const swap = (arr, idx1, idx2) => {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;

    return arr;
};

console.log(bubbleSort([0, 1, 3, 4, 5, 7, 6, 9, 2]));
