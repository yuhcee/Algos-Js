const bubbleSort = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
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

console.log(bubbleSort([7, 1, 5, 3, 10, 0, 2, 4, 6, 9, 8]));
