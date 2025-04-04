# JavaScript Recursion

Recursion occurs when functions call themselves to perform a task.
It is a **problem-solving technique** where solution of a larger problem is defined in terms of smaller instances of itself.

- There must be a based case for all accurate inputs
- There must be a based case that does not recursive calls
- Recursive calls should make forward progress to base case

## Head recursion

Recursive calls happen before processing

## Tail recursion

Recursive calls happen after processing

- More efficient
- No stack overflow
- Progress monitoring

## Wrapper function

Function that helps main function

## Accumulators

## Memoization

## Quicksort

- Worst  : O(n^2)
- Average: O(nlogn) 

### Phases

- swapping
- partitioning
- sorting

### Implementation

```js
function swapElements(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

  return arr;
}

function partition(arr, left, right) {
  const pivot = arr[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swapElements(arr, i, j);
      i++;
      j--;
    }
  }

  return i;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (arr.length <= 1) {
    return arr;
  }

  const index = partition(arr, left, right);

  if (left < index - 1) {
    quickSort(arr, left, index - 1);
  }
  if (index < right) {
    quickSort(arr, index, right);
  }

  return arr;
}
```

## Solving technical interviews

### Palindrome strings

```js
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
```

### Leaves number in a binary tree

