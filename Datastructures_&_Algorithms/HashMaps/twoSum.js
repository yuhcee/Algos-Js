const twoSum = (nums, target) => {
    const complementNums = new Map();

    for (let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i];
        const difference = target - currentNumber;

        if (complementNums.has(difference)) {
            return [complementNums.get(difference), i];
        }
        complementNums.set(currentNumber, i);
    }
};

console.log(twoSum([3, 2, 4], 6));
