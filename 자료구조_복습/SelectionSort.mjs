/*
  1. 선택 정렬은 배열의 정렬되지 않은 영역의 첫 번째 원소를 시작으로 마지막 원소까지 비교 후 가장 작은 값을 첫 번째 원소로 가져옵니다.
  2. 그 다음도 정렬되지 않은 영역의 첫 번째 원소를 시작으로 마지막 원소까지 비교 후 가장 작은 값을 첫 번째 원소로 가져옵니다.

*/

  const SelectionSort = (arr) => {
    for(let i = 0; i < arr.length - 1; i++) {
      let minumumIndex = i;

      for(let j = i + 1; j < arr.length; j++) {
        if(arr[j] < arr[minumumIndex]) {
          minumumIndex = j
        }
      }

      let temp = arr[i]

      arr[i] = arr[minumumIndex];
      arr[minumumIndex] = temp
    }
  }



const x = [3,2,5,1,23,31,6,8];
console.log(x)
console.log("===== before sort ======")
SelectionSort(x)
console.log(x)


