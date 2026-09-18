function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let prevIndex = i - 1;
    while (prevIndex >= 0 && arr[prevIndex] > curr) {
      arr[prevIndex + 1] = arr[prevIndex];
      prevIndex--;
    }

    arr[prevIndex + 1] = curr;
  }
  return arr;
}

console.log(InsertionSort([12, 11, 13, 5, 6]));
console.log(InsertionSort([7, 4, 3, 5, 1, 2]));
