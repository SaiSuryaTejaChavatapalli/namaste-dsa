function FactorialRecursion(n) {
  if (n == 1) return 1;
  return n * FactorialRecursion(n - 1);
}

console.log(FactorialRecursion(5));
