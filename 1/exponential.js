// exponential
function power(base, exp) {
  let res = 1;

  for (const i = 1; i <= exp; i++) {
    res *= base;
  }

  return res;
}

power(2, 3); // 8

function powerR(base, exp) {
  if (exp === 0) {
    return 1;
  }

  return powerR(base, exp - 1) * base;
}

powerR(2, 3); // 8
