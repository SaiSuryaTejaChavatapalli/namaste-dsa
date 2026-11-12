/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let low = 0;
  let high = nums.length - 1;

  let min = Infinity;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    // Optimization, if search space is already storted, then min is minimum
    if (nums[low] <= nums[high]) {
      min = Math.min(min, nums[low]);
      break;
    }

    // if left half is sorted
    if (nums[low] <= nums[mid]) {
      min = Math.min(min, nums[low]);
      low = mid + 1;
    }
    // if right half is sorted
    else {
      min = Math.min(nums[mid], min);
      high = mid - 1;
    }
  }
  return min;
};
