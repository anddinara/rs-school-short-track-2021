/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const array = matrix;
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 0 && i + 1 < array.length) {
        array[i + 1][j] = array[i][j];
      }
      count += array[i][j];
    }
  }
  return count;
}

// function getMatrixElementsSum(/* matrix */) {
//   throw new Error('Not implemented');
// }

module.exports = getMatrixElementsSum;
