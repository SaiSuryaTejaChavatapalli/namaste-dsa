function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function BubbleSort(nums) {
  let n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    let isSwapHappend = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1);
        isSwapHappend = true;
      }
    }
    if (isSwapHappend == false) break;
  }
  return nums;
}

console.log(BubbleSort([5, 2, 4, 1]));
