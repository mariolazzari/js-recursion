const palindrome = str => str === str.split("").reverse().join("");

function isPalindrome(phrase) {
  const size = phrase.length;

  // 1 char only
  if (size < 2) {
    return true;
  }

  // check first and las
  if (phrase[0] !== phrase[size - 1]) {
    return false;
  }

  // check chars between 1st and last
  const substr = phrase.substr(1, size - 2);

  return isPalindrome(substr);
}

console.log("racecar:", isPalindrome("racecar")); // true
console.log("mario:", isPalindrome("mario")); // false
