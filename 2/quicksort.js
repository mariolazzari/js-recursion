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

const array = [3, 6, 8, 10, 1, 2, 1];
const sortedArray = quickSort(array);
console.log(sortedArray); // [1, 1, 2, 3, 6, 8, 10]
