// 创建节点结构
class Node<T> {
  // 节点value
  private element: T
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
  get length() {
    return 0
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
}

const linkedList = new LinkedList<string>()
linkedList.append('aaa')
linkedList.append('bbb')
export {}
