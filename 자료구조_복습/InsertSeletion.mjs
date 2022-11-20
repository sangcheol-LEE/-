const InsetionSort = (arr) => {

  for(let i = 1; i < arr.length; i++) {
    console.log("i",i)
    let insertingData = arr[i];
    let j;

      for(j = i - 1; j >= 0; j--) {
        console.log("j",j)
        if(arr[j] > insertingData) {
          arr[j + 1] = arr[j]
        } else {
          break;
        }
      }

    arr[j + 1] = insertingData;
  }

}

const x = [3,5,4,1,667,65,2423,1,99,7,8,776]

console.log("==== 정렬 전 ====")
console.log(x)

InsetionSort(x)

console.log("==== 정렬 후 ====")
console.log(x)

