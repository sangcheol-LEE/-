class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next
  }
}

class LinkedList {
  constructor() {
    // 연결리스트의 시작 노드를 가리키는 head
    this.head = null;
    // 총 저장된 노드의 수를 저장하는 count프로퍼티를 만들어 초기화
    this.count = 0;
  }


  insertAt(index, data) {
      if(index > this.count || index < 0) {
        throw new Error("범위를 벗어났습니다.")
      }
      let newNode = new Node(data);

      if(index == 0 ) {
        newNode.next = this.head;
        this.head = newNode
      } else {
        // 삽입하려는 노드 바로 전까지 가기 위한 변수를 하나 만든다.
        let currentNode = this.head;
        for(let i = 0; i < index - 1; i++) {
          currentNode = currentNode.next
        }
        newNode.next = currentNode.next
      }
      this.count++
    }
}

export { Node,LinkedList  };