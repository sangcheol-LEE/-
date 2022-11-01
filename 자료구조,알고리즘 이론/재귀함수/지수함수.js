// 밑을 x로 지수를 n으로 정의한다.

const power = (x,n) => {
  if( n == 0 )return 1;
  return power(x , n - 1) * x;
}


console.log(power(4,6))
console.log(power(2,5))
