/**
 * *Container With Most Water*
 *
 * You are given an integer array height of length n. There are n vertical lines drawn such that the
 * two endpoints of the ith line are (i, 0) and (i, height[i]).
 *
 * Find two lines that together with the x-axis form a container, such that the container contains the
 * most water.
 *
 * Return the maximum amount of water a container can store.
 *
 * Notice that you may not slant the container.
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0,
        right = height.length - 1,
        maxArea = 0;

        maxArea = (Math.min(height[left], height[right]) * (right - left));

        do{
            if(height[left] < height[right] ) ++left;
            else{--right;}
            let product = Math.min(height[left], height[right]) * (right - left);
            maxArea = Math.max(maxArea, product);
        }
};
