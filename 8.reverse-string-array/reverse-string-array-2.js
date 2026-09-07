function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function ReverseStringArray(arr) {
  let n = arr.length;
  for (let i = 0; i < n / 2; i++) {
    swap(arr, i, n - i - 1);
  }

  return arr;
}

console.log(ReverseStringArray(["h", "e", "l", "l", "o"]));
console.log(ReverseStringArray(["H", "a", "n", "n", "a", "h"]));
