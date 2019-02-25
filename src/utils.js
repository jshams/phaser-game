const sayHello = () => {
  console.log('Hello')
}
const sayYo = () => {
  console.log('Yooo')
}
const sayWord = (word) => {
  console.log(word)
}

const printArr = (arr) => {
  var text = ''
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      printArr(arr[i])
    }
    // console.log(text + " += " + arr[i])
    text += arr[i] + ' ';
  }
  console.log(text)
}

const multiDimArr = (height, width) => {
  let text = ''
  for (let i = 0; i < width; i++) {
    text += '0 '
  }
  for (let i = 0; i < height; i++){
    console.log(text)
  }
}

const overwriteArr = (arr1, arr2, ind) => {
  console.log(arr1);
  for (let i = ind; i < arr1.length; i ++){
    if (arr2[i - ind]) {
      arr1[i] = arr2[i - ind]
    }
  }
  console.log(arr1)
}



export default sayHello
export {sayYo, sayWord, printArr, multiDimArr, overwriteArr}
