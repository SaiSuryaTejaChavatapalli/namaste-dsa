const arr = [1, 3, 4, 5, 6];

function isOdd(num) {
  return num % 2 == 1 ? num : 0;
}

function sum(n) {
  if (n == 0) {
    return isOdd(arr[n]);
  }
  return isOdd(arr[n]) + sum(n - 1);
}

console.log(sum(arr.length - 1));
