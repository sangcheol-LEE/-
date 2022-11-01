const strLength = (arr) => {
   if(arr[0] == null) return 0 // 기저조건, 배열의 0번 인덱스가 없다면, 문자열이 없는 것이므로 길이는 0
  return strLength(arr.slice(0, -1)) + 1;
}

let str = "abcde";
let ret = strLength(str);

console.log(ret)