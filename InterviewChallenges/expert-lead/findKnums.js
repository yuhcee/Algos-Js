const findNumsByK = (nums, k) => {
    const map = new Map();
    const values = [];

    for (let num of nums) {
        let difference = k - num;
        if (map.get(num)) {
            values.push(num, map.get(num));
        }
        map.set(difference, num);
    }

    return values;
};

console.log(findNumsByK([2, 3, 5], 7));
console.log(findNumsByK([2, 3, 5], 10));
console.log(findNumsByK([], 0));
console.log(findNumsByK([2], 2));
console.log(findNumsByK([1, 2], 2));
console.log(findNumsByK([1, 5], 3));
console.log(findNumsByK([-2, -3], -5));
console.log(findNumsByK([2, 3, 1, 4], 5));
