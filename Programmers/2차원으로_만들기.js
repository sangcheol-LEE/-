// 정수 배열 num_list와 정수 n이 매개변수로 주어집니다. num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.
// num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 num_list를 2 * 4 배열로 다음과 같이 변경합니다.
// 2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터 n개씩 나눠 2차원 배열로 변경합니다.

// num_list	, n  =>	result
// [1, 2, 3, 4, 5, 6, 7, 8], 	2	 => [[1, 2], [3, 4], [5, 6], [7, 8]]

const solution = (arr, n) => {
  let answer = [] 
  
  for(let i = 0; i < arr.length / n; i++) {
    answer.push(arr.slice(i * n, i * n + n))
  }
  
  return answer
}

// 이 문제는 실제 프로젝트에서 서버에서 받아온 데이터를 랜더링 하기 전에 데이터 가공을 하며 직접 사용했던 로직으로 ,
// 꽤나 기억에 남는 웃픈 코드였다. 재밌었다.