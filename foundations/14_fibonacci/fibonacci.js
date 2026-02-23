const fibonacci = function (n) {
  if (n < 0) return 'OOPS';

  let numbers = {
    0: 0,
    1: 1,
  };

  for (let i = 2; i <= n; i++) {
    numbers[i] = numbers[i - 1] + numbers[i - 2];
  }

  return numbers[n];
};

// Do not edit below this line
module.exports = fibonacci;
