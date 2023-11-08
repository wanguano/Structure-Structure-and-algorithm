// 创建节点结构
class Node<T> {
  // 节点value
  element: T
  // 指定当前节点的下一个节点执行
  next: Node<T> | null = null

  // 初始化
  constructor(value: T) {
    this.element = value
  }
}

// 实现链表结构
class MyLinkedList<T> {
  // 头部指向
  private head: Node<T> | null = null
  private size: number = 0

  // 获取目标节点
  private getNode(position: number): Node<T> | null {
    if (position < 0 || position >= this.size) return null
    let targetNode: Node<T> | null = this.head
    let index: number = 0
    while (index++ < position && targetNode) {
      targetNode = targetNode.next
    }
    return targetNode
  }

  // 链表大小
  get length(): number {
    return this.size
  }

  // 追加节点 void addAtTail(int val) 将一个值为 val 的节点追加到链表中作为链表的最后一个元素。
  addAtTail(val: T) {
    const newNode = new Node<T>(val)
    // 分两种情况，链表的head有指向？无指向
    if (!this.head) {
      this.head = newNode
    } else {
      // 追加到最后，目的就是拿到最后一个Node节点，指定它的next执行
      // 首先拿到头head节点,找到最后一个next节点
      let current: Node<T> = this.head
      while (current.next) {
        current = current.next
      }
      // 最后的Node节点，为null
      current.next = newNode
    }
    this.size++
  }

  // 遍历链表的方法
  traverse() {
    // 从头到尾Node节点的value进行打印
    let current: Node<T> | null = this.head
    let nodeValueList: T[] = []
    while (current) {
      nodeValueList.push(current.element)
      current = current.next
    }
    // 确定链表有value再打印
    nodeValueList.length && console.log(nodeValueList.join('-->'))
  }

  // 插入节点void addAtIndex(int index, int val) 将一个值为 val 的节点插入到链表中下标为 index 的节点之前。如果 index 等于链表的长度，那么该节点会被追加到链表的末尾。如果 index 比长度更大，该节点将 不会插入 到链表中。
  // addAtIndex(value: T, position: number): boolean {
  addAtIndex(index: number, val: T): boolean {
    const newNode: Node<T> = new Node<T>(val)
    // 1.越界情况 <0 || >链表长度
    if (index < 0 || index > this.size) return false
    if (index === 0) {
      // 目的改变头部节点的指向
      // 插入头部, 设置当前节点的next为头部节点,然后再设置头部节点为当前节点
      newNode.next = this.head
      this.head = newNode
    } else {
      let previousNode: Node<T> | null = this.getNode(index - 1)
      newNode.next = previousNode!.next
      previousNode!.next = newNode
    }
    this.size++
    return true
  }

  // 删除节点
  deleteAtIndex(index: number): T | null {
    // 1.越界情况 <0 || >链表长度
    if (index < 0 || index >= this.size) return null

    let willRemoveElement: T
    // 1.删除头节点
    if (index === 0 && this.head) {
      willRemoveElement = this.head.element
      // 目的：让头节点，指向第二个节点(改变头节点指向)
      this.head = this.head?.next
    } else {
      // 删除中间节点
      let previousNode: Node<T> | null
      previousNode = this.getNode(index - 1)
      previousNode!.next = previousNode?.next?.next ?? null
      willRemoveElement = previousNode!.element
    }
    this.size--
    return willRemoveElement
  }

  // void addAtHead(int val) 将一个值为 val 的节点插入到链表中第一个元素之前。在插入完成后，新节点会成为链表的第一个节点。
  addAtHead(val: T) {
    // 插入头结点
    let newNode: Node<T> = new Node<T>(val)
    newNode.next = this.head
    this.head = newNode
    this.size++
  }

  // 获取值(目标值,根据下标)
  get(index: number): T | number {
    // 1.越界情况 <0 || >链表长度
    if (index < 0 || index >= this.size) return -1
    // 目标返回节点
    return this.getNode(index)?.element || -1
  }
}
/*
  ["MyLinkedList","addAtHead","addAtIndex","get","addAtHead","get"/,"addAtHead/","get","get","addAtIndex","addAtTail","addAtHead"]

  [[],[0],[1,1],[2],[4],[2]/,[4]/,[2]/,[3],[1,6],[1],[0]]
*/

const linkedList = new MyLinkedList<number>()
linkedList.addAtHead(0)
linkedList.addAtIndex(1,1)
console.log(linkedList.get(2))
linkedList.addAtHead(4)
console.log(linkedList.get(2))
linkedList.addAtHead(4)
console.log(linkedList.get(2))
console.log(linkedList.get(3))
linkedList.addAtIndex(1,6)
linkedList.addAtTail(1)
linkedList.addAtHead(1)
linkedList.traverse()



// linkedList.addAtHead(1);
// linkedList.addAtTail(3);
// linkedList.addAtIndex(1, 2);    // 链表变为 1->2->3
// linkedList.traverse()
// linkedList.get(1);              // 返回 2
// linkedList.deleteAtIndex(1);    // 现在，链表变为 1->3
// linkedList.traverse()
// console.log(linkedList.get(1))             // 返回 3
// linkedList.traverse()
console.log('------------')

// linkedList.append('aaa')
// linkedList.append('bbb')
// linkedList.append('ccc')
// linkedList.append('ddd')
// linkedList.traverse()

// console.log('--------insert----------')
// linkedList.insert('cba', 0)
// linkedList.insert('nba', 4)
// linkedList.traverse()
// console.log('--------remove----------')
// linkedList.removeAt(0)
// linkedList.removeAt(0)
// linkedList.removeAt(3)
// linkedList.traverse()
// console.log(linkedList.get(0))
// console.log(linkedList.get(3))
// console.log(linkedList.get(3))
// linkedList.insert('abc', 0)
// linkedList.traverse()
// linkedList.insert('abc', 3)
// linkedList.traverse()

export {}
