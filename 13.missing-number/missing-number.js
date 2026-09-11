function MissingNumberInRange(nums) {
  let n = nums.length;
  // Formula for sum of natural number = n * ((n+1)/2)
  sumOfN = n * ((n + 1) / 2);

  let sumOfNums = 0;
  for (let i = 0; i < nums.length; i++) {
    sumOfNums += nums[i];
  }

  return sumOfN - sumOfNums;
}

console.log(MissingNumberInRange([3, 0, 1]));
console.log(MissingNumberInRange([0, 1]));
console.log(MissingNumberInRange([9, 6, 4, 2, 3, 5, 7, 0, 1]));
