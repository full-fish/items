let arr = [1, 2, 3, 4]
let n = 3
function combination(arr, selectNum) {
  const result = []
  if (selectNum === 1) return arr.map(v => [v])
  arr.forEach((v, idx, arr) => {
    const fixed = v
    const restArr = arr.slice(idx + 1)
    const combinationArr = combination(restArr, selectNum - 1)
    const combineFix = combinationArr.map(v => [fixed, ...v])
    result.push(...combineFix)
  })
  return result
}
//!
const conbination = (arr, bucket, n) => {
  if (n === 0) {
    // console.log(bucket)
    return
  }

  for (let i = 0; i < arr.length; i++) {
    const choice = arr[i]
    const sliceArr = arr.slice() // 재귀
    conbination(sliceArr.slice(i + 1), bucket.concat(choice), n - 1)
  }
}
// console.time('2')
// conbination(arr, [], n)
// console.timeEnd('2')
//! 이게 내가 만든 보기 쉬운거
//? 조합
function solution(arr, n) {
  let result = []
  function combination(n, tempArr, arr) {
    if (n === 0) return result.push(tempArr)
    for (let i = 0; i < arr.length; i++) {
      combination(n - 1, tempArr.concat(arr[i]), arr.slice(i + 1))
    }
  }
  combination(n, [], arr)
  return result
}
//? 중복 조합
function solution2(arr, n) {
  let result = []
  function combination(n, tempArr, index) {
    if (n === 0) return result.push(tempArr)
    for (let i = index; i < arr.length; i++) {
      combination(n - 1, tempArr.concat(arr[i]), i)
    }
  }
  combination(n, [], 0)
  return result
}
//? n만 주어졌을 때
function solution3(n) {
  let result = []
  let N = n
  function combination(n, tempArr, index) {
    if (n === 0) return result.push(tempArr)
    for (let i = index; i < N; i++) {
      combination(n - 1, tempArr.concat(i), i)
    }
  }
  combination(n, [], 0)
  return result
}
function factorial(n) {
  return n ? n * factorial(n - 1) : 1
}
function a(n, r) {
  return factorial(n + r - 1) / (factorial(r) * factorial(n - 1))
}
// console.time('2')
// console.log(solution(arr, n))
// console.timeEnd('2')
// console.time('3')
// console.log(solution2(arr, n))
// console.timeEnd('3')
console.log(solution3(4))
// console.log(a(4, 4))
