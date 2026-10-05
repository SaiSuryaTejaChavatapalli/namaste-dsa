/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  s = s.split("");
  for (let i = 0; i < s.length; i = i + 2 * k) {
    let mid = Math.floor(k / 2);
    for (let j = 0; j < mid; j++) {
      let temp = s[j + i];
      s[j + i] = s[k - 1 - j + i];
      s[k - 1 - j + i] = temp;
    }
  }

  return s.join("");
};
