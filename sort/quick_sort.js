let arr = [
  65, 73, 67, 98, 75, 80, 87, 30, 61, 45, 4, 36, 52, 5, 23, 68, 71, 70, 61, 21, 29, 73, 36, 90, 13,
  97, 14, 71, 1, 51, 49, 3, 15, 64, 51, 87, 80, 8, 73, 84, 21, 93, 46, 87, 49, 41, 77, 40, 73, 96,
];
let arr2 = [5, 4, 3, 2, 1];
function main(arr) {
  quickSort(arr, 0, arr.length - 1);
  console.log("1");
  return arr;
}
function quickSort(arr, left, right) {
  console.log(2);
  if (left < right) {
    console.log(3);
    let q = partition(arr, left, right);
    console.log(4);
    quickSort(arr, left, q - 1);
    quickSort(arr, q + 1, right);
  }
}
function partition(arr, left, right) {
  let low = left;
  let high = right + 1;
  let pivot = arr[left];
  /* low와 high가 교차할 때까지 반복(low<high) */

  while (low < high) {
    /* arr[low]가 피벗보다 작으면 계속 low를 증가 */
    low++;
    while (low <= right && arr[low] < pivot) {
      low++;
    }

    /* arr[high]가 피벗보다 크면 계속 high를 감소 */
    high--;
    while (high >= left && arr[high] > pivot) {
      high--;
    }

    // 만약 low와 high가 교차하지 않았으면 arr[low]를 arr[high] 교환
    if (low < high) {
      [arr[low], arr[high]] = [arr[high], arr[low]];
    }
  }

  // low와 high가 교차했으면 반복문을 빠져나와 arr[left]와 arr[high]를 교환
  [arr[left], arr[high]] = [arr[high], arr[left]];

  // 피벗의 위치인 high를 반환
  return high;
}
console.log(main(arr));
