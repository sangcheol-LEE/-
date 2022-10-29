import { Node, LinkedList } from "./자료구조,알고리즘 이론/링크복습.mjs";

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node1.next = node2;
node2.next = node3;

let arr = [node1.data, node1.next.data, node1.next.next.data]
console.log("first",arr);
let arr2 = [node1.data, node2.data, node3.data]
console.log("second", arr2)


let list = new LinkedList() // 연결리스트의 인스턴스화.

console.log("===== insertAt 호출 =====");
list.insertAt(0, 0);
list.insertAt(1, 1);
list.insertAt(2, 2);
list.insertAt(3, 3);
list.insertAt(4, 4);
list.printAll()

console.log("===== clear ===== ")
list.clear();
list.printAll()

console.log("===== insertLast =====");
list.insertLast(1);
list.insertLast(20);
list.insertLast(300);
list.insertLast(4000);
list.insertLast(50000);
list.printAll()

console.log("==== deleted At ====");
list.deletedAt(0)
list.printAll()
list.deletedAt(2)
list.printAll()

console.log("==== deleted Last ====");
list.deletedLast()
list.printAll()
list.deletedLast()
list.printAll()

console.log("===== getNodeAt =====");
list.insertLast(1)
list.insertLast(77)
list.insertLast(888)
list.printAll()
console.log(list.getNodeAt(1));
console.log(list.getNodeAt(3));


