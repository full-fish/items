let arr = [
  65, 73, 67, 98, 75, 80, 87, 30, 61, 45, 4, 36, 52, 5, 23, 68, 71, 70, 61, 21, 29, 73, 36, 90, 13,
  97, 14, 71, 1, 51, 49, 3, 15, 64, 51, 87, 80, 8, 73, 84, 21, 93, 46, 87, 49, 41, 77, 40, 73, 96,
];
function main(arr) {
  mergeSort(arr, 0, arr.length - 1);
  return arr;
}
function mergeSort(arr, left, right) {
  if (left < right) {
    let mid = parseInt((left + right) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }
}
function merge(arr, left, mid, right) {
  let i = left;
  let j = mid + 1;
  let k = left;
  let sorted = [];
  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) sorted[k++] = arr[i++];
    else sorted[k++] = arr[j++];
  }
  if (i > mid) {
    for (l = j; l <= right; l++) sorted[k++] = arr[l];
  } else {
    for (l = i; l <= mid; l++) sorted[k++] = arr[l];
  }
  for (l = left; l <= right; l++) {
    arr[l] = sorted[l];
  }
}

console.log(main(arr));
