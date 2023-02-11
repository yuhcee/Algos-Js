const findNumsByK = (nums: number[], k: number): number[][] => {
    const map: Map<number, number> = new Map();
    const values: Array<number[]> = [];

    for (let num of nums) {
        let difference = k - num;
        if (map.get(num)) {
            values.push([num, map.get(num) as number]);
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
