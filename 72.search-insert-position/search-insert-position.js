/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0;
  let n = nums.length;
  let right = n - 1;

  let ans = n;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] >= target) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans;
};
