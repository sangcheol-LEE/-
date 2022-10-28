const solution = (n) => {
  let answer = [];
  let ret=[]
  for(let i = 1; i <= n; i++ ) {
      for(let j = 1; j <=n; j++) {
        if(i % j === 0) {
          ret.push(i)
        }
      }
    }

  const res = ret.reduce((accu, cur) => {
    accu[cur] = (accu[cur] || 0) + 1
    return accu
  },{})

  for(let item in res) {
    if(res[item] >= 3) {
      answer.push(item)
    }
  }
  return answer.length;
}

solution(10)
solution(15)
