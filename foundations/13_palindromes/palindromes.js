const palindromes = function (string) {
  const punctuations = [',', '.', '!', '?', '-', ' '];
  let newString = '';
  let reversedString = '';

  for (let i = 0; i < string.length; i++) {
    if (punctuations.includes(string[i])) continue;
    else {
      newString += string[i].toLowerCase();
    }
  }

  for (let i = string.length - 1; i >= 0; i--) {
    if (punctuations.includes(string[i])) continue;
    else {
      reversedString += string[i].toLowerCase();
    }
  }

  return reversedString === newString;
};

console.log(palindromes('A man, a car, a maraca.'));

// Do not edit below this line
module.exports = palindromes;
