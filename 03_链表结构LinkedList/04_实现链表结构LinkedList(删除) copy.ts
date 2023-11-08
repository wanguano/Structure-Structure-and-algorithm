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
class LinkedList<T> {
  // 头部指向
  private head: Node<T> | null = null
  private size: number = 0

  // 链表大小
  get length(): number {
    return this.size
  }

  // 追加节点
  append(item: T) {
    const newNode = new Node<T>(item)
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

  // 插入节点
  insert(value: T, position: number): boolean {
    const newNode: Node<T> = new Node<T>(value)
    // 1.越界情况 <0 || >链表长度
    if (position < 0 || position > this.size) return false
    if (position === 0) {
      // 目的改变头部节点的指向
      // 插入头部, 设置当前节点的next为头部节点,然后再设置头部节点为当前节点
      newNode.next = this.head
      this.head = newNode
    } else {
      // 插入中间位置
      // 1.拿到当前要插入的节点
      let index: number = 0
      let previousNode: Node<T> | null = null
      let currentNode: Node<T> | null = this.head
      // 找到目标节点
      while (index++ < position && currentNode) {
        // 拿到前一个节点
        previousNode = currentNode
        // 指向下一个节点
        currentNode = currentNode?.next
      }
      // 1.新插入的节点,指向当前节点
      newNode.next = currentNode
      // 2.上一个节点,指向新插入的节点
      previousNode!.next = newNode
    }
    this.size++
    return true
  }

  // 删除节点
  removeAt(position: number): T | null {
    // 1.越界情况 <0 || >链表长度
    if (position < 0 || position >= this.size) return null

    let willRemoveElement: T
    // 1.删除头节点
    if (position === 0 && this.head) {
      willRemoveElement = this.head.element
      // 目的：让头节点，指向第二个节点(改变头节点指向)
      this.head = this.head?.next
    } else {
      // 删除中间节点
      let previousNode: Node<T> | null
      let currentNode: Node<T> | null = this.head
      let index: number = 0
      while (index++ < position && currentNode) {
        // 前一个节点
        previousNode = currentNode
        // 后一个节点
        currentNode = currentNode.next
      }
      willRemoveElement = currentNode!.element
      // 让前一个节点的next指向为当前节点的next
      previousNode!.next = currentNode?.next || null
    }
    this.size--
    return willRemoveElement
  }
}

const linkedList = new LinkedList<string>()
linkedList.append('aaa')
linkedList.append('bbb')
linkedList.append('ccc')
linkedList.append('ddd')
linkedList.traverse()

// linkedList.removeAt(0)
console.log(linkedList.removeAt(3))
linkedList.traverse()
// linkedList.insert('abc', 0)
// linkedList.traverse()
// linkedList.insert('abc', 3)
// linkedList.traverse()

export {}
