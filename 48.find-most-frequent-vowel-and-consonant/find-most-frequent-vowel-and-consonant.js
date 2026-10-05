/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
  let vowelSet = new Set(["a", "e", "i", "o", "u"]);

  let hash = {};

  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) {
      hash[s[i]] = 1;
    } else {
      hash[s[i]]++;
    }
  }

  let vowelsMax = 0;
  let consonantsMax = 0;

  for (let i = 0; i < s.length; i++) {
    if (vowelSet.has(s[i])) {
      if (hash[s[i]] > vowelsMax) {
        vowelsMax = hash[s[i]];
      }
    } else {
      if (hash[s[i]] > consonantsMax) {
        consonantsMax = hash[s[i]];
      }
    }
  }
  return vowelsMax + consonantsMax;
};
