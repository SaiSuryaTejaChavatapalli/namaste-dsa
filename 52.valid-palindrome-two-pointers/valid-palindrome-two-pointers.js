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

  let a = 0;
  let b = s.length - 1;
  while (a < b) {
    let aLower = s[a].toLowerCase();
    let bLower = s[b].toLowerCase();
    if (!CheckAlphaNumberic(aLower)) {
      a++;
    } else if (!CheckAlphaNumberic(bLower)) {
      b--;
    } else {
      if (aLower != bLower) {
        return false;
      } else {
        a++;
        b--;
      }
    }
  }
  return true;
};
