function SecondLargestNumberInArray(arr) {
  if (arr.length < 2) return null;

  let large = -Infinity;
  let secondLarge = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      secondLarge = large;
      large = arr[i];
    } else if (arr[i] > secondLarge && arr[i] !== large) {
      secondLarge = arr[i];
    }
  }

  return secondLarge;
}

console.log(SecondLargestNumberInArray([4, 9, 0, 2, 8, 7, 1, 12, 13]));
console.log(SecondLargestNumberInArray([4, 9]));
// Corner cases
console.log(SecondLargestNumberInArray([]));
console.log(SecondLargestNumberInArray([4]));
console.log(SecondLargestNumberInArray([4, 9, 9]));
console.log(SecondLargestNumberInArray([-4, -9, -9]));
