const n = 10;

function Print1ToNRecursion(num) {
  if (num > n) return;
  console.log(num);
  num = num + 1;
  Print1ToNRecursion(num);
}

Print1ToNRecursion(1);
