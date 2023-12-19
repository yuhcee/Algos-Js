/**
 * **661. Image Smoother**
 *
 * An **image smoother** is a filter of the size `3 x 3` that can be
 * applied to each cell of an image by rounding down the average of the
 * cell and the eight surrounding cells (i.e., the average of the nine
 * cells in the blue smoother). If one or more of the surrounding cells of
 * a cell is not present, we do not consider it in the average (i.e., the
 * average of the four cells in the red smoother).
 *
 * Given an `m x n` integer matrix `img` representing the grayscale of an
 * image, return *the image after applying the smoother on each cell of
 * it*.
 *
 * **Constraints:**
 *
 * - `m == img.length`
 * - `n == img[i].length`
 * - `1 <= m, n <= 200`
 * - `0 <= img[i][j] <= 255`
 *
 * @param {number[][]} img
 * @return {number[][]}
 */
const imageSmoother = function (img) {
    const rows = img.length;
    const cols = img[0].length;

    // Create a new matrix to store the smoothed image
    const smoothedImage = new Array(rows).fill(0).map(() => new Array(cols).fill(0));

    // Helper function to calculate the average of a cell and its eight surrounding cells
    const calculateAverage = (row, col) => {
        let sum = 0;
        let count = 0;

        for (let i = row - 1; i <= row + 1; i++) {
            for (let j = col - 1; j <= col + 1; j++) {
                if (i >= 0 && i < rows && j >= 0 && j < cols) {
                    sum += img[i][j];
                    count++;
                }
            }
        }

        return Math.floor(sum / count);
    };

    // Iterate through each cell in the original image
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // Calculate the average and store it in the new matrix
            smoothedImage[i][j] = calculateAverage(i, j);
        }
    }

    return smoothedImage;
};
