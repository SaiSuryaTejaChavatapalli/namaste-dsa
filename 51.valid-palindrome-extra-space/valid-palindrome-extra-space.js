/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const CheckAlphaNumberic = (l) => {
    l = l.charCodeAt(0);
    let alpha = l >= "a".charCodeAt(0) && l <= "z".charCodeAt(0);
    let numeric = l >= "0".charCodeAt(0) && l <= "9".charCodeAt(0);
    return alpha || numeric;
  };

  let resStr = "";
  for (let i = 0; i < s.length; i++) {
    let lower = s[i].toLowerCase();
    if (CheckAlphaNumberic(lower)) {
      resStr += lower;
    }
  }

  let rev = "";
  for (let i = resStr.length - 1; i >= 0; i--) {
    rev += resStr[i];
  }

  console.log(resStr, rev);
  return rev == resStr;
};
