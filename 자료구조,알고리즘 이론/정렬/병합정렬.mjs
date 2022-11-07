/*
  병합정렬
  - 이전에 배운 정렬과 비교하면 조금 복잡한 정렬 알고리즘 !
  * 해결하기 힘든 문제가 발생한다면, 이걸 한 번에 해결하려고 하지 말고 해결하기 쉬울 정도로 문제를 쪼갠 다음 하나씩 해결하라!
  => 분할정복 (divide and conquer)

  # 병합 정렬은 재귀로 정렬하는 알고리즘 입니다.
*/

const 병합정렬 = (arr, leftIndex, rightIndex) => {
  // 기저조건
  if(leftIndex < rightIndex) {
    let middleIndex = parseInt((leftIndex + rightIndex) / 2)
    병합정렬(arr, leftIndex, middleIndex);
    병합정렬(arr, middleIndex + 1, rightIndex)
    병합(arr, leftIndex, middleIndex, rightIndex)
  }
}

const 병합 = (arr, leftIndex, middleIndex, rightIndex) => {
  let leftAreaIndex = leftIndex;
  let rightAreaIndex = middleIndex + 1;

  let tempArr = [];
  tempArr.length = rightIndex + 1;
  tempArr.fill(0,0,rightIndex + 1)

  let tempArrIndex = leftIndex;
  while(leftAreaIndex <= middleIndex && rightAreaIndex <= rightIndex) {
    if(arr[leftAreaIndex] <= arr[rightAreaIndex]) {
      tempArr[tempArrIndex] = arr[leftAreaIndex++]
    } else {
      tempArr[tempArrIndex] = arr[rightAreaIndex++]
    }
    tempArrIndex++
  }

  if(leftAreaIndex > middleIndex) {
    for(let i = rightAreaIndex; i <= rightIndex; i++) {
      tempArr[tempArrIndex++] = arr[i]
    }
  }else {
    for(let i = leftAreaIndex; i <= middleIndex; i++) {
      tempArr[tempArrIndex++] = arr[i];
    }
  }
    for(let i = leftIndex; i <= rightIndex; i++) {
      arr[i] = tempArr[i]
    }
}

let ret = [3,5,2,4,1,7,8,6];

console.log("===== 정렬 전 =====")
console.log(ret)

병합정렬(ret, 0, ret.length - 1)

console.log("===== 정렬 후 =====")
console.log(ret)

/*
  병합정렬의 성능
  장점
  성능이 이전 정렬들 보단 좋음 !

  단점
  이해와 구현이 어려움
*/