const insertionSort = function (arr) {
  // 0번째 부분은 정렬된거로 침
  let sortedArr = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    // 삽입할 요소가 정렬된 요소의 가장 큰 수보다 크다면 그냥 push
    if (arr[i] >= sortedArr[i - 1]) {
      sortedArr.push(arr[i]);
    } else {
      for (let j = 0; j < sortedArr.length; j++) {
        // 삽입할 요소가 정렬된 부분의 어떠한 요소보다 작을 때 그 부분에 삽입
        if (arr[i] <= sortedArr[j]) {
          const left = sortedArr.slice(0, j);
          const right = sortedArr.slice(j);
          sortedArr = left.concat(arr[i], right);
          break;
        }
      }
    }
  }
  return sortedArr;
};
console.log(insertionSort([3, 4, 5, 1, 6, 8, 3, 2, -1, 0]));
