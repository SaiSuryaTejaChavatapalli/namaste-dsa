function SingleMissingNumber(nums) {
  // ^ is opeartor for xor, xor cancels if same number appear twice
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    res = res ^ nums[i];
  }
  return res;
}

console.log(SingleMissingNumber([2, 2, 1]));
console.log(SingleMissingNumber([4, 1, 2, 1, 2]));
console.log(SingleMissingNumber([1]));
