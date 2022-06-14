function combination(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);
  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr.slice(idx + 1);
    const combinationArr = combination(restArr, selectNum - 1);
    const combineFix = combinationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}
//!
const conbination = (arr, bucket, n) => {
  if (n === 0) {
    console.log(bucket);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    const choice = arr[i];
    const sliceArr = arr.slice(); // 재귀
    conbination(sliceArr.slice(i + 1), bucket.concat(choice), n - 1);
  }
};
conbination([1, 2, 3, 4], [], 3);
//! 이게 내가 만든 보기 쉬운거
function solution(arr, n) {
  let result = [];
  function combination(n, arr, tempArr) {
    if (n === 0) {
      result.push(tempArr.slice());
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      const fixed = arr[i];
      combination(n - 1, arr.slice(i + 1), tempArr.concat(fixed));
    }
  }
  combination(n, arr, []);
  return result;
}
console.log(solution([1, 2, 3, 4], 3));
