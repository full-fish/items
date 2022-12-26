function factorial(n) {
  return n !== 1 ? n * factorial(n - 1) : 1
}
function factorial2(n) {
  return n ? n * factorial2(n - 1) : 1
}
console.time(1)
console.log(factorial2(0))
console.timeEnd(1)
