const reverseString = function (string) {
  return string.length === 0
    ? ''
    : string.split('').reduceRight((str, curr) => str + curr);
};

// Do not edit below this line
module.exports = reverseString;
