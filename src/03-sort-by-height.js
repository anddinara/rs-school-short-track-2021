/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arr1 = arr;
  const count = [];

  for (let i = arr1.length - 1; i >= 0; i--) {
    if (arr1[i] === -1) {
      arr1.splice(i, 1);
      count.push(i);
    }
  }

  count.reverse();

  for (let i = 1; i < arr1.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr1[i] < arr1[j]) {
        const min = arr1[i];
        arr1[i] = arr1[j];
        arr1[j] = min;
      }
    }
  }

  for (let k = 0; k < count.length; k++) {
    arr1.splice(count[k], 0, -1);
  }
  return arr1;
}

module.exports = sortByHeight;
