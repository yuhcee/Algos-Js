/* Implement selection sort on an array input */
const selectionSort = (arr) => {
    // Store the first number as the smallest you've seen so far.
    let smallest = arr[0];

    for (let i = 1; i < arr.length - 1; i++) {
        // Compare this item to the next item in the arr until you find a smaller number
        if (smallest > arr[i]) {
            // if a smaller number is found, designate that number to be the new minimum, and continue till the end.
            smallest = arr[i];
        }
    }
};
