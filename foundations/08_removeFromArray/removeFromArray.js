const removeFromArray = function (arr, ...item) {
  return arr.filter((value) => !item.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
