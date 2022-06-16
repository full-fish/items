let arr = [
  65, 73, 67, 98, 75, 80, 87, 30, 61, 45, 4, 36, 52, 5, 23, 68, 71, 70, 61, 21, 29, 73, 36, 90, 13,
  97, 14, 71, 1, 51, 49, 3, 15, 64, 51, 87, 80, 8, 73, 84, 21, 93, 46, 87, 49, 41, 77, 40, 73, 96,
];

function shellSort(arr) {
  let comparisons = 0;
  let swaps = 0;
  for (let gap = parseInt(arr.length / 2); gap > 0; gap = parseInt(gap / 2)) {
    if (gap % 2 === 0) gap++;
    for (let i = 0; i < gap; i++) {
      insertionSort(arr, i, arr.length - 1, gap);
    }
  }
  return arr;
}
function insertionSort(arr, first, last, gap) {
  let j = 0;
  let key = 0;
  for (let i = first + gap; i <= last; i = i + gap) {
    key = arr[i];
    for (j = i - gap; j >= first && arr[j] > key; j = j - gap) {
      arr[j + gap] = arr[j];
    }
    arr[j + gap] = key;
  }
}
console.log(shellSort(arr));
console.log(shellSort([4, 3, 2, 1]));
