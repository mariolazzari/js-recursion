function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

function isCumulative(fn, arg1, arg2) {
  const res1 = fn(arg1, arg2);
  const res2 = fn(arg2, arg1);

  return res1 === res2;
}

isCumulative(add, 5, 10); // true
isCumulative(subtract, 5, 10); // false
isCumulative(multiply, 5, 10); // true
isCumulative(divide, 5, 10); // false

function sum(start, end) {
  function addNext(newStart, currentSum) {
    if (newStart > end) {
      return currentSum;
    }
    return addNext(newStart + 1, currentSum + newStart);
  }

  return addNext(start, 0);
}

sum(1, 5); // 15
sum(1, 10); // 55
