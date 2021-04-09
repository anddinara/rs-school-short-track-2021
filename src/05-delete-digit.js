/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const number = n;
  const arr2 = number.toString().split('');

  const arr1 = number.toString().split('');

  for (let i = 1; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (+arr1[i] < +arr1[j]) {
        const min = +arr1[i];
        arr1[i] = +arr1[j];
        arr1[j] = min;
      }
    }
  }

  const element = String(arr1[0]);

  if (arr2.indexOf(element) > -1) {
    arr2.splice(arr2.indexOf(element), 1);
  }

  const total = Number(arr2.join(''));

  return total;
}

module.exports = deleteDigit;
