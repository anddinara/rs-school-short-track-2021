/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const matrix1 = matrix;
  const arr = matrix1.join(',');
  let count = 1;
  for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix1[i].length; j++) {
      if (matrix1[i][j] === true) {
        matrix1[i][j] = 1;
      } else if (matrix1[i][j] === false) {
        if (arr.indexOf(true)) {
          count = 1;
        }
        count = 0;
        if (i - 1 >= 0 && j - 1 >= 0 && matrix1[i - 1][j - 1] === true) {
          count += 1;
        }
        if (i - 1 >= 0 && j - 1 >= 0 && matrix1[i - 1][j] === true) {
          count += 1;
        }
        if (i - 1 >= 0 && j - 1 >= 0 && matrix1[i - 1][j + 1] === true) {
          count += 1;
        }
        if (i - 1 >= 0 && j - 1 >= 0 && matrix1[i][j - 1] === true) {
          count += 1;
        }
        if (matrix1[i][j + 1] === true) {
          count += 1;
        }
        if (i + 1 < matrix1.length && j + 1 < matrix1[i].length && matrix1[i + 1][j + 1] === true) {
          count += 1;
        }
        if (i + 1 < matrix1.length && j + 1 < matrix1[i].length && matrix1[i + 1][j] === true) {
          count += 1;
        }
        if (i + 1 < matrix1.length && j + 1 < matrix1[i].length && matrix1[i + 1][j + 1] === true) {
          count += 1;
        }
        matrix1[i][j] = count;
      }
    }
  }
  return matrix1;
}

module.exports = minesweeper;
