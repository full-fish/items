function makeObj() {
  let num = 0
  let obj = {}
  for (let i = 65; i <= 122; i++) {
    if (!(i > 90 && 97 > i))
      obj[String.fromCharCode(i)] = [Math.round(num * 10000) / 10000, Math.round((Math.round((num += 0.018) * 10000) / 10000 - 0.0001) * 10000) / 10000]
  }
  obj[' '] = [0.936, 0.9539]
  obj['end'] = [0.954, 1]
  return obj
}
function compression(str) {
  let obj = makeObj()
  let compressionRange = [0, 1]
  let num_2 = '0.'
  for (let i = 0; i < str.length; i++) {
    const sub = subFun(compressionRange[1], compressionRange[0])
    compressionRange[1] = rangeFun(compressionRange[0], sub, obj[str[i]][1])
    compressionRange[0] = rangeFun(compressionRange[0], sub, obj[str[i]][0])
  }
  const sub = subFun(compressionRange[1], compressionRange[0])
  compressionRange[1] = rangeFun(compressionRange[0], sub, obj['end'][1])
  compressionRange[0] = rangeFun(compressionRange[0], sub, obj['end'][0])
  while (!(compressionRange[0] <= binaryStrToDecimalNum(num_2) && binaryStrToDecimalNum(num_2) <= compressionRange[1])) {
    if (compressionRange[1] < binaryStrToDecimalNum(num_2 + '1')) num_2 += '0'
    else num_2 += '1'
  }
  return num_2
}
function decompress(binaryStr) {
  let obj = makeObj()
  let decompressRange = [0, 1]
  let finish = false
  let result = ''
  const decimalNum = binaryStrToDecimalNum(binaryStr)
  while (!finish) {
    for (let key in obj) {
      let copyDecryptRange = decompressRange.slice()
      const sub = copyDecryptRange[1] - copyDecryptRange[0]
      copyDecryptRange[1] = rangeFun(copyDecryptRange[0], sub, obj[key][1])
      copyDecryptRange[0] = rangeFun(copyDecryptRange[0], sub, obj[key][0])
      if (copyDecryptRange[0] <= decimalNum && decimalNum <= copyDecryptRange[1]) {
        decompressRange = copyDecryptRange
        if (key === 'end') finish = true
        else result += key
        break
      }
    }
  }
  return result
}
function binaryStrToDecimalNum(binaryStr) {
  let result = 0
  let underNum = binaryStr !== '0.' ? binaryStr.slice(2) : '0'
  for (let i = 0; i < underNum.length; i++) {
    if (underNum[i] === '1') result += 0.5 ** (i + 1)
  }
  return result
}
function rangeFun(range0, sub, objKey) {
  let decimalRange0Lenght = Number.isInteger(range0) ? 0 : String(range0).length - 2,
    decimalSubLenght = Number.isInteger(sub) ? 0 : String(sub).length - 2,
    decimalObjKeyLenght = Number.isInteger(objKey) ? 0 : String(objKey).length - 2
  let longLenght = Math.max(decimalRange0Lenght, decimalSubLenght + decimalObjKeyLenght)
  return Math.round((range0 + sub * objKey) * 10 ** longLenght) / 10 ** longLenght
}
function subFun(a, b) {
  let decimalALenght = Number.isInteger(a) ? 0 : String(a).length - 2,
    decimalBLenght = Number.isInteger(b) ? 0 : String(b).length - 2
  let longLenght = Math.max(decimalALenght, decimalBLenght)
  return Math.round((a - b) * 10 ** longLenght) / 10 ** longLenght
}

function compressionArr(str) {
  let compressionedArr = []
  for (let i = 0; i < str.length; i += 7) {
    compressionedArr.push(compression(str.slice(i, i + 7)))
  }
  return compressionedArr
}
function decompressArr(arr) {
  let decompressed = ''
  arr.forEach(e => {
    decompressed += decompress(e)
  })
  return decompressed
}
let compressioned = compressionArr('Hi my name is choimanseon')
console.log(compressioned)
let decompressed = decompressArr(compressioned)
console.log(decompressed)
//!
// let compressioned = compression('manseon')
// console.log('compressioned', compressioned)
// let decompressed = decompress(compressioned)
// console.log('decompressed', decompressed)
