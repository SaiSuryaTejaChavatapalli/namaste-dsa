/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let length = s.length - 1;
  while (length >= 0) {
    if (s[length] != " ") break;
    length--;
  }

  let cnt = 0;
  while (length >= 0) {
    if (s[length] == " ") break;
    cnt++;
    length--;
  }
  return cnt;
};
