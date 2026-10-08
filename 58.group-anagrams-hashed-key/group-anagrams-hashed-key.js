/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = {};
  for (let i = 0; i < strs.length; i++) {
    let curr = strs[i];
    let charMap = {};
    for (let j = 0; j < curr.length; j++) {
      if (!charMap[curr[j]]) {
        charMap[curr[j]] = 1;
      } else {
        charMap[curr[j]]++;
      }
    }

    let charCodeA = "a".charCodeAt(0);
    let charCodeZ = "z".charCodeAt(0);

    let strKey = "";
    for (let k = charCodeA; k <= charCodeZ; k++) {
      let actualChar = String.fromCharCode(k);
      if (charMap[actualChar]) {
        strKey += actualChar + charMap[actualChar];
      }
    }
    if (!map[strKey]) {
      map[strKey] = [strs[i]];
    } else {
      map[strKey].push(strs[i]);
    }
  }
  return Object.values(map);
};
