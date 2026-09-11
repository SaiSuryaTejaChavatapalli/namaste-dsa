const maxProfit = function (prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      if (prices[j] - prices[i] > 0 && prices[j] - prices[i] > maxProfit) {
        maxProfit = prices[j] - prices[i];
      }
    }
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
//-------------------------------------------------------------------------------------
const maxProfit2 = function (prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      let diff = prices[j] - prices[i];
      if (diff > maxProfit) {
        maxProfit = diff;
      }
    }
  }

  return maxProfit;
};

console.log(maxProfit2([7, 1, 5, 3, 6, 4]));
console.log(maxProfit2([7, 6, 4, 3, 1]));
