/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
  let n = num.length - 1;

  let res = "";
  while (n >= 0) {
    if (parseInt(num[n]) % 2 == 1) {
      for (let i = 0; i <= n; i++) {
        res = res + num[i];
      }
      return res;
    }
    n--;
  }
  return "";
};
