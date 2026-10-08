/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) hash[s[i]] = 1;
    else hash[s[i]]++;
  }

  for (let i = 0; i < t.length; i++) {
    if (!hash[t[i]] || hash[t[i]] < 0) {
      return false;
    } else {
      hash[t[i]]--;
    }
  }

  return true;
};
