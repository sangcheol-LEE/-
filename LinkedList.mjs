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
    
    }
}

export { Node,LinkedList  };