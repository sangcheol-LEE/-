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

  insertAt(index,data) {
     if(index > this.count || index < 0) {
       throw new Error ("범위를 벗어났습니다.")
     }

     let newNode = new Node(data)

     if(index === 0){
       // 리스트의 가장 앞부분에 삽입하는 경우
       newNode.next = this.head;
       this.head = newNode;
     } else {
        let currentNode = this.head;

        for(let i = 0; i < index - 1; i++) {
          currentNode = currentNode.next; 
        }
        newNode.next = currentNode.next;
        currentNode.next = newNode;
     }
     this.count++
  }

}

export { Node, LinkedList };

