/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let str1;
  let str2;
  if (s1.length <= s2.length) {
    str1 = s1.split('');
    str2 = s2;
  } else {
    str1 = s2.split('');
    str2 = s1;
  }

  let count = 0;
  str1.forEach((s) => {
    if (str2.indexOf(s) > -1) {
      str2 = str2.replace(str2[str2.indexOf(s)], '');
      count += 1;
    }
  });
  return count;
}

module.exports = getCommonCharacterCount;
