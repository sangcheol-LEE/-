// 문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

const solution = (s) => {
  let answer = []
  let ret = [...s].sort()
   
  const result = ret.reduce((acc ,cur) => {
    acc[cur] = (acc[cur] || 0) + 1 
    return acc
  },{})
  
  for(key in result) {
    if(result[key] === 1) {
      answer.push(key)
    }  
  } 
  console.log(answer.join(""))
  return answer.join("")
}

solution("abcabcadc") // "d"
solution("abdc") // "abcd"
solution("hello") // "eho"
