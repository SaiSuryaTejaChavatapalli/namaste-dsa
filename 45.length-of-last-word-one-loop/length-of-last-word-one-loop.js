/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let n = s.length - 1;
  let firstTime = true;
  let cnt = 0;
  while (n >= 0) {
    if (s[n] != " ") {
      cnt++;
      firstTime = false;
    } else if (s[n] == " " && firstTime) {
      n--;
      continue;
    } else if (s[n] == " " && !firstTime) {
      break;
    }
    n--;
  }
  return cnt;
};
