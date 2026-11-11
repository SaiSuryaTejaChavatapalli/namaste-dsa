/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const findFirstPosition = (nums, target) => {
  let first = -1;
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (nums[mid] == target) {
      first = mid;
      high = mid - 1;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return first;
};

const findLastPosition = (nums, target) => {
  let last = -1;
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (nums[mid] == target) {
      last = mid;
      low = mid + 1;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return last;
};

var searchRange = function (nums, target) {
  let first = findFirstPosition(nums, target);
  if (first == -1) return 0;
  let last = findLastPosition(nums, target);
  return last - first + 1;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
