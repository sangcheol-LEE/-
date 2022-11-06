// 문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다.
// my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.


const solution = (my_string) => {
  let answer = 0;
  let reg  = /[0-9]+/g;
  let ret = my_string.match(reg);
  if(ret === null) {
    answer = 0
  } else {
    let result = ret.map(item => {return Number(item)})
    answer = result.reduce((acc, cur) => {
      return acc + cur
    },0)
  }
  console.log(answer)
  return answer;
}
solution("aAb1B2cC34oOp") // 37
solution("1a2b3c4d123Z") // 133
solution("abcZ")

