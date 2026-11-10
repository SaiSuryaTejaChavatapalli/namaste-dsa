/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (a, target) {
  let l = 0;
  let r = a.length - 1;

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    if (a[mid] == target) return mid;
    // left sorted
    if (a[l] <= a[mid]) {
      if (a[l] <= target && target <= a[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    // right sorted
    else {
      if (a[mid] <= target && target <= a[r]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return -1;
};
