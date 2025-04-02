const palindrome = str => str === str.split("").reverse().join("");

function isPalindrome(phrase) {
  const size = phrase.length;
  if (size < 2) {
    return true;
  }

  if (phrase[0] !== phrase[size - 1]) {
    return false;
  }

  const convertedPhrase = phrase.substr(1, size - 2);
  return isPalindrome(convertedPhrase);
}

firstPalindrome("racecar"); // true
firstPalindrome("hello"); // false
