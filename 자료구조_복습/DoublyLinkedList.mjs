class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null; // 연결리스트의 첫 번째 노드
    this.tail = null; // 연결리스트의 마지막 노드
    this.count = 0;
  }

  getNodeAt(index) {
    if(index >= this.count || index < 0) {
      throw new Error("범위를 벗어났습니다")
    }

    let currentNode = this.head

    for(let i = 0; i < index; i++) {
      currentNode = currentNode.next
    }

    return currentNode
  }

  deleteLast() {
    return this.deleteAt(this.count - 1)
  }

  deleteAt(index) {
    if(index >= this.count || index < 0) {
      throw new Error("범위를 벗어났습니다.")
    }

    let currentNode = this.head;

    if(index == 0) {
      let deletedNode = this.head;
      if(this.head.next == null) {
        this.head = null
        this.tail = null
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
      this.count--;
      return deletedNode
    } else if(index === this.count - 1) {
      let deletedNode = this.tail
      this.tail.prev.next = null
      this.tail = this.tail.prev
      this.count--;
      return deletedNode
    } else {
       for(let i = 0; i < index - 1; i++) {
         currentNode = currentNode.next
       }

       let deletedNode = currentNode.next;
       currentNode.next = currentNode.next.next
       currentNode.next.prev = currentNode
       this.count--;
       return deletedNode;
    }
  }

  insertLast(data) {
    this.insertAt(this.count,data)
  }

  clear() {
    this.head = null;
    this.count = 0;
  }

  printAll() {
    let currentNode = this.head;
    let text = "[";

    while(currentNode != null) {
      text += currentNode.data
      currentNode = currentNode.next

      if(currentNode != null) {
        text += ", "
      }
    }
    text += "]"
    console.log(text)
  }

  insertAt(index, data) {
    if(index > this.count || index < 0) {
      throw new Error("범위를 벗어났씁니다.")
    }

    let newNode = new Node(data)

    if(index == 0 ) {
      newNode.next = this.head;
      if(this.head != null) {
        this.head.prev = newNode;
      }
      this.head = newNode;
    } else if(index == this.count) {
      newNode.next = null;
      newNode.prev = this.tail;
      this.tail.next = newNode;
    } else {
      let currentNode = this.head;
      for(let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next
      }
      newNode.next = currentNode.next
      newNode.prev = currentNode;
      currentNode.next = newNode;
      newNode.next.prev = newNode;
    }
    if(newNode.next == null) {
      this.tail = newNode
    }
    this.count++
  }
}


export { DoublyLinkedList }







