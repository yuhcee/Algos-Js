/**
 * **1491. Average Salary Excluding the Minimum and Maximum Salary**
 *
 * You are given an array of **unique** integers salary where `salary[i]` is the salary of the `ith`
 * employee.
 *
 * Return *the average salary of employees excluding the minimum and maximum salary*. Answers within
 * `10-5` of the actual answer will be accepted.
 *
 * **Constraints:**
 *
 * - `3 <= salary.length <= 100`
 * - `1000 <= salary[i] <= 106`
 * - All the integers of `salary` are **unique**.
 *
 * @param {number[]} salary
 * @return {number}
 */
const average = function (salary) {
    // Find the minimum and maximum salaries
    let min = Math.min(...salary);
    let max = Math.max(...salary);

    // Calculate the sum of all salaries
    let sum = salary.reduce((acc, curr) => acc + curr);

    // Subtract the minimum and maximum salaries from the total sum
    sum = sum - min - max;

    // Divide the remaining sum by the number of employees minus 2
    let avg = sum / (salary.length - 2);

    return avg;
};

const salary = [4000, 3000, 1000, 2000];
// Output: 2500.00000
/* Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500 */
console.log(average(salary));
