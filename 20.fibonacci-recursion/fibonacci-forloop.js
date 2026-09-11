function FibForLoop(n) {
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(FibForLoop(4)); //3
console.log(FibForLoop(3)); //2
console.log(FibForLoop(2)); //1
