/* Implement selection sort on an array input */
const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        // Store the first number(index) as the smallest you've seen so far.
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            // Compare this item to the next item in the arr until you find a smaller number
            if (arr[j] < arr[min]) {
                // if a smaller number is found, designate that number(index) to be the new minimum, and continue till the end.
                min = j;
            }
        }
        // if the minimun is not the value(index) you initially began with, swap the two values
        if (i !== min) swap(arr, min, i);
    }

    return arr;
};

/* const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) lowest = j;
        }
        if (lowest !== i) swap(arr, lowest, i);
    }
    return arr;
}; */

const swap = (arr, lowest, i) => ([arr[i], arr[lowest]] = [arr[lowest], arr[i]]);
console.log(selectionSort([2, 0, 34, 22, 10, 19, 17]));
