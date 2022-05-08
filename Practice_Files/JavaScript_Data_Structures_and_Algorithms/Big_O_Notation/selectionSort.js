/* Implement selection sort on an array input */
const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        // Store the first number(index) as the smallest you've seen so far.
        let smallest = i;
        for (let j = i + 1; j < arr.length; j++) {
            // Compare this item to the next item in the arr until you find a smaller number
            if (arr[smallest] > arr[j]) {
                // if a smaller number is found, designate that number to be the new minimum, and continue till the end.
                smallest = j;
            }
            // if the minimun is not the value(index) you initially began with, swap the two values
            if (smallest !== i) {
                temp = arr[i];
                arr[i] = arr[smallest];
                arr[smallest] = temp;
            }
        }
    }
};
