const insert = arr => {

  for(let i = 1; i < arr.length; i++) {
    let 정렬되지_않은_함수 = arr[i];
    let j;

    for(j = i - 1; j >= 0; j--) {
      if(arr[j] > 정렬되지_않은_함수) {
        arr[j + 1] = arr[j]
      }else {
        break;
      }
    }
    arr[j + 1] = 정렬되지_않은_함수
  }

}


const x = [6,3,16,9,1]

console.log("정렬 전")
console.log(x)

insert(x)

console.log("정렬 후")
console.log(x)

