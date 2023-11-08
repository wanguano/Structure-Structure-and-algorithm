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
      let previousNode: Node<T> | null = this.getNode(position - 1)
      newNode.next = previousNode!.next
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
      previousNode = this.getNode(position - 1)
      previousNode!.next = previousNode?.next?.next ?? null
      willRemoveElement = previousNode!.element
    }
    this.size--
    return willRemoveElement
  }

  // 获取值(目标值,根据下标)
  get(position: number): T | null {
    // 1.越界情况 <0 || >链表长度
    if (position < 0 || position >= this.size) return null
    // 目标返回节点
    return this.getNode(position)?.element ?? null
  }

  // 更新值
  update(position: number, value: T) {
    // 如果更新为头节点,会直接返回false
    if (position < 0 || position >= this.size) return
    // 找到目标节点,更新value
    this.getNode(position)!.element = value
  }

  // 索引值
  indexOf(value: T): number {
    let index: number = 0
    let currentNode: Node<T> | null = this.head
    while (currentNode) {
      if (currentNode.element === value) {
        return index
      }
      currentNode = currentNode.next
      index++
    }
    return -1
  }
}

const linkedList = new LinkedList<string>()
linkedList.append('aaa')
linkedList.append('bbb')
linkedList.append('ccc')
linkedList.append('ddd')
linkedList.traverse()

console.log('--------insert----------')
linkedList.insert('cba', 0)
linkedList.insert('nba', 4)
linkedList.traverse()
console.log('--------remove----------')
linkedList.removeAt(0)
linkedList.removeAt(0)
linkedList.removeAt(3)
linkedList.traverse()
console.log('--------update----------')
linkedList.update(0, 'haha')
linkedList.update(2, 'niko')
linkedList.traverse()
console.log('--------indexOf----------')
console.log(linkedList.indexOf('haha'))
console.log(linkedList.indexOf('ccc'))
console.log(linkedList.indexOf('shayemei'))

// console.log(linkedList.get(0))
// console.log(linkedList.get(3))
// console.log(linkedList.get(3))
// linkedList.insert('abc', 0)
// linkedList.traverse()
// linkedList.insert('abc', 3)
// linkedList.traverse()

export {}
