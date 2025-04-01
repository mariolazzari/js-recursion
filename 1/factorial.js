function fact(n) {
  let res = 1;

  for (let i = n - 1; i > 0; i--) {
    res *= i;
  }

  return res;
}

fact(5); // 120

function factR(n) {
  if (n <= 1) {
    return 1;
  }

  return n * factR(n - 1);
}

factR(5); // 120
