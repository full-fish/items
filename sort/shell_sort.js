let arr = [
  65, 73, 67, 98, 75, 80, 87, 30, 61, 45, 4, 36, 52, 5, 23, 68, 71, 70, 61, 21, 29, 73, 36, 90, 13,
  97, 14, 71, 1, 51, 49, 3, 15, 64, 51, 87, 80, 8, 73, 84, 21, 93, 46, 87, 49, 41, 77, 40, 73, 96,
];
let swaps = 0;
let comparisons = 0;
function shellSort(arr) {
  for (let gap = parseInt(arr.length / 2); gap > 0; gap = parseInt(gap / 2)) {
    // 홀수로 만들기 (홀수가 더 빠름)
    if (gap % 2 === 0) gap++;
    for (let i = 0; i < gap; i++) {
      insertionSort(arr, i, arr.length - 1, gap);
    }
  }
  console.log(comparisons, swaps);
  return arr;
}
function insertionSort(arr, first, last, gap) {
  let j = 0;
  let key = 0;
  for (let i = first + gap; i <= last; i = i + gap) {
    key = arr[i];
    comparisons++;
    for (j = i - gap; j >= first && arr[j] > key; j = j - gap) {
      swaps++;
      arr[j + gap] = arr[j];
    }
    arr[j + gap] = key;
  }
}

console.time();
console.log(shellSort(arr));
console.timeEnd();
