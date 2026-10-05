/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let bal = 0;
  let cnt = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "L") {
      bal++;
    } else {
      bal--;
    }

    if (bal == 0) {
      cnt++;
    }
  }
  return cnt;
};
