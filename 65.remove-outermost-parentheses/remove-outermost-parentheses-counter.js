/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let level = 0;
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      level++;
      if (level > 1) res = res + s[i];
    } else {
      if (level > 1) res = res + s[i];
      level--;
    }
  }
  return res;
};
