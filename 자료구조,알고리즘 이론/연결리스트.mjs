class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  // 모든 노드를 지워주는 함수 

  // 연결리스트의 모든 원소를 출력하는 함수
  printAll() {
    let currentNode = this.head;

    while(currentNode !== null){
      console.log(currentNode.data)
      currentNode = currentNode.next
    }
  }

  // 원하는 인덱스에 데이터를 삽입하는 함수
  insertAt(index, data) {
    if(index > this.count || index < 0) {
      throw new Error("범위를 벗어났습니다.")
    }

    let newNode = new Node(data);

    if(index == 0) {
      newNode.next = this.head;
      this.head = newNode
    } else {
      // 원하는 인덱스까지 노드를 타고 들어가서 새로 삽입하는 경우
      let currentNode = this.head;

      for(let i =0; i < index - 1; i++ ) {
        currentNode = currentNode.next
      }
      newNode.next = currentNode.next
      currentNode.next = newNode
    }
    this.count++
  }
}

export { Node, LinkedList }