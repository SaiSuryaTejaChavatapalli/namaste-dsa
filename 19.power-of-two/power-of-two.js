function PowerOfTwo(n) {
  if (n == 1) return true;
  else if (n < 1 || n % 2 == 1) {
    return false;
  }
  return PowerOfTwo(n / 2);
}

console.log(PowerOfTwo(16));
console.log(PowerOfTwo(6));
console.log(PowerOfTwo(3));
