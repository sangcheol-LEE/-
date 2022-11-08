import { DoublyLinkedList } from "./DoublyLinkedList.mjs";

class Queue {
  constructor() {
    this.list = new DoublyLinkedList()
  }

  enqueue(data) {
    this.list.insertAt(0 ,data)
  }

  dequeue() {
    try{
      return this.list.deleteLast()
    }catch(e){
      return null;
    }
  }

  front(){
    return this.tail;
  }

  isEmpty() {
    return (this.list.count == 0)
  }

}

let queue = new Queue()

console.log("=====================")
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

console.log(queue.front())
console.log("=====================")

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())

console.log(`isEmpty : ${queue.isEmpty()}`);






export {Queue}