function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const reverseString = function (s) {
  let i = 0;
  let j = s.length - 1;

  while (i <= j) {
    swap(s, i, j);
    i++;
    j--;
  }

  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
