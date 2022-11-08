/*
  숫자들이 공백으로 구분된 문자열이 주어집니다. 문자열에 있는 숫자를 차례대로 더하려고 합니다. 이 때 “Z”가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다.
  숫자와 “Z”로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.

  제한사항

  0 < s의 길이 < 1,000
  -1,000 < s의 원소 중 숫자 < 1,000
  s는 숫자, "Z", 공백으로 이루어져 있습니다.
  s에 있는 숫자와 "Z"는 서로 공백으로 구분됩니다.
  연속된 공백은 주어지지 않습니다.
  0을 제외하고는 0으로 시작하는 숫자는 없습니다.
  s의 시작과 끝에는 공백이 없습니다.
  모든 숫자를 지우는 경우는 주어지지 않습니다.
  지울 숫자가 없는 상태에서 "Z"는 무시합니다.
*/

function solution(s) {
  let answer = 0;
  let arr = s.split(" ")
  let ret = []
  for(let i = 0; i < arr.length; i++) {
    ret.push(arr[i])
    if(arr[i] === "Z") {
      ret.pop()
      ret.pop()
    }
  }
  answer = ret.map(item => {
    return Number(item)
  })

  return answer.reduce((car, cur) => {
    return car + cur
  },0)
}

// 스택구조를 생각하며 구현해봤음.

