const sumAll = function (int1, int2) {
  if (
    typeof int1 !== 'number' ||
    typeof int2 !== 'number' ||
    !Number.isInteger(int1) ||
    !Number.isInteger(int2) ||
    int1 < 0 ||
    int2 < 0
  ) {
    return 'ERROR';
  }

  let start, end;

  if (int1 > int2) {
    start = int2;
    end = int1;
  } else if (int1 < int2) {
    start = int1;
    end = int2;
  }

  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
