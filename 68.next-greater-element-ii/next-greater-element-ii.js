/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let stack = [];

  let n = nums.length;
  let nge = new Array(n);

  for (let i = 2 * n - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= nums[i % n]) {
      stack.pop();
    }

    if (i < n) {
      nge[i] = stack.length == 0 ? -1 : stack[stack.length - 1];
    }
    stack.push(nums[i % n]);
  }

  return nge;
};
