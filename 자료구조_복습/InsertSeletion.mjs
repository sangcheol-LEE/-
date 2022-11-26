const section = arr => {
  for(let i = 1; i<arr.length; i++) {
    let first = arr[i]
    let j;

    for(j = i - 1; j >= 0; j--) {
      if(arr[j] > first) {
        arr[j + 1] = first;
      } else {
        break;
      }
    }
    arr[j + 1] = first;
  }
}

const x = [3,6,8,12,1,4]

console.log(x)

console.log("========정렬전")
section(x)

console.log(x)




