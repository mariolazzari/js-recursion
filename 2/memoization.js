const cache = {};

function fibonacci(n, cache = {}) {
  // Check if the result is already in the cache
  if (n in cache) {
    console.log(`Cache hit for ${n}: ${cache[n]}`);
    return cache[n];
  }

  // Base case
  if (n <= 1) {
    return n;
  }

  // Recursive case with memoization
  cache[n] = fibonacci(n - 1, cache) + fibonacci(n - 2, cache);

  return cache[n];
}

console.log(fibonacci(10)); // 55
console.log(fibonacci(20)); // 6765
console.log(fibonacci(30)); // 832040
