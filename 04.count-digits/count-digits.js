function countDigits(num) {
  if (num == 0) return 1;

  // Handling negative numbers to positive
  num = Math.abs(num);
  count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }

  return count;
}

console.log(countDigits(1234));
console.log(countDigits(356247));

// Corner cases

// what if number is 0
console.log(countDigits(0));
// negative numbers
console.log(countDigits(-298));
