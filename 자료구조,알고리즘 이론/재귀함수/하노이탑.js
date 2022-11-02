const hanoi = (count, from, to, temp) => {
              // 3,    A,   C,    B

  // 기저 조건은 원반이 없는 경우로
  if(count === 0) return;
  
  //원반의 숫자 count = 3, 원반들이 처음 꽂혀있는 기둥인 from, 원반들이 최종적으로 꽂힐 기둥인 to, 원반들이 이동을 위헤 일시적으로 사용되는 기둥 temp
  hanoi(count - 1, from, temp, to)
  //        2,       A,   B,   C
  console.log(`원반 ${count}를 ${from}에서 ${to}로 이동`)
  hanoi(count - 1, temp, to, from)
  //        2,      B,   C,    A

}

hanoi(3, "A","C","B"); // 첫 번째 인자로 넘겨준 3은 원반의 갯수를 나타내고,
//시작은 A기둥에서  목표는 C기둥이고 임시로 B기둥을 사용


