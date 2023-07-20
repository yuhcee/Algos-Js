/**
 * **735. Asteroid Collision**
 *
 * We are given an array `asteroids` of integers representing asteroids in a row.
 *
 * For each asteroid, the absolute value represents its size, and the sign represents its direction
 * (positive meaning right, negative meaning left). Each asteroid moves at the same speed.
 *
 * Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one
 * will explode. If both are the same size, both will explode. Two asteroids moving in the same
 * direction will never meet.
 *
 * **Constraints:**
 *
 * - `2 <= asteroids.length <= 104`
 * - `-1000 <= asteroids[i] <= 1000`
 * - `asteroids[i] != 0`
 *
 *
 * @param {number[]} asteroids
 * @return {number[]}
 */
const asteroidCollision = function (asteroids) {
    // If the stack is empty or the current asteroid is moving to the right, push it onto the stack
    if (stack.length === 0 || asteroid > 0) {
        stack.push(asteroid);
      } else {
        // The current asteroid is moving to the left (negative)
  
        // Handle potential collisions with asteroids in the stack
        while (stack.length > 0 && stack[stack.length - 1] > 0 && Math.abs(stack[stack.length - 1]) < Math.abs(asteroid)) {
          // Pop asteroids from the stack as long as the top asteroid is moving to the right (positive)
          // and its absolute value is less than the absolute value of the current asteroid
          stack.pop();
        }
  
        // After handling collisions, check if the current asteroid is destroyed or survives
        if (stack.length === 0 || stack[stack.length - 1] < 0) {
          // The current asteroid survives the collisions or there are no more asteroids in the stack
          stack.push(asteroid);
        } else if (stack[stack.length - 1] === Math.abs(asteroid)) {
          // Both the current asteroid and the top asteroid in the stack have the same absolute value, so they both explode
          stack.pop();
        }
        // Otherwise, the current asteroid is destroyed and we do not push it onto the stack
      }
    }
  
    return stack;
};
