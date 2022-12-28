//! 숫자만 있는거
function solution(n) {
  let result = []
  let N = n
  function DFS(n, tempArr) {
    if (n === 0) return result.push(tempArr)
    for (let i = 1; i <= N; i++) {
      DFS(n - 1, tempArr.concat(i)) // 중복순열
      // if (!tempArr.includes(i)) DFS(n - 1, tempArr.concat(i)) // 순열
    }
  }
  DFS(n, [])
  return result
}
// console.log(solution(3))

//! 배열 넣은거
let arr = ['rock', 'scissors', 'paper']

function solution2(arr, n) {
  let result = []
  function DFS(n, tempArr) {
    if (n === 0) return result.push(tempArr)
    for (let i = 0; i < arr.length; i++) {
      // DFS(n - 1, tempArr.concat(arr[i])) // 중복 순열
      if (!tempArr.includes(arr[i])) DFS(n - 1, tempArr.concat(arr[i])) // 순열
    }
  }
  DFS(n, [])
  return result
}

console.log(solution2(arr, 2))
function factorial(n) {
  return n ? n * factorial(n - 1) : 1
}
function a(n, r) {
  return n ** r
}
// console.log(a(3, 3))
