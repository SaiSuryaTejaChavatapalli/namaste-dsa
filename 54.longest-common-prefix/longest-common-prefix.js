/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let firstStr = strs[0];
  let n = 0;
  let res = "";
  while (n < firstStr.length) {
    let target = firstStr[n];
    for (let i = 1; i < strs.length; i++) {
      if (strs[i][n] != target || n == strs[i].length) {
        return res;
      }
    }
    res = res + target;
    n++;
  }
  return res;
};
