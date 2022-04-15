/**
 * Given a sorted array of sorted integers and a target average, determine if there's a pair of values in
 * the array where the avearge of the pair equals the target average. 
 * There may be more than one pair that matches the target average.
 *
 * Return *true if a pair average matches the target average, otherwise false*
 * 
 * @param {*} arr
 * @param {*} target
 * @returns
 */
function averagePair(arr, target) {
    // return false, if array length is less than target average
    if (arr.length < target) return false;

    // init multiple pointers
    let i = 0,
        j = arr.length - 1;

        while (i < j) {
            let pairAvg = (arr[i] + arr[j]) / 2;

            // return true, if current pair average matches the target
            if (pairAvg === target) {
                return true;
            }
            
        }
}


