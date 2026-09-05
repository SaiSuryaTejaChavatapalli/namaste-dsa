function LargestNumberInArray(arr) {
  let large = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      large = arr[i];
    }
  }

  return large;
}

console.log(LargestNumberInArray([4, 9, 0, 2, 8, 7, 1]));
