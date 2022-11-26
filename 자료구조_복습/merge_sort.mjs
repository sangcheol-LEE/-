const sort = (arr, leftIndex, rightIndex) => {
  if(leftIndex < rightIndex) {
    let midIndex = parseInt((leftIndex + rightIndex) / 2);
    sort(arr, leftIndex, midIndex)
    sort(arr, midIndex + 1, rightIndex)
    merge(arr, leftIndex, midIndex, rightIndex)
  }
}

const merge = (arr, leftIndex, midIndex, rightIndex) => {
   let leftAreaIndex = leftIndex
   let rightAreaIndex = midIndex + 1

   let tempArr = [];
   tempArr.length = rightIndex + 1
   tempArr.fill(0,0,rightIndex + 1)

   let tempIndex = leftIndex;
   while(leftAreaIndex <= midIndex && rightAreaIndex <= rightIndex) {
     if(arr[leftAreaIndex] <= arr[rightAreaIndex]) {
       tempArr[tempIndex] = arr[leftAreaIndex++];
     } else {
       tempArr[tempIndex] = arr[rightAreaIndex++];
     }
     tempIndex++
   }
}