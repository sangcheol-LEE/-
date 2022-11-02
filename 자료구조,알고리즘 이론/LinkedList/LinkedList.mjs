// 연결리스트는 데이터를 담은 노드를 서로 연결하는 구조
// 가장 먼저, 노드를 만들어준다.
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

{/*
  ## 연결리스트의 추상자료형

  1. 모든 데이터 출력 - printAll();
  2. 모든 데이터 제거 - clear();
  3. 원하는 인덱스에 데이터를 삽입하는 기능 - insertAt(index, data);
  4. 마지막 데이터 뒤에 데이터를 삽입하는 기능 - insertLast(index)
  5. 원하는 인덱스에 데이터를 삭제하는 기능 - deleteAt(index);
  6. 마지막 데이터를 삭제하는 기능 - deleteLast();
  7. 원하는 인덱스에 있는 데이터를 읽는 기능 - getNodeAt(index);
*/}

class LinkedList {
  constructor() {
    this.head = null; // 연결리스트의 시작노드를 가리키는 head
    this.count = 0; // 연결리스트 노드의 갯수를 나타내는 count
  }

  printAll() {
    let currentNode = this.head;
    console.log("first",currentNode)
    console.log(" ==================")
    while(currentNode != null) {
      console.log(currentNode)
      currentNode = currentNode.next
    }
  }

  // 원하는 인덱스에 데이터를 삽입하는 기능 함수
  // 삽입할 위치를 나타내는 index,삽입할 데이터를 뜻하는 data 매개변수
  insertAt(index, data) {
    // 1. 예외처리
    if(index > this.count || index < 0) {
      throw new Error("범위를 벗어났습니다.")
    }

    // 2. 새로 삽입할 노드를 생성
    let newNode = new Node(data)

    // 노드를 만들기 전에 2가지 상황을 고려한다.
    // 1. 리스트의 가장 앞부분에 삽입하는 경우 - 새로 삽입하는 노드가 head가 되어야 함
    // 2. 가장 앞부분을 제외한 나머지 부분에 삽입하는 경우 - head 노드에서 목표 index까지 계속 참조해서 가는 경우

    if(index === 0) {
        newNode.next = this.head;
        this.head = newNode;
    } else {
        // 만약 인덱스 3에 삽입한다면, head노드에서 3번째 떨어진 노드에 삽입하는 경우
        // 삽입하려는 노드 바로 전까지 가기위한 변수 하나.
        let currentNode = this.head;
        for(let i = 0; i < index - 1; i++) {
          currentNode = currentNode.next
        }
        newNode.next = currentNode.next
        currentNode.next = newNode
    }
    this.count++
  }
}

export { Node, LinkedList };