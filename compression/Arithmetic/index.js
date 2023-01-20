function makeObj() {
  let num = 0
  let obj = {}
  for (let i = 65; i <= 122; i++) {
    if (!(i > 90 && 97 > i))
      obj[String.fromCharCode(i)] = [Math.round(num * 10000) / 10000, Math.round((Math.round((num += 0.018) * 10000) / 10000 - 0.0001) * 10000) / 10000]
    //   obj[String.fromCharCode(i)] = [Math.round(num * 1000) / 1000, Math.round((num += 0.018) * 1000) / 1000]
  }
  obj['end'] = [0.936, 1]
  //   console.log(obj)
  return obj
}
// function makeObj() {
//   console.log('1123123123')
//   let num = 0
//   let obj = {}
//   for (let i = 97; i <= 122; i++) {
//     obj[String.fromCharCode(i)] = [Math.round(num * 10000) / 10000, Math.round((Math.round((num += 0.036) * 10000) / 10000 - 0.0001) * 10000) / 10000]
//     //   obj[String.fromCharCode(i)] = [Math.round(num * 1000) / 1000, Math.round((num += 0.018) * 1000) / 1000]
//   }
//   obj['end'] = [0.936, 1]
//   console.log(obj)

//   return obj
// }
makeObj()
function compression(str) {
  let obj = makeObj()
  let compressionRange = [0, 1]
  let num_2 = '0.'
  for (let i = 0; i < str.length; i++) {
    const sub = subFun(compressionRange[1], compressionRange[0])
    console.log('for compressionRange', compressionRange, 'sub', sub)
    console.log('[str[i]]', [str[i]])
    console.log('obj[str[i]]', obj[str[i]])
    compressionRange[1] = rangeFun(compressionRange[0], sub, obj[str[i]][1])
    compressionRange[0] = rangeFun(compressionRange[0], sub, obj[str[i]][0])
  }
  const sub = subFun(compressionRange[1], compressionRange[0])
  console.log('2 compressionRange', compressionRange, 'sub', sub)
  compressionRange[1] = rangeFun(compressionRange[0], sub, obj['end'][1])
  compressionRange[0] = rangeFun(compressionRange[0], sub, obj['end'][0])
  console.log('obj[end]', obj['end'])
  console.log('compressionRange', compressionRange)
  while (!(compressionRange[0] <= binaryStrToDecimalNum(num_2) && compressionRange[1] >= binaryStrToDecimalNum(num_2))) {
    if (compressionRange[1] < binaryStrToDecimalNum(num_2 + '1')) num_2 += '0'
    else num_2 += '1'
  }

  console.log('num_2', num_2)
  console.log('binaryStrToDecimalNum', binaryStrToDecimalNum(num_2))
  console.log(Boolean(binaryStrToDecimalNum(num_2) >= compressionRange[0] && binaryStrToDecimalNum(num_2) <= compressionRange[1]))
  return num_2
}
function rangeFun(range0, sub, objKey) {
  let longLenght = 0
  let decimalRange0Lenght = Number.isInteger(range0) ? 0 : String(range0).length - 2,
    decimalSubLenght = Number.isInteger(sub) ? 0 : String(sub).length - 2,
    decimalObjKeyLenght = Number.isInteger(objKey) ? 0 : String(objKey).length - 2
  longLenght = Math.max(decimalRange0Lenght, decimalSubLenght + decimalObjKeyLenght)
  //   console.log('longLenght', longLenght)
  return Math.round((range0 + sub * objKey) * 10 ** longLenght) / 10 ** longLenght
}
function subFun(a, b) {
  let longLenght = 0
  let decimalALenght = Number.isInteger(a) ? 0 : String(a).length - 2,
    decimalBLenght = Number.isInteger(b) ? 0 : String(b).length - 2
  decimalALenght >= decimalBLenght ? (longLenght = decimalALenght) : (longLenght = decimalBLenght)
  return Math.round((a - b) * 10 ** longLenght) / 10 ** longLenght
}
console.log('subFun', subFun(1, 0))
function binaryStrToDecimalNum(binaryStr) {
  let result = 0
  let underNum = binaryStr !== '0.' ? binaryStr.slice(2) : '0'
  for (let i = 0; i < underNum.length; i++) {
    if (underNum[i] === '1') result += 0.5 ** (i + 1)
  }
  return result
}

let count = 0
function decompress(binaryStr) {
  let obj = makeObj()
  let decompressRange = [0, 1]
  let finish = false
  let result = ''
  const decimalNum = binaryStrToDecimalNum(binaryStr)
  while (!finish && count < 10) {
    console.log('result', result, 'decompressRange', decompressRange, count)
    count++
    for (let key in obj) {
      let copyDecryptRange = decompressRange.slice()
      const sub = copyDecryptRange[1] - copyDecryptRange[0]
      copyDecryptRange[1] = rangeFun(copyDecryptRange[0], sub, obj[key][1])
      copyDecryptRange[0] = rangeFun(copyDecryptRange[0], sub, obj[key][0])
      console.log('key', key, 'copyDecryptRange', copyDecryptRange, 'decimalNum', decimalNum)
      if (copyDecryptRange[0] <= decimalNum && copyDecryptRange[1] >= decimalNum) {
        console.log('if')
        decompressRange = copyDecryptRange
        if (key === 'end') finish = true
        else result += key
        break
      }
    }
  }
  return result
}
let compressioned = compression('abcdefgh')
console.log('compressioned', compressioned)
let decompressed = decompress(compressioned)
console.log('decompressed', decompressed)
