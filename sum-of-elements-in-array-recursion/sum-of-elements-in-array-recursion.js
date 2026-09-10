// function sum(arr) {
//   if (arr.length == 1) return arr[0];
//   return arr[0] + sum(arr.slice(1));
// }

// console.log(sum([20, 10, 10, 5, 5]));

const arr = [20, 10, 10, 5, 5];
function sum1(n) {
  if (n == 0) return arr[0];
  return arr[n] + sum1(n - 1);
}

console.log(sum1(arr.length - 1));

// const arr2 = [20, 10, 10, 5, 5];
// function sum2(n) {
//   if (n == arr2.length - 1) return arr2[arr2.length - 1];
//   return arr2[n] + sum2(n + 1);
// }

// console.log(sum2(0));
