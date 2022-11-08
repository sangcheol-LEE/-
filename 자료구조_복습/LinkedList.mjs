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
      this.head = this.head.next;
      this.count--;
      return deletedNode
    } else {
       for(let i = 0; i < index - 1; i++) {
         currentNode = currentNode.next
       }
       let deletedNode = currentNode.next;
       currentNode.next = currentNode.next.next
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
      this.head = newNode;
    } else {
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

let list = new LinkedList()

list.insertAt(0,0)
list.insertAt(1,1)
list.insertAt(2,2)
list.printAll()
list.clear()
list.printAll()
list.insertLast(1)
list.insertLast(3)
list.insertLast(5)
list.insertLast(7)
list.printAll()
list.deleteAt(0)
list.printAll()
list.deleteAt(2)
list.printAll()
console.log(list.deleteLast())
list.printAll()
console.log(list.getNodeAt(0))








