/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let newSet = new Set();
  let cnt = 0;
  for (let i = 0; i < jewels.length; i++) {
    newSet.add(jewels[i]);
  }

  for (let i = 0; i < stones.length; i++) {
    if (newSet.has(stones[i])) cnt++;
  }
  return cnt;
};
