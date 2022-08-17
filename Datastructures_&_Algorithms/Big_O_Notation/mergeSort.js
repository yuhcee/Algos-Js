const merge = (arr1, arr2) => {
    let i = 0,
        j = 0,
        results = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            results.push(arr2[j]);
            j++;
        } else {
            results.push(arr1[i]);
            i++;
        }
    }

    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    console.log(results);
    return results;
};

// console.log(merge([2, 5, 9], [1, 3, 4, 10]));

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    arr = merge(left, right);

    return arr;
};

console.log(mergeSort([2, 1, 5, 4, 3, 10, 9]));
