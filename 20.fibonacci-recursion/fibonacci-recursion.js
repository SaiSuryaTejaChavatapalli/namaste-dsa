function Fib(n) {
  if (n == 0 || n == 1) return n;
  return Fib(n - 1) + Fib(n - 2);
}

console.log(Fib(4)); //3
console.log(Fib(3)); //2
console.log(Fib(2)); //1
