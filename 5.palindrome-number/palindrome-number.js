// reverse == number -> palindrome
// find last digit => n%10
// remove last digit => n/10

function palindromeNumber(num) {
  if (num < 0) return false;
  let originalNumber = num;
  reverse = 0;

  while (num > 0) {
    reverse = reverse * 10 + Math.floor(num % 10);
    num = Math.floor(num / 10);
  }
  return reverse == originalNumber;
}

console.log(palindromeNumber(121));
console.log(palindromeNumber(143));
console.log(palindromeNumber(-121));

// 1*10= 10
// 10+2*10=30
// 30+1*10=30
