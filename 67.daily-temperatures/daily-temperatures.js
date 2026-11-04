/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let stack = [];
  let res = new Array(temperatures.length);
  for (let i = temperatures.length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1][0] <= temperatures[i]) {
      stack.pop();
    }
    res[i] = stack.length == 0 ? 0 : stack[stack.length - 1][1] - i;
    stack.push([temperatures[i], i]);
  }
  return res;
};
