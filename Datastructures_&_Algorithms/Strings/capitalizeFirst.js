/**
 * **Capitalize First**
 *
 * Write a recursive function called **capitalizeFirst**. Given an array of strings, capitalize the
 * first letter of each string in the array.
 *
 */
const capitalizeFirst = (arr) => {
    if (arr.length === 1) {
        return [arr[0].charAt(0).toUpperCase() + arr[0].substring(1)];
    }
    
    let res = capitalizeFirst(arr.slice(0, -1));
    res.push(
        arr
            .slice(arr.length - 1)[0]
            .charAt(0)
            .toUpperCase() + arr.slice(arr.length - 1)[0].substring(1)
    );

    return res;
};

console.log(capitalizeFirst(['car', 'taco', 'desk']));
