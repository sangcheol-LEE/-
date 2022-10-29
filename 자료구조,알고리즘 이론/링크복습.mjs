class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constuctor() {
    this.head = null; // 연결리스트의 시작 노드를 가르킨다.
    this.count = 0; // 연결리스트의 총 저장된 노드의 수
  }

  // 해당 인덱스의 노드를 읽는 함수
  getNodeAt(index) {
    // 매개변수 index는 읽으려는 노드

    if(index >= this.count || index < 0) {
      throw new Error ("범위를 벗어났습니다.")
    }
    // 리스트를 순회할 변수를 만들어준다.
    let currentNode = this.head;

    // 이제 currentNode가 해당 인덱스까지 순회합니다.
    for(let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    // 마지막으로 currentNode를 리턴해주면 끝 !
    return currentNode

  }

  deletedLast() {
    this.deletedAt(this.count -1)
  }

  // insertAt의 반대 기능인 원하는 인덱스의 요소를 삭제하는 함수
  deletedAt(index) {
    // 예외처리
    // 1. 삽입할 인덱스가 연결리스트의 크기보다 큰 곳에 삽입하거나
    // 2. 삽입할 인덱스가 음수로 들어온 경우에 에러를 발생시킨다.
    if(index >= this.count || index < 0) {
      throw new Error("deleteAt 범위 오류 입니다.")
    }

    // 노드를 순회할 변수를 만들어준다. - currentNode
    let currentNode = this.head;
    
    // 두가지 상황을 고려한다.
    // 1. head node, 즉 가장 첫 번째 노드를 제거하는 상황
    // 2. 첫 번째 노드를 제외한 나머지 노드를 제거하는 상황

    if(index === 0) {
      // head node를 제거하는 상황
      let deletedNode = this.head; // 삭제된 노드를 리턴하기 위해 삭제될 노드를 저장해줍니다.
      this.head = this.head.next // head를 head의 next노드로 설정해주면 됩니다.
      this.count--; // node가 하나 삭제 됐으니 count도 하나 줄여줍니다.
      return deletedNode // 삭제된 노드는 리턴해준다.
    } else {
      // head node를 제외한 나머지 노드를 제거하는 상황

      // for문으로 제거할 노드 이전 노드까지 순회합니다.
        for(let i = 0; i < index - 1; i++) {
          currentNode = currentNode.next;
        }
      // for문을 마치면 currentNode는 제거할 노드의 이전노드를 가르킨다.
      // 제거한 노드는 반환되어야 하므로 변수(deletedNode) 에 저장해준다.
        let deletedNode = currentNode.next
      // 제거할 노드의 이전노드(currentNode)가 제거할 노드의 next노드를 가리키게 해준다.
        currentNode.next = currentNode.next.next;
      // 삭제를 했으니 count를 줄여주고 삭제된 노드를 리턴해준다.
        this.count--;
        return deletedNode

    }
  }

  // 리스트의 마지막 데이터 뒤에 요소를 삽입하는 함수
  insertLast(data) {
    this.insertAt(this.count, data)
  }

  // 리스트의 모든 원소를 지우는 함수
  clear() {
    // Head가 null을 가리키게 해서 참조하는 것을 없게 만들고,
    this.head = null;
    // 카운트를 0으로 만들어주면 리스트는 비워진다.
    this.count = 0;
  }


  // 연결리스트의 모든 원소를 출력하는 함수
  printAll() {
    // 먼저 currentNode 변수가 head를 가리키게 한다.
    let currentNode = this.head;
    let text = "["
    // 이제 리스트의 끝까지 순회해준다
    while(currentNode != null) {
      // 텍스트 변수에 currentNode의 데이터를 저장해줍니다.
      text += currentNode.data;
      currentNode = currentNode.next;

      // 그리고 currentNode가 마지막 데이터가 아니라면 콤마로 구분해줍니다.
      if(currentNode != null) {
        text += ", ";
      }
    }
    text += "]"
    console.log(text)
  }




  // 원하는 인덱스의 데이터를 삽입하는 함수
  insertAt(index, data) {
    // 원하는 삽입 위치를 뜻하는 index
    // 삽입할 데이털 뜻하는 data

    // 예외처리
    // 1. 삽입할 인덱스가 연결리스트의 크기보다 큰 곳에 삽입하거나
    // 2. 삽입할 인덱스가 음수로 들어온 경우에 에러를 발생시킨다.

    if(index < this.count || index < 0) {
      throw new Error ("범위를 벗어났습니다.")
    }
    // 새로 삽입할 노드를 생성해줌
    let newNode = new Node(data); // 매개변수 data를 Node의 생성자로 넘겨줘서 Node의 data를 생성함.
    // 2가지 상황을 고려해서 새로 생성한 노드를 연결해준다.

    // 1. 리스트의 가장 앞부분의 삽입하는 경우 - 새로 삽입하는 노드가 head가 돠어야 하는 경우
    // 2. 가장 앞부분을 제외한 나머지 부분에 삽입하는 경우 - head 노드에서 next로 목표 인덱스까지 계속 참조해서 가는 경우

    if(index === 0) {
      // 리스트의 가장 앞부분에 삽입하는 경우
      newNode.next = this.head; // 새로운 노드의 next가 head를 가르키고,
      this.head = newNode; // head의 값이 새로운 노드를 가르킨다.
    } else {
      // 원하는 인덱스까지 노드를 타고 들어가서 새로 삽입하는 경우
      // 만약 인덱스 3에 삽입한다면, head노드에서 세 번째 떨어진 노드에 삽입하는 경우입니다.
      // currentNode로 세 번째 떨어진 노드 전까지 이동하고,
      // newNode가 currentNode가 가리키던 노드 즉, 3번째 노드를 가리키게 한다.
      // 그리고 currentNode가 새로운 노드(data)를 가리키게 하면 끝.

      let currentNode = this.head; 
      // -> 삽입하려는 노드 바로 전까지 가기위한 변수, head에서 시작하기 때문에 head로 초기화 해줍니다.

      // 목표 인덱스 바로 전까지 next를 이용해 currentNode를 이동시킨다.
      for(let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next
      }
      newNode.next = currentNode.next
      currentNode.next = newNode;
     }
     this.count++
   }
}

export {Node,LinkedList};